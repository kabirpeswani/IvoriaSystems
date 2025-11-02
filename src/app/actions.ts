
'use server';

import { routeContact } from '@/ai/flows/route-contact-flow';
import { recommendContent } from '@/ai/flows/recommend-content-flow';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  inquiry: z.string().min(10, { message: 'Inquiry must be at least 10 characters.' }),
});

export async function submitContactForm(data: { name: string; email: string; inquiry: string }) {
  const validatedFields = contactSchema.safeParse(data);

  if (!validatedFields.success) {
    // This provides a more detailed error for client-side handling
    throw new Error('Validation failed: ' + JSON.stringify(validatedFields.error.flatten().fieldErrors));
  }
  
  const { inquiry } = validatedFields.data;
  
  try {
    const routingResult = await routeContact({ inquiry });
    // Return the routing result to the client for the toast notification
    return routingResult;
  } catch (error) {
    console.error("Error in contact form submission process:", error);
    if (error instanceof Error) {
        throw new Error(`An error occurred: ${error.message}`);
    }
    throw new Error("Failed to process your inquiry due to a service error. Please try again later.");
  }
}

export async function getRecommendedContent(userBehavior: string) {
    try {
        const result = await recommendContent({ userBehavior });
        return result;
    } catch (e) {
        console.error("AI recommendation error:", e);
        return null;
    }
}
