import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.main_container + ' container'}>
        <h1><span className={styles.main_header__nw}>Northwest</span> Trail Runners</h1>
        <a href="https://www.meetup.com/northwest-trail-runners" role="button" className={styles.main_button}>Join us on Meetup</a>
      </div>

    </main>
  )
}
