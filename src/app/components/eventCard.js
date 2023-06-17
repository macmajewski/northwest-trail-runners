import styles from './eventCard.module.css'

export default function EventCard(event) {
    return (<a href={event.link} title={event.name} className={styles.event_card + ' event'}>
        <small>{formatTime(event.time)}</small>
        <strong className={styles.event_name}>{formatName(event.name)}</strong>
        <small className={styles.event_yes_rsvp}>{event.yes_rsvp_count} going</small>
    </a>);
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

const maxLength = 32;

function formatName(name) {
    return name.length > maxLength
        ? `${name.substr(0, maxLength - 3)}...`
        : name;
}