import { SearchBatchParms } from "@/features/batches";
import { batchesService } from "@/server/batches";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const params: SearchBatchParms = { ...Object.fromEntries(searchParams.entries()) };
    const products = await batchesService.findAll(params);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json("Error Fetching Batches " + error, {
      status: 500,
    });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const batch = await batchesService.createBatch(body);
    return NextResponse.json(batch);
  } catch (error) {
    return NextResponse.json("Error Creating Batch " + error, {
      status: 500,
    });
  }
}
