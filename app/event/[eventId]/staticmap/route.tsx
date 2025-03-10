import {ImageResponse} from "next/og";
import {fetchEvents} from "@/services/meetup";
import fetchStaticMapImage from "@/services/mapbox";

export async function GET(request: Request, {params}: { params: Promise<{ eventId: string }> }) {
    const {eventId} = await params;

    try {
        const events = await fetchEvents();
        const event = events.find(e => e.id == eventId);

        if (!event)
            throw new Error("Event not found.");

        if (!event.venue)
            throw new Error("Venue not provided.");

        const { lon, lat } = event.venue;
        if (!lon || !lat)
            throw new Error("Venue lon/lat not provided.");

        const response = await fetchStaticMapImage(lon, lat);
        if (!response.ok)
            throw new Error(`Failed to fetch static map image. HTTP Status: ${response.status}`);

        const blob = await response.blob();
        return new Response(blob);
    } catch (error) {
        console.error(error);

        // todo: Fallback image
        return new ImageResponse(<></>);
    }
}