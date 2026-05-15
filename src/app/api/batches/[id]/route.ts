import { batchesService } from "@/server/batches";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const param = await params;
    const batch = await batchesService.findById(param.id);
    return NextResponse.json(batch);
  } catch (error) {
    return NextResponse.json("Error Fetching Batches " + error, {
      status: 500,
    });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const param = await params;
    const body = await req.json();
    const updatedBatch = await batchesService.updateBatch(body, param.id);
    return NextResponse.json(updatedBatch);
  } catch (error) {
    return NextResponse.json("Error Fetching Batches " + error, {
      status: 500,
    });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const param = await params;
    const deltedBatch = await batchesService.deleteBatch(param.id);
    return NextResponse.json(deltedBatch);
  } catch (error) {
    return NextResponse.json("Error Fetching Batches " + error, {
      status: 500,
    });
  }
}
