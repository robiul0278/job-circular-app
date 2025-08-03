import { IJobCircular } from "@/types/types";
import { notFound } from "next/navigation";

type TParams = {
  searchTerm?: string;
  page?: string;
}

export async function getAllJobQuery({params}: {params?:TParams}) {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;

  const queryString = new URLSearchParams(params).toString();

  const res = await fetch(`${BASE_URL}/jobs?${queryString}`, {
      next: { revalidate: 60 },
  });

  if (res.status === 404) {
    return notFound();
  }
  
  if (!res.ok) {
    throw new Error("আমরা সার্কুলার লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }

  const json = await res.json();
  return json.data.result as IJobCircular[];
}