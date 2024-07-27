/* eslint-disable react/prop-types */
import { ContainerWeather5Days, Title, WatherList, ContainerForecast, Day, Description } from './styles'

// eslint-disable-next-line react/prop-types
function WeatherInfo({ weather5Days }) {
    let dailyForecast = {}

    // Passando de previsão por previsão, e formatando as datas corretamente
    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }
    // Pegando só os valores dentro do dailyForecast, do Segundo(1) ao quinto(6) = 5 valores
    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate
    }

    return (
        <ContainerWeather5Days>
            <Title>Previsão Próximos 5 dias</Title>
            <WatherList>
                {nextFiveDays.map(forecast => (

                    <ContainerForecast key={forecast.dt}>
                        <Day>{convertDate(forecast)}</Day>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="imagem" />
                        <Description>{forecast.weather[0].description}</Description>
                        <p>{Math.round(forecast.main.temp_min)}ºC min / {Math.round(forecast.main.temp_max)}ºC máx</p>
                    </ContainerForecast>
                ))}
            </WatherList>
        </ContainerWeather5Days>
    )
}

export default WeatherInfo