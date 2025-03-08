import { ImageResponse } from 'next/og';
import { upcoming } from '@/services/meetup';

// Route Handlers
// https://nextjs.org/docs/app/building-your-application/routing/router-handlers

const GEOAPIFY_URL = 'https://maps.geoapify.com/v1/staticmap';
const KEY = process.env.GEOAPIFY_KEY;
const WIDTH = 300;
const HEIGHT = 500

export async function GET(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const eventId = slug;

    const events = await upcoming(10);
    const event = events.find(e => e.id == eventId);

    if (event && event.venue) {
        const v = event.venue;
        const url = `${GEOAPIFY_URL}?style=toner&width=${WIDTH}&height=${HEIGHT}&zoom=14&center=lonlat:${v.lon},${v.lat}&apiKey=${KEY}`;

        const response = await fetch(url);
        const blob = await response.blob();

        return new Response(blob);
    }
    else {
        // todo: Fallback image
        return new ImageResponse(<></>);
    }
}