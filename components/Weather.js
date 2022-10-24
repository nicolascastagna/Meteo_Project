import moment from "moment-timezone";

const Weather = ({ data }) => {
  return (
    <div className="container-weather">
      <div className="top">
        <div className="temp_pict">
          <div className="city-temp">{data.name}</div>
          <div className="temp-actually">{data.main.temp.toFixed(0)}°</div>
          <div className="top-corner">
            <div className="contain-icon">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                layout="fill"
                className="icon"
              />
            </div>
            <p className="description-weather">{data.weather[0].description}</p>
          </div>
        </div>
        <div className="contain-temp-bloc">
          <p className="temp-max">Max. {data.main.temp_max.toFixed(0)}°</p>
          <p className="humidity">
            <span>Humidité</span>
            {data.main.humidity}°
          </p>
          <p className="temp-min">Min. {data.main.temp_min.toFixed(0)}°</p>
        </div>
      </div>

      <div className="middle">
        <div className="align-temp">
          <p className="vertical-temp">
            <span>Lever du soleil</span>

            {moment.unix(data.sys.sunrise).tz("Europe/Paris").format("HH:mm")}
          </p>
          <p className="vertical-temp">
            <span>Coucher du soleil</span>

            {moment.unix(data.sys.sunset).tz("Europe/Paris").format("HH:mm")}
          </p>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Weather;
