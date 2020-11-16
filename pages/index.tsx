import styles from './styles.module.scss';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function WelcomePage() {
    <script src="https://use.fontawesome.com/abf374a426.js"></script>
    return <div className={styles.main}>
        <div id="navigation_bar">
            <div className={styles.options}>
                <h1 className={styles.logo}>Notemock</h1>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    </div>
}

export default WelcomePage;
