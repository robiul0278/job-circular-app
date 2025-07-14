export async function getSingleJob(id: string) {
  try {
    const res = await fetch(`https://job-circular-server.vercel.app/api/v1/jobs/single/${id}`, {
      cache: "no-store", // SSR fresh data
    });

    if (!res.ok) return null;

    const json = await res.json();
    return json.data;
  } catch (err) {
    console.error("Error fetching single job:", err);
    return null;
  }
}
