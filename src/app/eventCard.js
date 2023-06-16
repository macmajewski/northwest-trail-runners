import styles from './eventCard.module.css'

export default function EventCard(event) {
    return (<a href={event.link} className={styles.event_card}>
        <small className={styles.event_time}>{formatTime(event.time)}</small>
        <strong>{event.name}</strong>
        <span className={styles.event_yes_rsvp}>{event.yes_rsvp_count} going</span>
    </a>)
}

const locale = 'en-US';
const timeZone = 'US/Pacific';

const dayAndTime = new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: timeZone
});

const timeOnly = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: timeZone
});

function formatTime(time) {
    // todo: Valid logic on other timezones
    const date = new Date(time);
    const isToday = new Date().toDateString() === date.toDateString();

    return isToday 
        ? `Today ${timeOnly.format(date)}`
        : dayAndTime.format(date);
}