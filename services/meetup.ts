import moment from "moment-timezone";

const BASE_URL = "https://api.meetup.com/northwest-trail-runners";

export interface Event {
    created: number
    duration: number
    id: string
    name: string
    rsvp_limit: number
    date_in_series_pattern: boolean
    status: string
    time: number
    local_date: string
    local_time: string
    updated: number
    utc_offset: number
    waitlist_count: number
    yes_rsvp_count: number
    venue: Venue
    is_online_event: boolean
    eventType: string
    group: Group
    link: string
    description: string
    how_to_find_us: string
    visibility: string
    member_pay_fee: boolean,

    // Custom field
    _timeFormatted: string
}

export interface Venue {
    id: number
    name: string
    lat: number
    lon: number
    repinned: boolean
    address_1: string
    city: string
    country: string
    localized_country_name: string
    zip: string
    state: string
}

export interface Group {
    created: number
    name: string
    id: number
    join_mode: string
    lat: number
    lon: number
    urlname: string
    who: string
    localized_location: string
    state: string
    country: string
    region: string
    timezone: string
}

// todo: Cache in case API is down
// https://nextjs.org/docs/app/building-your-application/data-fetching/caching
export async function fetchEvents(): Promise<Event[]> {
    const response = await fetch(`${BASE_URL}/events`, {
        next: { revalidate: 60 }
    });

    if (!response.ok) {
        console.error(`Failed to fetch /events. Status: ${response.status}`);
        return [];
    }

    const result = await response.json();

    return Array.isArray(result) ? result : [];
}

/**
 * Fetch public upcoming events from Meetup (top 4 by default)
 * @param take
 */
export async function fetchUpcomingEvents(take = 4): Promise<Event[]> {
    const events = await fetchEvents();

    return events
        .filter(event => event.visibility === "public")
        .sort((a, b) => a.time - b.time)
        .splice(0, take)
        .map(event => {
            event._timeFormatted = moment.tz(event.time, event.group.timezone).calendar();
            return event;
        });
}