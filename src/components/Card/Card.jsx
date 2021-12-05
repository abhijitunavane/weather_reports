import classNames from "classnames";
import styles from "./Card.module.css";
import moment from "moment";
import { useEffect, useState } from "react";
import { Weather_icons } from "./../../weather-icons/Weather_icons";

function Card({ data, city_name }) {
  const [w_icon, setW_icon] = useState();
  useEffect(() => {
    let hour = moment(data.dt * 1000).format("HH");

    if (hour > 20 && hour < 3) 
      setW_icon(Weather_icons[data.weather[0].id].wi);
    else
      setW_icon(Weather_icons[data.weather[0].id]["wi-night"]);
  }, []);
  return (
    <div className={classNames("card text-white", styles.cardContainer)}>
      <div className="card-body row p-md-5">
        <div className="col-md-6 text-center text-md-start ">
          <div className="py-2 p-md-0">
            <p className="h2">{city_name}</p>
            <p>
              {moment(data.dt * 1000)
                .format("ddd Do MMMM, HH:mm:ss")
                .toString()}
            </p>
          </div>

          <hr />

          <div className={styles.temp}>
            <span>{data.main.temp}</span>
            <i className={classNames("wi wi-celsius", styles.celsius)}></i>
          </div>

          <div>
            <span>{data.main.temp_max}</span> /{" "}
            <span>{data.main.temp_min}</span>
            <p />
          </div>
          <div>
            <p className="text-capitalize">{data.weather[0].description}</p>
          </div>

          <hr />

          <div className="pt-3 p-md-0">
            <p>
              <i className="wi wi-strong-wind"></i>
              <span> Wind: </span>
              <span>{Math.round(data.wind.speed * 3.6)} km/hr</span>
            </p>
            <p>
              <i className="wi wi-humidity"></i>
              <span> Humidity: </span>
              <span>{data.main.humidity} %</span>
            </p>
          </div>
        </div>

        <div className="col-md-6 text-center align-middle my-auto">
          <i
            className={classNames(
              w_icon,
              styles.wi
            )}
          ></i>
          {/* <img
            className={styles.icon}
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
