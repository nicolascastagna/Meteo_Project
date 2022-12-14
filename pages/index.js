import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&lang=fr`;

  const fetchWeather = (e) => {
    const formError = document.querySelector(".form.error");
    e.preventDefault();
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setWeather(response.data);
        formError.innerHTML = "";
      })
      .catch((err) => {
        if (err.response.data.cod) {
          formError.innerHTML =
            "La ville n'a pas été trouvé, essayez une nouvelle localisation.";
        }
      });
    setCity("");
    setLoading(false);
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="mx-auto max-w-4xl">
        <Head>
          <title>Weather - Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="block-meteo">
          <form onSubmit={fetchWeather} className="form-meteo">
            <div>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="input-city"
                type="text"
                placeholder="Entrez une ville"
              />
              <button className="button-input" onClick={fetchWeather}>
                Valider
              </button>
            </div>
          </form>
          <div className="form error"></div>
          {weather.main && <Weather data={weather} />}
        </main>
      </div>
    );
  }
}
