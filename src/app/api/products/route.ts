import { productService } from "@/server/products/services/product.service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const products = await productService.getProducts();
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

