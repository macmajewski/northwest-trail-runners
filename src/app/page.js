import { upcoming } from './data/meetup'
import EventCard from './components/eventCard'
import styles from './page.module.css'

export default async function Home() {
  const events = await upcoming();

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

      {events.length > 0 && <section className={styles.events_section}>
        <div className={styles.events_container}>
          <strong className={styles.events_header}>Upcoming:</strong>
          <div className={styles.events_links}>
            {events.map(event => EventCard(event))}
            <div className={styles.events_spacer}></div>
          </div>
        </div>
      </section>}

    </main>
  )
}