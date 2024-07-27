import styled from "styled-components";

export const Container = styled.div`
   
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    max-width: 100vw; 
    height: auto; /* Alterado para auto para permitir rolagem */
    
    background-image: url(${(props) => props.bgImage});  
    background-size: cover; /* Cobre toda a superfície do contêiner */  
    background-position: center; /* A imagem é centralizada */  
    background-repeat: no-repeat;  
    background-attachment: fixed; /* Imagem do fundo sempre fixa ao rolar */  

    h1 {
        font-size: 3rem;
        color: #fff;

        @media (max-width: 430px) {
            font-size: 2.3rem;
        }
    }

    input {
        padding: 10px;
        border-radius: 20px 0 0 20px ;
        border: none;
        width: 500px;
        margin-top: 30px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;

        @media (max-width: 430px) {
            width: 60%;
        }
    }

    button {
        background-color: #ff9800;
        padding: 10px;
        border-radius: 0 20px 20px 0;
        border: none;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;

        &:hover {
            background-color: #f57c00;
        }
    }
`