import { movementService } from "@/server/movement";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const param = await params;
    const movement = await movementService.findById(param.id);
    return NextResponse.json(movement, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const param = await params;
    const data = await req.json();
    const movement = await movementService.update(data, param.id);
    return NextResponse.json(movement, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const param = await params;
    const movement = await movementService.delete(param.id);
    return NextResponse.json(movement, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
