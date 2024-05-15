import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { RainbowSpinner } from "react-spinners-kit";

const Forecast = ({ cityData }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setData();
    setLoading(true);
    axios
      .get(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityData.Key}?apikey=Bj6eRI05ZVhIjbGIVl35NYGLHvtnkt3g`
      )
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      });
  }, [cityData.Key]);

  return (
    <div>
      {data && cityData.EnglishName}
      <div>
        {Math.ceil(data.Temperature.Metric.Value)}
        {data.Temperature.Metric.Unit}
        {data.WeatherText}
      </div>
      {!data && <RainbowSpinner loading={loading} />}
    </div>
  );
};

export default Forecast;
