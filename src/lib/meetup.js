import moment from 'moment-timezone'

const BASE_URL = 'https://api.meetup.com/northwest-trail-runners';

// todo: Cache in case API is down
// https://nextjs.org/docs/app/building-your-application/data-fetching/caching
export async function fetchEvents() {
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

// Fetch public events from Meetup (top 4 by default)
export async function upcoming(take = 4) {
    const events = await fetchEvents();

    return events
        .filter(event => event.visibility === 'public')
        .sort((a, b) => a.time - b.time)
        .splice(0, take)
        .map(event => {
            event._timeFormatted = moment.tz(event.time, event.group.timezone).calendar();
            return event;
        });
}