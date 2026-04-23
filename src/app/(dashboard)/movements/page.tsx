"use client";
import { useMovements } from "@/features/movement/hooks/movements.hook";

export default function Page() {
  const { movements, createMovement } = useMovements();
  console.log(movements);
  console.log("HIT PAGE");
  return <p>MOVEMENT HISTORY</p>;
}
