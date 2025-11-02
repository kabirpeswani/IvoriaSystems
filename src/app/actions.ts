
'use server';

import { routeContact } from '@/ai/flows/route-contact-flow';
import { recommendContent } from '@/ai/flows/recommend-content-flow';
import { generateContactEmail } from '@/ai/flows/generate-contact-email-flow';
import { z } from 'zod';
import { Resend } from 'resend';

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
  
  const { name, email, inquiry } = validatedFields.data;
  
  try {
    const routingResult = await routeContact({ inquiry });
    
    // Generate the email content using AI
    const emailContent = await generateContactEmail({
        name,
        email,
        inquiry,
        department: routingResult.department,
    });

    // Send the email
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
          from: 'onboarding@resend.dev', // Must be a verified domain on Resend
          to: 'IvoriaSystems@gmail.com',
          subject: emailContent.subject,
          html: emailContent.body,
          reply_to: email,
      });
    } else {
      console.warn("RESEND_API_KEY is not set. Skipping email sending.");
      // In a real app, you might want to throw an error here or handle it differently
    }
    
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
