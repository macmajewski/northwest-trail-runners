import siteConfig from "@/contants/siteConfig";
import Image from "next/image";
import {fetchUpcomingEvents} from "@/services/meetup";
import EventCard from "@/components/eventCard";
import FooterNav from "@/components/footerNav";
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
                        <small className={styles.events_label}>Trail Time</small>
                        <h2>Upcoming Events</h2>
                    </div>

                    {events.length > 0 && <div className={styles.events_scroller}>
						<div className={styles.events_grid}>
                            {events.map(event => <EventCard key={event.id} event={event}/>)}
							<span className={styles.events_grid_spacer}></span>
                            {/* todo: Add link to events page?
                                <a href={EVENTS_URL}>View events on Meetup</a> */}
						</div>
					</div>}
                </div>
            </section>

            <section className={styles.about_section}>
                <div className={styles.about_container + " container"}>
                    {/* todo: Add about section?
                    <div className={styles.about_header}>
                        <h1>About</h1>
                    </div>
                    <p>Come join us for a run out on the trails! We get together every Saturday morning and Tuesday evening in Forest Park or other trails around Portland. We also schedule occasional adventure runs in scenic locations around the Pacific Northwest, celebratory holiday runs, and trail maintenance parties.</p>
                    */}
                    <FooterNav />
                </div>
            </section>

        </main>
    )
}