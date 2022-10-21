import moment from "moment-timezone";
import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="container-weather">
      <div className="top">
        <div className="temp_pict">
          <div className="temp-actually">{data.main.temp}</div>
          <div className="top-corner">
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              layout="fill"
            />
            <p>{data.weather[0].description}</p>
          </div>
        </div>
        <p className="temp-min">{data.main.temp_min}</p>
        <p className="temp-max">{data.main.temp_max}</p>
      </div>

      <div className="middle">
        <p>{data.main.humidity}</p>
        <div className="align-temp">
          <p>
            {moment.unix(data.sys.sunrise).tz("Europe/Paris").format("HH:mm")}
          </p>
          <p>
            {moment.unix(data.sys.sunset).tz("Europe/Paris").format("HH:mm")}
          </p>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Weather;
