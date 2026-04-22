"use client";
import { useMovements } from "@/features/movement/hooks/use_movements";

export default function Page() {
  const { movements, createMovement } = useMovements();
  console.log(movements);
  console.log("HIT PAGE");
  return <p>MOVEMENT HISTORY</p>;
}
