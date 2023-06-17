import moment from 'moment-timezone'

const BASE_URL = 'https://api.meetup.com/northwest-trail-runners';

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

// Fetch top 5 public events from Meetup
export async function upcoming() {
    const events = await fetchEvents();
  
    return events
      .filter(event => event.visibility === "public")
      .sort((a, b) => a.time - b.time)
      .splice(0, 5)
      .map(event => {
        event._timeFormatted = moment.tz(event.time, event.group.timezone).calendar();
        return event;
      });
  }