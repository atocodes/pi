import { useEffect, useState } from "react";
import { Movement, MovementWithRelation } from "../types";
import { MovementClientService } from "../services/movement.service";
import { useRouter } from "next/navigation";

export function useMovement(id: string) {
  const [movement, setMovemet] = useState<MovementWithRelation | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const movementService = new MovementClientService();
  const router = useRouter();

  const fetchMovement = async () => {
    try {
      setLoading(true);
      const movement = await movementService.findById(id);
      setMovemet(movement);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovement();
  }, []);

  const updateMovement = async (data: Movement) => {
    try {
      setLoading(true);
      const movement = await movementService.update(data, id);
      setMovemet(movement);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteMovement = async (id: string) => {
    try {
      setLoading(true);
      await movementService.delete(id);
      router.push("/movements");
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    movement,
    updateMovement,
    deleteMovement,
    refetch: fetchMovement,
  };
}
