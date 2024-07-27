import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    list-style: none;
    font-family: "Montserrat", sans-serif;
}

    body {
        background: linear-gradient(to right, #4B79A1, #283E51);
        color: #333;
        overflow-x: hidden;
    }
`