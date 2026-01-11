import { NextResponse } from "next/server";
import connectMongo from "../../../utils/connectMongo";
import Cart from "../../../models/Cart";

// Sepetteki belirli bir ürünü güncelle
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const { userId, groceryId, quantity } = data;

    if (!userId || !groceryId) {
      return NextResponse.json(
        { message: "Kullanıcı ID ve Ürün ID gerekli" },
        { status: 400 }
      );
    }

    if (!quantity || quantity < 1) {
      return NextResponse.json(
        { message: "Geçerli bir miktar gerekli" },
        { status: 400 }
      );
    }

    await connectMongo();

    // Kullanıcının sepetini bul
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return NextResponse.json(
        { message: "Sepet bulunamadı" },
        { status: 404 }
      );
    }

    // Ürünün sepette olup olmadığını kontrol et
    const itemIndex = cart.items.findIndex(
      (item: any) => item.grocery.toString() === groceryId
    );

    if (itemIndex === -1) {
      return NextResponse.json(
        { message: "Ürün sepette bulunamadı" },
        { status: 404 }
      );
    }

    // Ürün miktarını güncelle
    cart.items[itemIndex].quantity = quantity;
    await cart.save();

    const updatedCart = await Cart.findById(cart._id).populate("items.grocery");

    return NextResponse.json({
      message: "Ürün miktarı güncellendi",
      cart: updatedCart,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Ürün güncellenemedi" },
      { status: 500 }
    );
  }
}

// Sepetten ürün kaldır
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const groceryId = searchParams.get("groceryId");

    if (!userId || !groceryId) {
      return NextResponse.json(
        { message: "Kullanıcı ID ve Ürün ID gerekli" },
        { status: 400 }
      );
    }

    await connectMongo();

    // Kullanıcının sepetini bul
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return NextResponse.json(
        { message: "Sepet bulunamadı" },
        { status: 404 }
      );
    }

    // Sepetten ürünü kaldır
    cart.items = cart.items.filter(
      (item: any) => item.grocery.toString() !== groceryId
    );

    await cart.save();

    const updatedCart = await Cart.findById(cart._id).populate("items.grocery");

    return NextResponse.json({
      message: "Ürün sepetten kaldırıldı",
      cart: updatedCart,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Ürün kaldırılamadı" },
      { status: 500 }
    );
  }
}
