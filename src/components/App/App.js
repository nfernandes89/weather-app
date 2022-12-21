import "./App.scss";
import { useState } from "react";
import CardCurrent from "../../components/Cards/CardCurrent";
import CardForecast from "../../components/Cards/CardForecast";

function App() {
  const [city, setCity] = useState("");
  const [weatherForecast, setWeatherForecast] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=1a0fe3f6a89c4787811193615221612&q=${city}&days=5&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherForecast(data);
      });
  };

  const now = new Date();
  const locale = navigator.language;
  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    weekday: "long",
  };
  const actualDate = new Intl.DateTimeFormat("en-US" / locale, options).format(
    now
  );

  return (
    <div>
      <nav className="navbar">
        <p>
          Weather of {city}
          <span>{actualDate}</span>
        </p>
      </nav>
      <main className="container">
        <div>
          <h1>Check the weather of your city:</h1>
          <div className="search-loc">
            <input
              type="text"
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="form-control"
              value={city}
              placeholder="🔎 Search location"
            />
            <button onClick={handleSearch} className="btn-search">
              Search
            </button>
          </div>
          <div className="current-card">
            {weatherForecast ? (
              <CardCurrent
                imgSrc={weatherForecast.current.condition.icon}
                conditionText={weatherForecast.current.condition.text}
                tempC={weatherForecast.current.temp_c}
                humid={weatherForecast.current.humidity}
                windDir={weatherForecast.current.wind_dir}
              />
            ) : null}
          </div>
          <div className="forecast-card">
            {weatherForecast ? (
              <CardForecast
                foreDate={weatherForecast.forecast.forecastday[0].date}
                imageSrc={
                  weatherForecast.forecast.forecastday[0].day.condition.icon
                }
                condText={
                  weatherForecast.forecast.forecastday[0].day.condition.text
                }
                minTemp={weatherForecast.forecast.forecastday[0].day.mintemp_c}
                maxTemp={weatherForecast.forecast.forecastday[0].day.maxtemp_c}
                precipitProb={
                  weatherForecast.forecast.forecastday[0].day
                    .daily_chance_of_rain
                }
              />
            ) : null}
            {weatherForecast ? (
              <CardForecast
                foreDate={weatherForecast.forecast.forecastday[1].date}
                imageSrc={
                  weatherForecast.forecast.forecastday[1].day.condition.icon
                }
                condText={
                  weatherForecast.forecast.forecastday[1].day.condition.text
                }
                minTemp={weatherForecast.forecast.forecastday[1].day.mintemp_c}
                maxTemp={weatherForecast.forecast.forecastday[1].day.maxtemp_c}
                precipitProb={
                  weatherForecast.forecast.forecastday[1].day
                    .daily_chance_of_rain
                }
              />
            ) : null}
            {weatherForecast ? (
              <CardForecast
                foreDate={weatherForecast.forecast.forecastday[2].date}
                imageSrc={
                  weatherForecast.forecast.forecastday[2].day.condition.icon
                }
                condText={
                  weatherForecast.forecast.forecastday[2].day.condition.text
                }
                minTemp={weatherForecast.forecast.forecastday[2].day.mintemp_c}
                maxTemp={weatherForecast.forecast.forecastday[2].day.maxtemp_c}
                precipitProb={
                  weatherForecast.forecast.forecastday[2].day
                    .daily_chance_of_rain
                }
              />
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
