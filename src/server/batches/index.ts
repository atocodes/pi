import { BatchRepoImpl } from "./repositories/batch.repo.impl";
import { BatchesService } from "./services/batches.service";

export const batchesService = new BatchesService(new BatchRepoImpl());
