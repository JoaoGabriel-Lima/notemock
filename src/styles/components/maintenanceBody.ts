import styled from 'styled-components';

export const MaintenanceContainer = styled.div`

    /* *{
        transition: all .1s;
    } */
    .newsletter:focus {
        outline: none;
    }
    .maxsize {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }



    .persistcontent {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .1s;
    }
        height: auto;
        width: 100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        transition: .1s;
    .title {
        text-align: center;
        font-family: 'Roboto';
        // position: relative;
        font-weight: 500;
        font-size: 10.6vw;
        margin-bottom: 0px;
        width: 100vw;
    }
    .bold {
        font-weight: 600;
    }
    .description {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        width: 93vw;
        margin-bottom: 30px;
    }
    .newsletter {
        border: 0;
        padding: 20px 0;
        width: 90vw;
        // height: 53px !important;
        
        border-radius: 9px;
        background-color: #57B894;
        cursor: pointer;
        margin-bottom: 10px;
        transition: all .1s;
    }
    #buttonnl:disabled {
        transition: .1s;
        background-color: #B85658;
        border: 0
    }
    #buttonnl:disabled:hover, #buttonnl:disabled:focus {
        background-color: #B85658;
        border: solid 2px #663334;
    }
    /* .newsletter + .newsletter {
        margin-bottom: 40px;
    } */
    .newsletter:hover, .newsletter:focus {
        border: solid 2px #336653;
        transition: all .1s;
    }
    .newsletter a {
        color: white;
        text-decoration: none;
        font-size: 17px;
        font-family: 'Roboto';
        font-weight: 500;
    }
    .ui{
        margin-top: 40px;
        padding-bottom: 60px;
    }
    .thankmobile {
        width: 65%;
    }

    .ui2 {    
        display: none;
    }

    .thankdesktop {
        display: none;
    }

    .none {
        display: none;
    }
    .emailbox {
        background-color: transparent;
        border: solid 2px #57B894;
        font-family: 'Roboto';
        text-align: center;
        font-size: 17px;
        font-weight: 500;
        padding: 0;
        height: 56px !important;
        transition: .1s;
    }
    @media (max-width:226px) {
        .ui{
            transition: .1s;
            width: 80%;
        }
        .logo {
            transition: .1s;
            font-size: 19vw;
        }
    }


    @media (min-width:953px){
            height: 100%;

        .persistcontent {
            height: 100%;
            display: flex;
            width: 480px;
            // margin-left: 20px;
            flex-direction: column;
            align-items: flex-start;
            margin-right: 8%;
            justify-content: center;
        }
        .ui2 { 
            display: block; 
            width: 45vw;
            margin-right: 90px;
            transition: .1s;
        }
        .thankdesktop {
            display: block;
            width: 40vw;
            margin-right: 90px;
            margin-left: 45px;
            transition: .1s;
        }
        .title {
            text-align: left;
            font-family: 'Roboto';
            font-weight: 500;
            font-size: 60px;
            margin-bottom: 0px;
            width: 500px;
        }
        .description {
            text-align: left;
            width: 470px;
            text-align: justify;
        }
        .newsletter {
            // max-width: 480px;
            width: 100%;
            margin-right: 10px;
            padding: 17px 0px;
        }
        .ui{
            display: none;
        }
        .emailbox {
            // padding: 0 16px;
            height: 20px;
        }
    }

    @media (min-width:1320px){
        .ui2 {
            width: 650px;
        }
        .thankdesktop {
            width: 550px;
        }
    }
    @media (max-width:1036px) {
        .ui2 {
            margin-right: 50px;
        }
        .thankdesktop {
            margin-right: 50px;
            margin-left: 45px;
        }
    }
    @media (min-width:1300px) {
        .thankdesktop {
            margin-left: 8vw;
        }
    }
`