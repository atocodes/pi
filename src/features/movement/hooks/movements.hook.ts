"use client";
import { useEffect, useState } from "react";
import { Movement, MovementWithRelation, SearchMovementParams } from "../types";
import { MovementClientService } from "../services/movement.service";

export function useMovements() {
  const [movements, setMovemets] = useState<MovementWithRelation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|undefined>();
  const [filters, setFilters] = useState<SearchMovementParams | undefined>();
  const movementService = new MovementClientService();

  const createMovement = async (data: any) => {
    try {
      setLoading(true);
      const movement = await movementService.create(data);
      // setMovemets((prev) => {
      //   return movement ? [movement, ...prev] : prev;
      // });
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovements = async (params?: SearchMovementParams) => {
    try {
      setLoading(true);
      const movements = await movementService.find(params);
      setMovemets(movements);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovements(filters);
  }, [filters]);

  return {
    loading,
    error,
    movements,
    setFilters,
    createMovement,
    fetchMovements,
    refetch: fetchMovements,
  };
}
