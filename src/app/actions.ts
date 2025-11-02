
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
    const result = await routeContact({ inquiry });
    // In a real app, you would now email `result.department` or save to a database.
    return result;
  } catch (error) {
    console.error("AI routing error:", error);
    throw new Error("Failed to route inquiry due to an AI service error. Please try again later.");
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
