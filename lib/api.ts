import { notFound } from "next/navigation";

//Get Single Job Details
export async function getAllJobQuery(params: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:5000/api/v1";

  const res = await fetch(`${BASE_URL}/jobs?${params}`);

  if (res.status === 404) {
    return notFound();
  }
  if (!res.ok) {
    throw new Error("আমরা সার্কুলার লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }

  const json = await res.json();
  return json.data;
}

//Get Single Job Details
export async function getSingleJob(id: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:5000/api/v1";

  const res = await fetch(`${BASE_URL}/jobs/single/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    return notFound();
  }

  if (!res.ok) {
    throw new Error("আমরা সার্কুলারটি লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }

  const json = await res.json();
  return json.data;
}
