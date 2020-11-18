import styles from './styles.module.scss'
import styless from './components/maintenance_body/styles.module.scss'

import BodyMaintenance from './components/maintenance_body/body'
// import styles2 from './styles2.module.css'

function Maintenance() {
    return <div id={styles.main}>
        <h1 className={styles.logo}>Note<span className={styles.mock}>mock</span>.</h1>

        <div id={styles.contentdiv}>
            <BodyMaintenance 
            desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit."
            title={["Site ainda em ", <strong>Desenvolvimento</strong>]}
            btn="Me avise quando estiver pronto"
            src1="/img/ui.png"
            src2="/img/ui2.png"
            input={<input className={[styless.newsletter, styless.emailbox].join(' ')} placeholder="Seu endereço de email" type="email"></input>}
            />
        </div>
    </div>
}

export default Maintenance;

//a