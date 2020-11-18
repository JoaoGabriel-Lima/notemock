import styles from './styles.module.scss'
import BodyMaintenance from '../components/maintenance_body/body'
// import styles2 from './styles2.module.css'

function Maintenance() {
    return <div id={styles.main}>
        <h1 className={styles.logo}>Note<span className={styles.mock}>mock</span>.</h1>

        <div id={styles.contentdiv}>
            <BodyMaintenance/>
        </div>
    </div>
}

export default Maintenance;