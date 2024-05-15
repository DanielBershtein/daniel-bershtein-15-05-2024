import React from "react";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import Forecast from "../components/Forecast";

const HomePage = () => {
  const [citySearch, setCitySearch] = useState("");
  const [cityData, setCityData] = useState(null);

  const fetchCity = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Bj6eRI05ZVhIjbGIVl35NYGLHvtnkt3g&q=${citySearch}`
      )
      .then((response) => {
        setCitySearch("");
        setCityData(response.data[0]);
      });
  };

  return (
    <div>
      <Header />
      <form onSubmit={fetchCity}>
        <input
          type="text"
          placeholder="Enter city name"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        <button type="submit">
          <Icon icon={search} size={20} />
        </button>
      </form>
      {cityData && (
        <div>
          <Forecast cityData={cityData} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
