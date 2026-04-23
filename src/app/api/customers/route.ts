import { SearchCustomerType } from "@/features/customers";
import { customerService } from "@/server/customers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const params : SearchCustomerType = {
      ...Object.fromEntries(searchParams.entries())
    }
    const customers = await customerService.findAll(params);
    return NextResponse.json(customers, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get customers " + error },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const customer = await customerService.create(data);

    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error Creating Customer " + error });
  }
}
