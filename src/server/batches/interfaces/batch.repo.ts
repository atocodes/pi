import { Batch, BatchWithRelation, SearchBatchParms } from "@/features/batches";

export interface BatchRepo {
  createBatch(data: Batch): Promise<any>;
  updateBatch(data: Batch, id: string): Promise<any>;
  deleteBatch(id: string): Promise<any>;
  findById(id: string): Promise<any>;
  findAll(searchParams?: SearchBatchParms): Promise<any>;
}
