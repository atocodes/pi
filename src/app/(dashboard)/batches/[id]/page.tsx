import { useParams } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const param = useParams();

  return <h1>BATCH</h1>;
}
