
'use server';

import { routeContact, type RouteContactInput, type RouteContactOutput } from "@/ai/flows/route-contact-flow";

export async function submitContactForm(input: RouteContactInput): Promise<RouteContactOutput> {
  return await routeContact(input);
}
