import Head from 'next/head'
import {Container} from '../../styles/pages/home'
import {motion} from 'framer-motion'
import MaintenanceBody from "../../components/MaintenanceBody"
import thanku from "../../assets/ui-thanku.svg"

export default function Home() {
  return (
      <Container>
        <Head>
          <title>Notemock</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="logo">Note<span className="mock">mock</span>.</h1>
        <motion.div id="contentdiv" initial="hidden" animate="visible" variants={{
          hidden: {
            scale: 1,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .2
            }
          },
        }}>
          <MaintenanceBody 
            desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit."
            title={["Obrigado! Você será avisado de cada ", <span className="mock">atualização</span>, "!"]}
            btn="Me leve para a página inicial"
            src1={thanku}
            src2={thanku}
            desktop="thankdesktop"
            mobile="ui thankmobile"
            redirect="/"
          //   input={<input className="newsletter emailbox" placeholder="Seu endereço de email" type="email"></input>}
          />
        </motion.div>
      </Container>
    // </motion.div>
  )
}
