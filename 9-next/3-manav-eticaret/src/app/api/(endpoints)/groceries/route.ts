import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/app/api/utils/connectMongo";
import Grocery from "@/app/api/models/Grocery";

// Configure cache for this route
export const dynamic = 'force-dynamic'; // Or 'auto' with revalidation options

// GET handler for fetching all groceries
export async function GET(request: NextRequest) {
  try {
    await connectMongo();

    // Build query based on search parameters
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const query = searchParams.get('query');
    const organic = searchParams.get('organic');
    
    let filters: any = {};
    
    if (category) {
      filters.category = category;
    }
    
    if (query) {
      filters.$or = [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ];
    }
    
    if (organic === 'true') {
      filters.isOrganic = true;
    }

    const groceries = await Grocery.find(filters);

    return NextResponse.json({ groceries }, { status: 200 });
  } catch (error) {
    console.error("Error fetching groceries:", error);
    return NextResponse.json({ message: "Manav verileri alınamadı" }, { status: 500 });
  }
} 