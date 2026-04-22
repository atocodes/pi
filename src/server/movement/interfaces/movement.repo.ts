import { Movement, MovementWithRelation, SearchMovementParams } from "@/features/movement";

export interface MovementsRepo {
  create(data: Movement): Promise<any>;
  update(data: Movement,id?:string): Promise<any>;
  delete(id: string): Promise<any>;
  find(query?: SearchMovementParams): Promise<any[]>;
  findById(id: string): Promise<any>;
}
