import Image from 'next/image'
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
                    <p>Community based in Portland, OR.</p>
                    <a href="https://www.meetup.com/northwest-trail-runners"
                        role="button" className={styles.intro_button + ' font-serif'}>
                        Join us on Meetup
                    </a>
                </div>
            </section>

            <section className={styles.events_section}>
                <div className={styles.events_background_transition}>
                    <Image
                        fill
                        src="/wildwood-elevation-chart.svg"
                    />
                </div>
                <div className={styles.events_background_texture}></div>

                <div className="container">
                    <div className={styles.events_header}>
                        <small className={styles.events_label}>Events</small>
                        <h2>Trail runs are posted weekly</h2>
                        {/* todo: Remove commented element
                         <p>Lorem ipsum dolor sit amet</p> */}
                    </div>

                    {events.length > 0 && <div className={styles.events_scroller}>
                    <div className={styles.events_cards}>
                        {events.map(event => EventCard(event))}
                        <article className="event">
                            View all
                        </article>
                        <div className={styles.events_spacer}></div>
                    </div>
                </div>}
                </div>
            </section>

        </main>
    )
}