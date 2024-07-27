import styled from "styled-components";

export const WeatherContainer = styled.div`
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 20px;
    margin: 20px 400px;

    h2 {
        font-size: 3rem;

        @media (max-width: 430px) {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 430px) {
        margin: 20px 0;
    }

    @media (width: 768px), (width: 820px), (width: 912px), (width: 1024px) {
        margin: 20px 200px;
    }
`

export const InfoWeather = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;

   img {
    width: 80px;
   }
`

export const Temperature = styled.p`
    font-weight: bold;
    font-size: 2.1rem;
`

export const Description = styled.p`
    text-transform: capitalize;
    font-size: 1.3rem;
    margin-bottom: 10px;
`

export const Details = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 35px;
    font-weight: bold;
`