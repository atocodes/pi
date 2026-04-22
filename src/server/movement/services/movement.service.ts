import { Movement, SearchMovementParams } from "@/features/movement";
import { MovementsRepo } from "../interfaces/movement.repo";
import { MovementRepoImpl } from "../repository/movement.repo.impl";

export class MovementService implements MovementsRepo {
  repo: MovementRepoImpl;

  constructor(movementRepo: MovementRepoImpl) {
    this.repo = movementRepo;
  }

  async create(data: Movement): Promise<any> {
    return await this.repo.create(data);
  }
  async update(data: Movement,id?:string): Promise<any> {
    return await this.repo.update(data,id);
  }
  async delete(id: string): Promise<any> {
    return await this.repo.delete(id);
  }
  async find(query?: SearchMovementParams): Promise<any[]> {
    return await this.repo.find(query);
  }
  async findById(id: string): Promise<any> {
    return await this.repo.findById(id);
  }
}
