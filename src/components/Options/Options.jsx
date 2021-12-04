import { useState } from "react";
function Options({ cities, fetchAPI_weather, setData }) {
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchedTerm === "") {
      setData();
      return;
    }
    fetchAPI_weather(searchedTerm);
  };

  const handleChange = (e) => {
    setSearchedTerm(e.target.value);
  };

  if (cities.length < 1) {
    return <h1 className="text-white text-center">Fetching...</h1>;
  }
  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">
        <div>
          <input
            placeholder="Type your city name..."
            className="form-control"
            type="text"
            list="cities"
            onChange={handleChange}
          />

          <datalist className="text-primary p-5" id="cities">
            {cities.map(({ name }, key) => (
              <option value={name} key={key} />
            ))}
          </datalist>
        </div>
        <div>
          <button className="btn" type="submit">
            <i className="bi bi-search text-white p-2"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Options;
