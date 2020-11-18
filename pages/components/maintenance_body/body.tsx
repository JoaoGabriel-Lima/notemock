import styles from './styles.module.scss'
import {Component} from 'react'
export default class BodyMaintenance extends Component {
    render(){
        return (
        <div className={styles.desktopmode}>
        <img src="/img/ui2.png" alt="" className={styles.ui2}/>
        <div className={styles.persistcontent}>
            <h1 className={styles.title}>Site ainda em <span className={styles.bold}>Desenvolvimento</span></h1>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit.</p>

            <input className={[styles.newsletter, styles.emailbox].join(' ')} placeholder="Seu endereço de email" type="email"></input>
            <button className={styles.newsletter}>
                <a href="">Me avise quando estiver pronto</a>
            </button>
            <img className={styles.ui} src='/img/ui.png'></img>
        </div>
        </div>
        )
    }
}
