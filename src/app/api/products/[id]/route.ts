import { productService } from "@/server/products/services/product.service";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const param = await params;
    const product = await productService.getProduct(param.id);
    if (!product) {
      return NextResponse.json(
        { message: "Product Not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch product" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await req.json();
    const param = await params;
    const product = await productService.updateProduct(param.id, body);

    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to update the product " + error },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const param = await params;
    const product = await productService.delteProduct(param.id);
    return NextResponse.json(product, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Unable to delete product",
      },
      { status: 500 },
    );
  }
}
