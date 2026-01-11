import { NextResponse } from "next/server";
import Order from "../../../models/Order";
import connectMongo from "../../../utils/connectMongo";

type Params = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Params) {
  try {
    await connectMongo();

    const order = await Order.findById((await params).id).populate("items.product");

    if (!order) {
      return NextResponse.json(
        { message: "Sipariş bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({ order });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sipariş verileri alınamadı" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request, { params }: Params) {
  try {
    await connectMongo();

    const order = await Order.findById((await params).id);

    if (!order) {
      return NextResponse.json(
        { message: "Sipariş bulunamadı" },
        { status: 404 }
      );
    }

    const updateData = await req.json();

    const updatedOrder = await Order.findByIdAndUpdate(
      (
        await params
      ).id,
      { $set: updateData },
      { new: true }
    ).populate("items.product");

    return NextResponse.json({
      message: "Sipariş başarıyla güncellendi",
      order: updatedOrder,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sipariş güncellenemedi" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request, { params }: Params) {
  try {
    await connectMongo();

    const order = await Order.findById((await params).id);

    if (!order) {
      return NextResponse.json(
        { message: "Sipariş bulunamadı" },
        { status: 404 }
      );
    }

    await Order.findByIdAndDelete((await params).id);

    return NextResponse.json({
      message: "Sipariş başarıyla silindi",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sipariş silinemedi" },
      { status: 500 }
    );
  }
}
