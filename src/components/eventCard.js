import Image from 'next/image'
import styles from './eventCard.module.css'

export default function EventCard({ event }) {
    return (<a href={event.link} title={event.name} className={styles.event_card}>
        <small>{event._timeFormatted}</small>
        <strong className={styles.event_name}>{formatName(event.name)}</strong>
        <small className={styles.event_yes_rsvp}>{event.yes_rsvp_count} going</small>
        <span className={styles.event_background} 
            style={{ backgroundImage: `url(/event/venue/${event.id})` }}></span>
    </a>);
}

export function LinkCard({ href, label }) {
    return (<a href={href} title={label} className={styles.link_card}>
        <Image width={40} height={40} src="/calendar-week.svg" 
            className={styles.link_image}
            alt="Calendar icon" />
        {label}
    </a>);
}

function formatName(name, maxLength = 46) {
    return name.length > maxLength
        ? `${name.substr(0, maxLength - 3)}...`
        : name;
}