import Head from 'next/head'
import {LoginContainer} from '../../styles/pages/login'
import loginimg from '../../assets/login/ui-login.svg'
import githubsvg from '../../assets/login/github.svg'
import {motion} from 'framer-motion'

export default function Login(props) {
    return(
        <LoginContainer>
            <Head>
                <title>Notemock - Login</title>
            </Head>

                <h1 className="logo">Note<span className="mock">mock</span>.</h1>
                
                <motion.div className="persistcontent" initial="hidden" animate="visible" variants={{
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
                    <img src={loginimg} alt="" className="LoginIMGDesktop"/>
                    <div id="LoginBox">
                        <h1 className="title">Entre ou Registra-se</h1>

                        <form className="maxsize" action="/action_page.php" method="post">
                            <input type="email" name="email" className="emailinput normalinput" placeholder="Endereço de email"/>
                            <input type="password" name="password" className="passwordinput normalinput" placeholder="Senha"/>
                            <button type="submit" name="makelogin" className="LoginButton">Fazer Login na Notemock</button>
                        </form>
                        <div id="OrLine">
                            <hr className="ORLine"/>
                            <h3>OU</h3>
                            <hr className="ORLine"/>
                            {/* <hr style="height:2px;border-width:0;color:gray;background-color:gray"> */}
                        </div>
                        <button className="GithubButton">
                            <img src={githubsvg} alt="" className="Githublogo"/>
                            <h2>Fazer Login com o Github</h2>
                        </button>
                        <a href="#" className="singup">Não tem uma conta? <span>Se registre</span></a>

                        <img className="MobileImg" src={loginimg}></img>
                    </div>
            </motion.div>
        </LoginContainer>
    )
}