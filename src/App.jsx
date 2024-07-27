import { useState, useRef } from 'react'
import axios from 'axios'
import WeatherInfo from './components/WeatherInfo'
import WeatherInfo5Days from './components/WeatherInfo5Days'
import { toast, ToastContainer } from 'react-toastify'

import { Container } from './styles'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const [cityImage, setCityImage] = useState(''); // Estado para armazenar a URL da imagem
  const inputRef = useRef()

  const fetchCityImage = async (city) => {  
    const unsplashAccessKey = 'EtpMFi3sEXuatItBWf9H2zF202gfxVo6znNyEg3OwK4';  
    const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashAccessKey}`;  

    try {  
      const response = await fetch(unsplashApiUrl);  
      const data = await response.json();  
      const imageUrl = data.results[8]?.urls.regular; // Obtendo a URL da imagem do primeiro resultado  
      if (imageUrl) {  
        setCityImage(imageUrl); // Atualiza o estado com a URL da imagem  
      } else {  
        setCityImage(''); // Limpa a imagem caso não haja  
      }  
    } catch (error) {  
      console.error('Erro ao buscar imagem da cidade:', error);  
    }  
  };  

  async function searchCity() {
    const city = inputRef.current.value

    // Verifica se o campo da cidade está vazio  
    if (!city) {
      toast.error("Por favor, digite o nome da cidade."); // Usando toast ao invés de alert
      return;
    }
    const key = "6180dd31a0302771b3734fe6ee218195"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    try {  
      // Tenta realizar as requisições à API  
      const apiInfo = await toast.promise(  
        axios.get(url),  
        {  
          pending: 'Buscando os dados... 🔎🧐',  
          success: 'Previsão encontrada! ✅',  
          error: 'Previsão não encontrada. 🤯'  
        }   
      )  
      
      const apiInfo5Days = await axios.get(url5Days);

      // Atualiza os estados com os dados recebidos  
      setWeather(apiInfo.data);
      setWeather5Days(apiInfo5Days.data);

      // Busca a imagem da cidade e atualiza o estado  
      fetchCityImage(city);  
    } catch (error) {
      // Trata erros na requisição  
      toast.error("Cidade não encontrada. Por favor, digite o nome certo da cidade."); // Usando toast ao invés de alert
      setWeather(); // Limpa o estado anterior  
      setWeather5Days(); // Limpa o estado anterior
      setCityImage(''); // Limpa a imagem anterior  
    }
  }

  // Função para lidar com o pressionamento da tecla "Enter"  
  const handleKeyDown = (e) => {  
    if (e.key === 'Enter') {  
      searchCity();  
    }  
  }  

  return (
    <Container bgImage={cityImage}> 
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' onKeyDown={handleKeyDown} />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInfo weather={weather} />}
      {weather5Days && <WeatherInfo5Days weather5Days={weather5Days} />}
      <ToastContainer autoClose={2000}  /> {/* Adicionando o ToastContainer aqui */} 
    </Container>
  )
}

export default App