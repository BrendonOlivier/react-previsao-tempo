import styled from "styled-components";

export const ContainerWeather5Days = styled.div`
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    padding: 20px;
    margin: 20px 100px;

    @media (max-width: 430px) {
        margin: 20px 0;
    }
`

export const Title = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 15px;
`

export const WatherList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;

    @media (max-width: 430px) {
            align-items: center;
            justify-content: center;
            gap: 20px;
    }

    @media (width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
`

export const ContainerForecast = styled.div`
    text-align: center;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 10px;
    padding: 10px;

    img {
        width: 70px;
        height: 70px;
        background-color: #e3e3d9;
        border-radius: 50%;
        border: 1px solid #000009;
    }

    @media (max-width: 430px) {
            width: 100%;
            padding: 15px;
        }
`

export const Day = styled.p`
    text-transform: capitalize;
    font-size: 1.1rem;
    margin-bottom: 10px;
`

export const Description = styled.p`
    text-transform: capitalize;
    font-size: 1.1rem;
    margin-bottom: 10px;
`