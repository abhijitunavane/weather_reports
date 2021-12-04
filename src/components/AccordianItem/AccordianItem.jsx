import moment from "moment";
import { Card } from "../";

function AccordianItem({ data, date, item }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#Collapse" + item}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {date}
        </button>
      </h2>
      <div
        id={"Collapse" + item}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">
          <Card data={data.list[item]} city_name={data.city.name} />
        </div>
      </div>
    </div>
  );
}

export default AccordianItem;
