import siteConfig from "@/contants/siteConfig";
import Image from "next/image";
import {fetchUpcomingEvents} from "@/services/meetup";
import EventCard from "@/components/eventCard";
import styles from "./page.module.css";

// const EVENTS_URL = `${GROUP_URL}/events`;

export const dynamic = "force-dynamic";

export default async function Home() {
    const events = await fetchUpcomingEvents();

    return (
        <main className={styles.home}>

            <section className={styles.intro_section}>
                <div className={styles.intro_container + " container"}>
                    <h1><span className={styles.intro_header__nw}>Northwest</span> Trail Runners</h1>
                    <p>Community based in Portland, OR.</p>
                    <a href={siteConfig.MEETUP_GROUP_URL} role="button" className={styles.intro_button + " font-serif"}>
                        Join us on Meetup
                    </a>
                </div>
            </section>

            <section className={styles.events_section}>
                <div className={styles.events_background_transition}>
                    <Image fill src="/wildwood-elevation-chart.svg"
                           alt="Background transition"/>
                </div>
                <div className={styles.events_background_texture}></div>

                <div className="container">
                    <div className={styles.events_header}>
                        <small className={styles.events_label}>Events</small>
                        <h2>Trail runs are posted weekly</h2>
                    </div>

                    {events.length > 0 && <div className={styles.events_scroller}>
						<div className={styles.events_grid}>
                            {events.map(event => <EventCard key={event.id} event={event}/>)}
							<span className={styles.events_grid_spacer}></span>
                            {/* todo: Add link to events page
                                <a href={EVENTS_URL}>View events on Meetup</a> */}
						</div>
					</div>}
                </div>
            </section>

            <section style={{height: 200}}></section>

        </main>
    )
}