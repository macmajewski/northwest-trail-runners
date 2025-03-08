import styles from './eventCard.module.css'

export default function EventCard({ event }) {
	return (<a href={event.link} title={event.name} className={styles.card}>
		<small>{event._timeFormatted}</small>
		<strong className={styles.name}>{truncate(event.name)}</strong>
		<Going count={event.yes_rsvp_count} />
		<span className={styles.background}
			  style={{ backgroundImage: `url(/event/venue/${event.id})` }}></span>
	</a>);
}

function Going({ count }) {
	return (<small className={styles.going}>
		<Avatars count={count} />
		{count} going
	</small>);
}

function Avatars({ count }) {
	if (count < 1) {
		return (<span className={styles.avatar}></span>)
	}

	return (<span className={styles.avatars}>
        {Array.from(Array(Math.min(count, 3)), (_, i) =>
			(<span key={i} className={styles.avatar + ` ${color()}`}></span>))}
    </span>);
}

function color() {
	const val = Math.floor(Math.random() * 3);
	if (val === 0)
		return styles.yellow;
	if (val === 1)
		return styles.green;
	return styles.pink;
}

function truncate(name, maxLength = 46) {
	return name.length > maxLength
		? `${name.substr(0, maxLength - 3)}...`
		: name;
}