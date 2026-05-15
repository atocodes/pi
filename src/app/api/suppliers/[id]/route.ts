import { supplierService } from "@/server/suppliers";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supplier = await supplierService.findById(id);
    return NextResponse.json(supplier, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching supplier" },
      { status: 500 },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const data = await req.json();
    const supplier = await supplierService.update(data, id);
    return NextResponse.json(supplier, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating supplier " + error },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const supplier = await supplierService.delete(id);
    return NextResponse.json(supplier, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating supplier " + error },
      { status: 500 },
    );
  }
}
