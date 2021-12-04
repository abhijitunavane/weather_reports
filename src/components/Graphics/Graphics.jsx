import moment from "moment";
import {AccordianItem} from "../";

const listIndices = [32, 24, 16, 8, 0];

function Graphics({ data }) {
  if (!data) {
    return "";
  }
  return (
    <div className="container py-5 p-md-5">
      <h1 className="text-center text-white p-5">{data.city.name}</h1>
      <div className="accordion" id="accordion">
        {listIndices.map((i, key) => (
          <AccordianItem
            key={key}
            data={data}
            date={moment(data.list[i].dt * 1000)
              .format("ddd Do MMMM")
              .toString()}
            item={i}
          />
        ))}

      </div>
    </div>
  );
}

export default Graphics;
