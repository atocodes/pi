import { BatchRepositoryImpl } from "./repository/batches.repository.impl";
import { BatchesService } from "./services/batches.service";

export const batchesService = new BatchesService(new BatchRepositoryImpl());
