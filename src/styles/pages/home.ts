import styled from 'styled-components';

// Tudo que não está entre {} se refere a div Main(Ou Container se preferir)

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    @font-face {
        font-family: 'Coolvetica';
        src: local('Coolvetica'), url('/src/fonts/coolvetica-regular.ttf') format('ttf');
    }

    height: 100vh;
    width: 100vw;

    overflow: auto;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    // justify-content: center;
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

    #contentdiv {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center !important;
        /* justify-content: center; */
    }

    @media (max-width:226px) {
        .logo {
            transition: .1s;
            font-size: 19vw;
        }
    }


    @media (min-width:953px){
        #contentdiv {
            
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center !important;
        }
        
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: flex-start;

        .logo {
            font-family: 'Coolvetica';
            font-size: 40px;
            margin-top: 15px;
            margin-left: 15px;
            color: #3F3D56;
        }
    }
`
