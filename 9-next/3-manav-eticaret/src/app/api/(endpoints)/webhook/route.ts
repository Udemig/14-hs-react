import { connect } from "http2";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import connectMongo from "../../utils/connectMongo";
import Order from "../../models/Order";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  typescript: true,
});

// Stripe'ta gerçekleşen olaylarda (ödeme başarılı/başarısız) kendi veritbanımızı güncellemek istediğimiz için webhook kurulu yaptık ve stripe'ın gerçekleşen olayları bu endpointe istek olarak atmasını istedik

export async function POST(req: Request) {
  try {
    //1) isteğin body kısmındaki olay verisine veriş
    const body = await req.json();

    //2) ödeme başarılı olduysa satın alınan ürünün verisine eriş
    if (body.type === "checkout.session.completed") {
      // ödeme oturumunun verileri al
      const session = body.data.object;

      // ödeme oturumunda satın alınan ürün/ürünlerin id'lerini al al
      const line_items = await stripe.checkout.sessions.listLineItems(
        session.id
      );

      // id'sini bildiğimiz ürünlerin strip katalog'undaki verilererine eriş
      const item = await stripe.products.retrieve(
        line_items.data[0].price?.product as string
      );

      // kendi veritbanımıza kaydediceğimiz sipariş verisini oluştur
      const orderItem = {
        product: item.metadata.product_id,
        money_spend: session.amount_total / 100,
        currency: session.currency,
        type: line_items.data[0].price?.type,
      };

      // satın alınan ürünü kendi veritabanımıza kaydet
      await connectMongo();
      await Order.create(orderItem);
    }

    return NextResponse.json({ status: "success" });
  } catch (error) {
    return NextResponse.json({ status: "undefined" });
  }
}
