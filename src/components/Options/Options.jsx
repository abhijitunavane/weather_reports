import { useState } from "react";
import classNames from 'classnames';
import styles from "./Options.module.css";
function Options({  fetchAPI_weather, setData }) {
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
  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center">        
          <input
            placeholder="Type your city name..."
            className={classNames("form-control rounded-0", styles.search)}
            type="search"
            onChange={handleChange}
          />
        <div>
          <button className="btn btn-dark rounded-0" type="submit">
            <i className="bi bi-search text-white p-2"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Options;
