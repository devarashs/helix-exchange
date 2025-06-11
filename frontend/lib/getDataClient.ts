import axios from "axios";

export async function getDataClient<T>(query: string): Promise<T> {
  const api = process.env.NEXT_PUBLIC_API || "http://localhost:5000";
  // Try to get token from localStorage (client-side)
  let token = "";
  if (typeof window !== "undefined") {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      try {
        token = JSON.parse(userInfo).token || "";
      } catch {
        token = "";
      }
    }
  }

  try {
    const response = await axios.get<T>(`${api}${query}`, {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    console.log("Response data:", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data");
  }
}
