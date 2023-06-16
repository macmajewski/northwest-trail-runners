import EventCard from './eventCard'
import styles from './page.module.css'

export default async function Home() {
  const events = await getEvents();

  return (
    <main className={styles.main}>

      <div className={styles.main_container + ' container'}>
        <h1><span className={styles.main_header__nw}>Northwest</span> Trail Runners</h1>
        <a href="https://www.meetup.com/northwest-trail-runners" role="button" className={styles.main_button}>Join us on Meetup</a>

        <div class="events">
          {events.map(event => EventCard(event))}
        </div>
      </div>

    </main>
  )
}

async function getEvents() {
  return [
    { name: 'Something else', time: 1686909900000, yes_rsvp_count: 12, link: 'https://northwesttrailrunners.org/' },
    { name: 'Springville Loop', time: 1687017600000, yes_rsvp_count: 8, link: 'https://northwesttrailrunners.org/' }
  ];

  /*
  const res = await fetch('https://api.meetup.com/northwest-trail-runners/events');
  
  if (!res.ok) throw new Error(res.status);
  
  const events = await res.json();

  return Array.isArray(events) ? events : [];
  */
}