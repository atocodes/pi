import { customerService } from "@/server/customers/services/customers.service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const customers = await customerService.getCustomers();
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
    const customer = await customerService.createCustomer(data);

    return NextResponse.json(customer, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error Creating Customer " + error });
  }
}
