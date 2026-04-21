import { SearchProductValues } from "@/features/products/schemas/product.schema";
import { productService } from "@/server/products/services/product.service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const params: SearchProductValues = {
      ...Object.fromEntries(searchParams.entries()),
    };
    const products = await productService.getProducts(params);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get products : " + error },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const product = await productService.createProduct(body);

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return Response.json(
      {
        error: "Failed to create product: " + error,
      },
      { status: 500 },
    );
  }
}
