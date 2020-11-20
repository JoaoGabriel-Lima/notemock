import Head from 'next/head'
import {AnimatePresence} from "framer-motion"
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
        <motion.div id="contentdiv" initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={{
          hidden: {
            scale: 1,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .1
            }
          },
        }}>
          <MaintenanceBody 
            title={["Obrigado! Você será avisado de cada ", <span className="mock">atualização</span>, "!"]}
            desc="Muito obrigado por mostrar apoio á este projeto incrível, através desta simples ação você nos ajuda a continuar oferecendo suporte e nos motiva a continuar. Até a próxima 👋😊" 
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
  )
}
