import {ImageResponse} from "next/og";
import {fetchEvents} from "@/services/meetup";

// Geoapify settings
const URL = "https://maps.geoapify.com/v1/staticmap";
const KEY = process.env.GEOAPIFY_KEY;
const WIDTH = 300;
const HEIGHT = 500;
const STYLE = "toner";
const ZOOM = 14;

export async function GET(request: Request, {params}: { params: Promise<{ eventId: string }> }) {
    const {eventId} = await params;

    try {
        if (!KEY)
            throw new Error("Geoapify key not configured.");

        const events = await fetchEvents();
        const event = events.find(e => e.id == eventId);

        if (!event)
            throw new Error("Event not found.");

        if (!event.venue)
            throw new Error("Venue not provided.");

        const { lon, lat } = event.venue;
        if (!lon || !lat)
            throw new Error("Venue lon/lat not provided.");

        const url = `${URL}?center=lonlat:${lon},${lat}&width=${WIDTH}&height=${HEIGHT}&style=${STYLE}&zoom=${ZOOM}&apiKey=${KEY}`;

        const response = await fetch(url, {next: {revalidate: 3600}});
        if (!response.ok)
            throw new Error(`Failed to fetch image. Status: ${response.status}. URL: ${url}`);

        const blob = await response.blob();
        return new Response(blob);
    } catch (error) {
        console.error(error);

        // todo: Fallback image
        return new ImageResponse(<></>);
    }
}