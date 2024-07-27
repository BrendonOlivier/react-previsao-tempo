/* eslint-disable react/prop-types */
import {WeatherContainer, InfoWeather, Temperature, Description, Details} from './styles'

// eslint-disable-next-line react/prop-types
function WeatherInfo({ weather }) {

    return (
        <WeatherContainer>

            <h2>{weather.name}</h2>

            <InfoWeather>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                <Temperature>{Math.round(weather.main.temp)}ºC</Temperature>
            </InfoWeather>

            <Description>{weather.weather[0].description}</Description>

            <Details>
                <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}%</p>
                <p>Presão: {weather.main.pressure}</p>
            </Details>

        </WeatherContainer>
    )
}

export default WeatherInfo