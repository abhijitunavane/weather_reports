import moment from "moment";
import { AccordianItem } from "../";

// const listIndices = [32, 24, 16, 8, 0];

function Graphics({ data }) {
  if (!data) {
    return "";
  }
  return (
    <div className="container py-5 p-md-5">
      <h1 className="text-center text-white p-5">{data.name}</h1>
      <div className="accordion" id="accordion">
        <AccordianItem
          data={data}
          date={moment()
            .format("ddd Do MMMM")
            .toString()}
        />
      </div>
    </div>
  );
}

export default Graphics;
