import { MovementsRepo } from "@/server/movement/interfaces/movement.repo";
import { Movement, SearchMovementParams } from "../types";
import { headers } from "@/lib/constants";
const BASEURL = "/api/movements";

export class MovementClientService implements MovementsRepo {
  async create(data: Movement): Promise<any> {
    const req = await fetch(BASEURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers,
    });
    const res = await req.json();
    if (!req.ok) throw new Error(res.error);
    return res;
  }
  async update(data: Movement, id?: string): Promise<any> {
    const req = await fetch(`${BASEURL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers,
    });
    const res = await req.json();
    if (!req.ok) throw new Error(res.error);
    return res;
  }
  async delete(id: string): Promise<any> {
    const req = await fetch(`${BASEURL}/${id}`, {
      method: "DELETE",
      headers,
    });
    const res = await req.json();
    if (!req.ok) throw new Error(res.error);
    return res;
  }
  async find(query?: SearchMovementParams): Promise<any[]> {
    const param = new URLSearchParams();
    if (query) {
      if (query.dateFrom) param.set("dateFrom", query.dateFrom.toISOString());
      if (query.dateTo) param.set("dateTo", query.dateTo.toISOString());
      if (query.limit) param.set("limit", query.limit.toString());
      if (query.order) param.set("order", query.order);
      if (query.page) param.set("page", query.page.toString());
    }
    const req = await fetch(`${BASEURL}?${param.toString()}`);
    const res = await req.json();
    if (!req.ok) throw new Error(res.error);
    return res;
  }
  async findById(id: string): Promise<any> {
    const req = await fetch(`${BASEURL}/${id}`);
    const res = await req.json();
    if (!req.ok) throw new Error(res.error);
    return res;
  }
}
