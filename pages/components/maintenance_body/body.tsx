import styles from './styles.module.scss'
// import {Component} from 'react'
import Link from 'next/link'
export default function BodyMaintenance(props) {
        return (
        <div className={styles.desktopmode}>
        <img src={props.src2} alt="" className={styles.ui2}/>
        <div className={styles.persistcontent}>
            <h1 className={styles.title}>{props.title}</h1>
            <p className={styles.description}>{props.desc}</p>

            {props.input}
            
            
            

            <Link href="/congratulations">
            <button className={styles.newsletter}>
                <a>{props.btn}</a>
            </button>
            </Link>

            <img className={styles.ui} src={props.src1}></img>
        </div>
        </div>
        )
}
