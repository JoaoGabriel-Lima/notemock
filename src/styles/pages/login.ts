import styled from 'styled-components'

export const LoginContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    @font-face {
        font-family: 'Coolvetica';
        src: local('Coolvetica'), url('/src/fonts/coolvetica-regular.ttf') format('ttf');
    }
    *:focus {
       outline: none; 
    }
    height: 100vh;
    width: 100vw;

    overflow: auto;
    /* -webkit-overflow-scrolling: touch; */
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0, 0, 0,.1) 100%);

    .logo {
        font-family: 'Coolvetica';
        font-size: 50px;
        margin-top: 50px;
        color: #3F3D56;
    }
    .mock {
        color: #57B894;
    }
    .persistcontent {
        /* height: 100vh; */
        /* overflow: auto; */
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .1s;
        box-sizing: border-box;
         /* overflow: visible; */
        /* background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0, 0, 0,.1) 100%); */
    }
    .title {
        text-align: center;
        font-family: 'Roboto';
        // position: relative;
        font-weight: 500;
        font-size: 10.6vw;
        margin-top: 20px;
        margin-bottom: 40px;
        /* width: 100vw; */
    }
    .maxsize {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        /* margin-top: 40px; */
    }
    .normalinput {

        background-color: transparent;
        height: 53px;
        width: 85%;
        border: solid #707070 1px;
        border-radius: 13px;
        font-size: 16px;
        text-align: center;
        box-shadow: 0px 3px 6px rgba(0,0,0,.09)
    }
    .normalinput + .normalinput {
        margin-top: 10px;
    }
    .LoginButton {
        min-height: 53px;
        width: 85%;
        margin-top: 25px;
        border: 0;
        background-color: #57B894;
        color: white;
        border-radius: 13px;
        font-weight: 500;
        font-size: 15px;
    }
    #OrLine {
    
        width: 85%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .ORLine {
        margin-left: 0;
        margin-right: 0;
        color: black;
        background-color: black;
        height: 0.1px;
        border: solid black 0.1px;
        width: 40%;
    }
    .GithubButton {
        min-height: 53px;
        width: 85%;
        /* margin-top: 0px; */
        border: 0;
        background-color: #2A2A2A;
        color: white;
        border-radius: 13px;

        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .GithubButton h2{
        font-weight: 500;
        font-size: 15px;
    }
    .singup {
        margin: 20px;
        font-weight: 400;
        cursor: pointer;
        text-align: center;
    }
    .singup span{
        color: #57B894;
    }
    .MobileImg {
        /* overflow: auto; */
        width: 50%;
        padding-bottom: 50px;
    }
    .Githublogo {
        width: 28px;
        margin-right: 15px;
    }
`