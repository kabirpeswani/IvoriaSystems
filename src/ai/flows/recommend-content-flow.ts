'use server';

/**
 * @fileOverview AI-powered content recommendation based on user behavior.
 *
 * - recommendContent - A function that recommends relevant services or case studies based on user behavior.
 * - RecommendContentInput - The input type for the recommendContent function, taking user behavior data.
 * - RecommendContentOutput - The return type for the recommendContent function, providing a list of recommendations.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendContentInputSchema = z.object({
  userBehavior: z
    .string()
    .describe(
      'A string describing the users recent behavior such as browsing history, search queries, and interactions with the website. Be as detailed as possible.'
    ),
});
export type RecommendContentInput = z.infer<typeof RecommendContentInputSchema>;

const RecommendationSchema = z.object({
  title: z.string().describe('The title of the recommended content item.'),
  description: z.string().describe('A brief description of the content item.'),
  link: z.string().describe('The URL of the content item.'),
  reason: z
    .string()
    .describe('Why this content item is being recommended to the user.'),
});

const RecommendContentOutputSchema = z.object({
  recommendations: z
    .array(RecommendationSchema)
    .describe(
      'A list of content recommendations tailored to the user based on their behavior.'
    ),
});
export type RecommendContentOutput = z.infer<typeof RecommendContentOutputSchema>;

export async function recommendContent(input: RecommendContentInput): Promise<RecommendContentOutput> {
  return recommendContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendContentPrompt',
  input: {schema: RecommendContentInputSchema},
  output: {schema: RecommendContentOutputSchema},
  prompt: `Based on the following user behavior:\n\n{{userBehavior}}\n\nRecommend services or case studies that would be relevant to the user. Explain why each recommendation is being made.\n\nFormat your response as a JSON object with a 'recommendations' array. Each object in the array should have 'title', 'description', 'link', and 'reason' fields.\n`,
});

const recommendContentFlow = ai.defineFlow(
  {
    name: 'recommendContentFlow',
    inputSchema: RecommendContentInputSchema,
    outputSchema: RecommendContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
