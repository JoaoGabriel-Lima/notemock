import Head from 'next/head'
import {AnimatePresence} from "framer-motion"
import {Container} from '../styles/pages/home'
import {motion} from 'framer-motion'
import MaintenanceBody from "../components/MaintenanceBody"
import wrongplace from "../assets/wrongplace.svg"


export default function Home() {
  return (
      <Container>
        <Head>
          <title>404 Notemock</title>
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
            title={["Ops! Você está no ", <span className="mock">Lugar Errado</span>, "."]}
            desc="Está página não existe ou por algum motivo desapareceu de nossa base de dados. Se você acha que esta página não deveria estar aqui, por favor entre em contato conosco através do e-mail de suporte localizado no GitHub. Use este botão para se teletransportar à um lugar seguro!" 
            btn="Me leve de volta á superfície"
            src1={wrongplace}
            src2={wrongplace}
            desktop="thankdesktop"
            mobile="ui thankmobile"
            redirect="/"
          //   input={<input className="newsletter emailbox" placeholder="Seu endereço de email" type="email"></input>}
          />
        </motion.div>
      </Container>
  )
}
