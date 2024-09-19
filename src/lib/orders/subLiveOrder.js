"use server"
import { getSession, logout } from "@/lib/auth/session";
import { apiGet } from "@/handlers/apiHandler";
import { notFound, redirect } from "next/navigation";

export async function getSubscriptionURL() {
  const user = await getSession();
  const response = await apiGet("/api/shop/subscription", {
    headers: {
      Authorization: `Bearer ${user?.tokens?.access}`,
      cache: "no-store",
    },
  });
  if (response.status === 404) return notFound();
  if (response.status === 401) {
    logout();
    redirect("/login");
  }
  return response;
}
