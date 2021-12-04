import moment from "moment";
import { Card } from "../";

function AccordianItem({ data, date }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#CollapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {date}
        </button>
      </h2>
      <div
        id="CollapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">
          <Card data={data} city_name={data.name} />
        </div>
      </div>
    </div>
  );
}

export default AccordianItem;
