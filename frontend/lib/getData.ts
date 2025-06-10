import { cookies } from "next/headers";

export async function getData(query: string, revalidateTime: number) {
  const api = process.env.NEXT_PUBLIC_API || "http://localhost:5000";
  const cookieStore = await cookies();
  const cookie = cookieStore.get("userInfo");
  const token = cookie ? JSON.parse(cookie.value).token : "";
  const res = await fetch(`${api}${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: revalidateTime },
  });

  if (!res.ok) {
    console.error(res);
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
