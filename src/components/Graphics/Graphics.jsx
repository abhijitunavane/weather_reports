import moment from "moment";
import { AccordianItem } from "../";

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
            .format("ddd Do MMMM, HH:mm:ss")
            .toString()}
        />
      </div>
    </div>
  );
}

export default Graphics;
