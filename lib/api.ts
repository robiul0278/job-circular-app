import { notFound } from "next/navigation";

//Get All Job
export async function getAllJobQuery(params: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:5000/api/v1";

  const res = await fetch(`${BASE_URL}/jobs?${params}`, {
      next: { revalidate: 60 },
  });

  if (res.status === 404) {
    return notFound();
  }
  if (!res.ok) {
    throw new Error("আমরা সার্কুলার লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }

  const json = await res.json();
  return json.data;
}
//Get Job Categories
export async function JobCategories() {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:5000/api/v1";

  const res = await fetch(`${BASE_URL}/jobs/categories`);

  if (res.status === 404) {
    return notFound();
  }
  if (!res.ok) {
    throw new Error("আমরা categories লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }

  const json = await res.json();
  return json.data;
}

//Get Single Job Details
export async function getSingleJob(id: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:5000/api/v1";

  const res = await fetch(`${BASE_URL}/jobs/single/${id}`, {
    next: { revalidate: 86400 }, // ১ দিনে একবার রিফ্রেশ হবে
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

//Get Notice
export async function getNotice() {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL || "http://localhost:5000/api/v1";

  const res = await fetch(`${BASE_URL}/notice`, {
     next: { revalidate: 30 },
  });

  if (res.status === 404) {
    return notFound();
  }
  if (!res.ok) {
    throw new Error("আমরা নোটিস লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }

  const json = await res.json();
  return json.data;
}
