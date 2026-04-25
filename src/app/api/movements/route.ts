import { SearchMovementParams } from "@/features/movement";
import { movementService } from "@/server/movement";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const param: SearchMovementParams = {
      ...Object.fromEntries(searchParams.entries()),
    };
    const movements = await movementService.find(param);
    return NextResponse.json(movements, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const movement = await movementService.create(data);
    return NextResponse.json(movement, { status: 200 });
  } catch (error: any) {
     console.log(error)
    return NextResponse.json({ error }, { status: 500 });
  }
}
