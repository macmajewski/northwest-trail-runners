import styles from './eventCard.module.css'

export default function EventCard(event) {
    return (<a href={event.link} title={event.name} className={styles.event_card + ' event'}>
        <small>{event._timeFormatted}</small>
        <strong className={styles.event_name}>{formatName(event.name)}</strong>
        <small className={styles.event_yes_rsvp}>{event.yes_rsvp_count} going</small>
    </a>);
}

function formatName(name, maxLength = 32) {
    return name.length > maxLength
        ? `${name.substr(0, maxLength - 3)}...`
        : name;
}