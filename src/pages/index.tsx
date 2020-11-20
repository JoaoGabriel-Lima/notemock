import Head from 'next/head'
import {motion} from 'framer-motion'
import {Container} from '../styles/pages/home'
import MaintenanceBody from "../components/MaintenanceBody"
import hand from "../assets/ui2.svg"
import flower from "../assets/ui.svg"

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
              delay: 0.1
            }
          },
        }}>
        <MaintenanceBody 
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit."
          title={["Site ainda em ", <strong>Desenvolvimento</strong>]}
          btn="Me avise quando estiver pronto"
          src1={hand}
          src2={flower}
          desktop="ui2"
          mobile="ui"
          redirect="/congratulations"
          input={<input className="newsletter emailbox" placeholder="Seu endereço de email" type="email"></input>}
        />
      </motion.div>
    </Container>
  )
}
