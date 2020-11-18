import styles from './styles.module.scss'

function Maintenance() {
    return <div id={styles.main}>
        <h1 className={styles.logo}>Note<span className={styles.mock}>mock</span>.</h1>

        <div id={styles.contentdiv}>
            <h1 className={styles.title}>Site ainda em <span className={styles.bold}>Desenvolvimento</span></h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit</p>
            <button className={styles.newsletter}>
                <a href="">Me fale quando estiver pronto</a>
            </button>
            <img className={styles.ui} src='/img/ui.png'></img>
        </div>
    </div>
}

export default Maintenance;