'use server';
/**
 * @fileOverview An AI agent that generates a professional email from a contact form submission.
 *
 * - generateContactEmail - A function that handles the email generation process.
 * - GenerateContactEmailInput - The input type for the generateContactEmail function.
 * - GenerateContactEmailOutput - The return type for the generateContactEmail function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateContactEmailInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the inquiry.'),
  email: z.string().email().describe('The email address of the person.'),
  inquiry: z.string().describe('The content of the inquiry.'),
  department: z.string().describe('The department this inquiry is for (e.g., Sales, Support).'),
});
export type GenerateContactEmailInput = z.infer<typeof GenerateContactEmailInputSchema>;

const GenerateContactEmailOutputSchema = z.object({
  subject: z.string().describe('A concise and descriptive subject line for the email.'),
  body: z.string().describe('The full HTML body of the email. It should be professionally formatted.'),
});
export type GenerateContactEmailOutput = z.infer<typeof GenerateContactEmailOutputSchema>;


export async function generateContactEmail(input: GenerateContactEmailInput): Promise<GenerateContactEmailOutput> {
  return generateContactEmailFlow(input);
}


const prompt = ai.definePrompt({
  name: 'generateContactEmailPrompt',
  input: {schema: GenerateContactEmailInputSchema},
  output: {schema: GenerateContactEmailOutputSchema},
  prompt: `You are an expert at generating professional email content.

  A new contact form inquiry has been submitted. Your task is to generate a subject line and a full, well-formatted HTML email body to be sent to the internal team.

  The email should:
  1.  Have a clear subject line that includes the department and the sender's name. For example: "[Sales Inquiry] from John Doe".
  2.  Be formatted in clean HTML.
  3.  Clearly present all the information provided: Name, Email, and the full Inquiry.
  4.  Include a clear call-to-action for the internal team, such as "Please review and respond to this inquiry at your earliest convenience."

  Here is the information from the form submission:
  - Name: {{{name}}}
  - Email: {{{email}}}
  - Department: {{{department}}}
  - Inquiry:
  {{{inquiry}}}
  `,
});

const generateContactEmailFlow = ai.defineFlow(
  {
    name: 'generateContactEmailFlow',
    inputSchema: GenerateContactEmailInputSchema,
    outputSchema: GenerateContactEmailOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
