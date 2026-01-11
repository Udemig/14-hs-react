import { NextResponse } from "next/server";
import Order from "../../models/Order";
import connectMongo from "../../utils/connectMongo";

export async function GET(req: Request) {
  try {
    await connectMongo();

    // URL'den query parametrelerini al
    const { searchParams } = new URL(req.url);
    const customer_id = searchParams.get("customer_id");

    let orders;

    // Eğer customer_id verilmişse sadece o kullanıcının siparişlerini getir
    if (customer_id) {
      orders = await Order.find({ customer_id }).populate("items.product");
    } else {
      // customer_id verilmemişse tüm siparişleri getir
      orders = await Order.find().populate("items.product");
    }

    return NextResponse.json({ orders });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Siparişler alınamadı" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectMongo();

    const orderData = await req.json();

    // Sipariş oluştur
    const newOrder = await Order.create(orderData);

    return NextResponse.json({
      message: "Sipariş başarıyla oluşturuldu",
      order: newOrder,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sipariş oluşturulamadı" },
      { status: 500 }
    );
  }
}
