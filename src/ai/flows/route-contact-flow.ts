'use server';

/**
 * @fileOverview An AI agent that routes contact form submissions to the most appropriate department.
 *
 * - routeContact - A function that handles the contact form routing process.
 * - RouteContactInput - The input type for the routeContact function.
 * - RouteContactOutput - The return type for the routeContact function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RouteContactInputSchema = z.object({
  inquiry: z
    .string()
    .describe('The user inquiry from the contact form.'),
});
export type RouteContactInput = z.infer<typeof RouteContactInputSchema>;

const RouteContactOutputSchema = z.object({
  department: z
    .string()
    .describe('The department to which the inquiry should be routed.'),
  reason: z
    .string()
    .describe('The reason why the inquiry was routed to this department.'),
});
export type RouteContactOutput = z.infer<typeof RouteContactOutputSchema>;

export async function routeContact(input: RouteContactInput): Promise<RouteContactOutput> {
  return routeContactFlow(input);
}

const prompt = ai.definePrompt({
  name: 'routeContactPrompt',
  input: {schema: RouteContactInputSchema},
  output: {schema: RouteContactOutputSchema},
  prompt: `You are an expert at routing contact form inquiries to the correct department.

  Analyze the following inquiry and determine the most appropriate department to route it to. Explain your reasoning.
  Valid departments are: Sales, Support, General.

  Inquiry: {{{inquiry}}}
  `,
});

const routeContactFlow = ai.defineFlow(
  {
    name: 'routeContactFlow',
    inputSchema: RouteContactInputSchema,
    outputSchema: RouteContactOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
