import { redirect } from "next/navigation";

export default function Home() {
  redirect("/categories/all");
  return null;
}
