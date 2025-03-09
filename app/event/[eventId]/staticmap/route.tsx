import {ImageResponse} from "next/og";
import {fetchEvents} from "@/services/meetup";

const GEOAPIFY_URL = "https://maps.geoapify.com/v1/staticmap";
const KEY = process.env.GEOAPIFY_KEY;
const WIDTH = 300;
const HEIGHT = 500;

export async function GET(request: Request, {params}: { params: Promise<{ eventId: string }> }) {
    const {eventId} = await params;

    const events = await fetchEvents();
    const event = events.find(e => e.id == eventId);

    if (event && event.venue) {
        const v = event.venue;
        const url = `${GEOAPIFY_URL}?style=toner&width=${WIDTH}&height=${HEIGHT}&zoom=14&center=lonlat:${v.lon},${v.lat}&apiKey=${KEY}`;

        const response = await fetch(url, { next: { revalidate: 3600 } });
        const blob = await response.blob();

        return new Response(blob);
    } else {
        // todo: Fallback image
        return new ImageResponse(<></>);
    }
}