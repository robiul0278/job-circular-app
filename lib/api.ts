import { notFound } from "next/navigation";

type TParams = {
  searchTerm?: string;
  page?: string;
  departments?: string;
  categories?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_URL;

export async function getAllJobQuery({params}: {params?:TParams}) {
  const queryString = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}/jobs?${queryString}`, {
      next: { revalidate: 300 },
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

export async function getJobs() {
  const res = await fetch(`${BASE_URL}/jobs`, {
    next: { revalidate: 300 },
  });
  if (res.status === 404) {
    notFound();
  }
  if (!res.ok) {
    throw new Error("আমরা সার্কুলার লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }
  const json = await res.json();
  return json.data;
}

//Get Job Categories
export async function JobCategories() {

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


//Get Notice
export async function getNotice() {

  const res = await fetch(`${BASE_URL}/notice`, {
     next: { revalidate: 300 },
  });

  if (res.status === 404) {
    return notFound();
  }
  if (!res.ok) {
    throw new Error("আমরা নোটিস লোড করতে পারছি না। দয়া করে আবার চেষ্টা করুন।");
  }

  return (await res.json()).data;

}