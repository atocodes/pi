import { Batch, BatchWithRelation, SearchBatchParms } from "@/features/batches";
import { BatchRepo } from "../interfaces/batches.repo";
import { BatchRepositoryImpl } from "../repository/batches.repository.impl";

export class BatchesService implements BatchRepo {
  repo: BatchRepositoryImpl;

  constructor(batchRepo: BatchRepositoryImpl) {
    this.repo = batchRepo;
  }

  async createBatch(data: Batch): Promise<any> {
    const batch = await this.repo.createBatch(data);
    return batch;
  }
  async updateBatch(data: Batch, id: string): Promise<any> {
    data.expiryDate = new Date(data.expiryDate);
    data.manufactureDate = new Date(data.manufactureDate);
    return await this.repo.updateBatch(data, id);
  }
  async deleteBatch(id: string): Promise<Batch> {
    return await this.repo.deleteBatch(id);
  }
  async findById(id: string): Promise<any | null> {
    return await this.repo.findById(id);
  }
  async findAll(searchParams?: SearchBatchParms): Promise<any[]> {
    return await this.repo.findAll(searchParams);
  }
}
