import { customerService } from "@/server/customers";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const param = await params;
    const customer = await customerService.findById(param.id);
    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching customer" },
      { status: 200 },
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const param = await params;
    const data = await req.json();
    const customer = await customerService.update(param.id, data);
    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating customer " + error },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const param = await params;
    const customer = await customerService.delete(param.id);
    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting customer " + error },
      { status: 500 },
    );
  }
}
