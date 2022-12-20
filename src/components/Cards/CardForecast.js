import "./Cards.scss";

const CardForecast = ({
  foreDate,
  imageSrc,
  condText,
  maxTemp,
  minTemp,
  precipitProb,
}) => {
  return (
    <div className="forecast-weather">
      <h3>{foreDate}</h3>
      <img alt="weather icon" src={imageSrc} />
      <h4>{condText}</h4>
      <p>
        Temperature: {minTemp}ºC - {maxTemp}ºC
      </p>
      <p>Probability of raining: {precipitProb}%</p>
    </div>
  );
};

export default CardForecast;
