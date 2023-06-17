import EventCard from './components/eventCard'
import styles from './page.module.css'

export default async function Home() {
  const events = await getEvents();

  return (
    <main className={styles.home}>

      <section className={styles.intro_section}>
        <div className={styles.intro_container + ' container'}>
          <h1><span className={styles.intro_header__nw}>Northwest</span> Trail Runners</h1>
          <p>Trail running community based in Portland, OR.</p>
          <a href="https://www.meetup.com/northwest-trail-runners"
            role="button" className={styles.intro_button + ' font-serif'}>
            Join us on Meetup
          </a>
        </div>
      </section>

      <section className={styles.events_section}>
        <div className={styles.events_container}>
          <strong className={styles.events_header}>Upcoming:</strong>
          <div className={styles.events_links}>
            {events.map(event => EventCard(event))}
            <div className={styles.events_spacer}></div>
          </div>
        </div>
      </section>

    </main>
  )
}

async function getEvents() {
  /*
  return [
    { name: 'Something else', time: 1686909900000, yes_rsvp_count: 12, link: 'https://northwesttrailrunners.org/' },
    { name: 'Springville Loop', time: 1687017600000, yes_rsvp_count: 8, link: 'https://northwesttrailrunners.org/' }
  ];
  */

  const res = await fetch('https://api.meetup.com/northwest-trail-runners/events');

  if (!res.ok) throw new Error(res.status);

  const result = await res.json();

  return (Array.isArray(result) ? result : [])
    .filter(e => e.visibility === "public")
    .sort((a, b) => a.time - b.time)
    .splice(0, 5);
}