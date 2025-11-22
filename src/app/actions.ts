
'use server';

import { recommendContent } from '@/ai/flows/recommend-content-flow';

export async function getRecommendedContent(userBehavior: string) {
    try {
        const result = await recommendContent({ userBehavior });
        return result;
    } catch (e) {
        console.error("AI recommendation error:", e);
        return null;
    }
}
