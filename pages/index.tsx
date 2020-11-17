import styles from './styles.module.scss';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';


function WelcomePage() {
    <script src="https://use.fontawesome.com/abf374a426.js"></script>
    return <div className={styles.main}>
        <div id={styles.navigation_bar}>
            <div className={styles.options}>
                <img className={styles.logo} src='/logo/logo2.png'/>
                <FontAwesomeIcon icon={faBars} className={styles.menu} />
            </div>
        </div>
        <div id={styles.center_content}>
            <h1 id={styles.main_title}>A new way to <span className={styles.gradient_text}>share text</span>.</h1>
            <h2 className={styles.lightItalic}>One tool, thousands of possibilities</h2>

            <div className={styles.buttons}>
                <button className={styles.btn_default}><a href="">Start Now</a></button>
                <button className={styles.btn_default}><a href="">Learn More</a></button>
            </div>
        </div>
    </div>
}

export default WelcomePage;
