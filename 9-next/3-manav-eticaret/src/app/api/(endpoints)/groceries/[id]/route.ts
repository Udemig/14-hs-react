import { NextResponse as Res } from "next/server";
import connectMongo from "@/app/api/utils/connectMongo";
import Grocery from "@/app/api/models/Grocery";

type Params = { params: Promise<{ id: string }> };

export async function GET(req: Request, { params }: Params) {
  try {
    await connectMongo();

    const grocery = await Grocery.findById((await params).id);

    if (!grocery) {
      return Res.json({ message: "Aranan ürün bulunamadı" }, { status: 404 });
    }

    return Res.json({ grocery });
  } catch (error) {
    return Res.json({ message: "Ürün verileri alınamadı" }, { status: 500 });
  }
} 