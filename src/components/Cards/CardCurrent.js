import "./Cards.scss";

const CardCurrent = ({ imgSrc, conditionText, tempC, humid, windDir }) => {
  return (
    <div className="current-weather">
      <h3>Now:</h3>
      <img alt="weather icon" src={imgSrc} />
      <h4>{conditionText}</h4>
      <p>Temperature: {tempC}ºC</p>
      <p>Humidity: {humid}%</p>
      <p>Wind direction: {windDir}</p>
    </div>
  );
};

export default CardCurrent;
