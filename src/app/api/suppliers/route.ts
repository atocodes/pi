import { SearchSupplierParams } from "@/features/suppliers";
import { supplierService } from "@/server/suppliers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const params: SearchSupplierParams = {
      ...Object.fromEntries(searchParams.entries()),
    };
    const suppliers = await supplierService.find(params);
    return NextResponse.json(suppliers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching suppliers " + error },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const supplier = await supplierService.create(body);
    return NextResponse.json(supplier, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating supplier " + error },
      { status: 500 },
    );
  }
}
