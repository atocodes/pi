import { MovementRepoImpl } from "./repositories/movement.repo.impl";
import { MovementService } from "./services/movement.service";

export const movementService = new MovementService(new MovementRepoImpl());
