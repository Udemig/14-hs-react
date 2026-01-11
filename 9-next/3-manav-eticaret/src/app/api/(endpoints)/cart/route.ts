import { NextResponse } from "next/server";
import connectMongo from "../../utils/connectMongo";
import Cart from "../../models/Cart";
import Grocery from "../../models/Grocery";

// Tüm sepet içeriğini getir
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "Kullanıcı ID gerekli" },
        { status: 400 }
      );
    }

    await connectMongo();

    // Kullanıcının sepetini bul
    let cart = await Cart.findOne({ userId }).populate("items.grocery");

    if (!cart) {
      // Sepet bulunamadıysa boş bir sepet oluştur
      cart = await Cart.create({
        userId,
        items: [],
        totalAmount: 0,
      });
    }

    return NextResponse.json({ cart });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sepet bilgileri alınamadı" },
      { status: 500 }
    );
  }
}

// Ürün ekle veya güncelle
export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { userId, groceryId, quantity } = data;

    if (!userId || !groceryId) {
      return NextResponse.json(
        { message: "Kullanıcı ID ve Ürün ID gerekli" },
        { status: 400 }
      );
    }

    await connectMongo();

    // Ürünü kontrol et
    const grocery = await Grocery.findById(groceryId);
    if (!grocery) {
      return NextResponse.json({ message: "Ürün bulunamadı" }, { status: 404 });
    }

    // Stok kontrolü
    if (grocery.stock < quantity) {
      return NextResponse.json({ message: "Yetersiz stok" }, { status: 400 });
    }

    // Kullanıcının sepetini bul
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // Sepet yoksa yeni bir sepet oluştur
      cart = new Cart({
        userId,
        items: [
          {
            grocery: groceryId,
            quantity,
            price: grocery.price,
            name: grocery.name,
          },
        ],
      });
    } else {
      // Sepet varsa, ürün sepette var mı kontrol et
      const itemIndex = cart.items.findIndex(
        (item: any) => item.grocery.toString() === groceryId
      );

      console.log("deneme", cart.items, groceryId);

      if (itemIndex > -1) {
        // Ürün sepette varsa, miktarı güncelle
        cart.items[itemIndex].quantity =
          cart.items[itemIndex].quantity + (quantity || 1);
      } else {
        // Ürün sepette yoksa, ekle
        cart.items.push({
          grocery: groceryId,
          quantity,
          price: grocery.price,
          name: grocery.name,
        });
      }
    }

    await cart.save();

    // Populte edilmiş sepeti geri dön
    const populatedCart = await Cart.findById(cart._id).populate(
      "items.grocery"
    );

    return NextResponse.json({
      message: "Ürün sepete eklendi",
      cart: populatedCart,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Ürün sepete eklenemedi" },
      { status: 500 }
    );
  }
}

// Tüm sepeti boşalt
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { message: "Kullanıcı ID gerekli" },
        { status: 400 }
      );
    }

    await connectMongo();

    // Kullanıcının sepetini sil
    await Cart.findOneAndUpdate(
      { userId },
      { $set: { items: [], totalAmount: 0 } }
    );

    return NextResponse.json({ message: "Sepet boşaltıldı" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Sepet boşaltılamadı" },
      { status: 500 }
    );
  }
}
