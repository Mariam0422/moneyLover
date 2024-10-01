import food from "../../../img/food.png";
import bills from "../../../img/bills.png";
import rent from "../../../img/rent.png";
import phone from "../../../img/phone.png";
import purchases from "../../../img/purchases.png";
import TV from "../../../img/TV.png";
import internet from "../../../img/internet.png";
import personalItems from "../../../img/personalItems.png";
import iron from "../../../img/iron.png";
import makeup from "../../../img/makeUp.png";
import house from "../../../img/house.png";
import cat from "../../../img/cat.png";
import transport from "../../../img/transport.png";
import health from "../../../img/health.png";
import medical from "../../../img/medical.png";
import education from "../../../img/education.png";
import entertainment from "../../../img/entertainment.png";
import presents from "../../../img/presents.png";
import saving from "../../../img/savings.png";
import other from "../../../img/other.png";
import './index.css'
const IconComponents = () => {
  return (
    <div className="list">
      <div className="category">
        <img src={food} alt="food" style={{ width: "40px", height: "40px" }} />
        <p>Nutrition</p>
      </div>

      <div className="category">
        <img
          src={bills}
          alt="bills"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Utility Bills</p>
      </div>

      <div className="category">
        <img src={rent} alt="rent" style={{ width: "40px", height: "40px" }} />
        <p>House Rent</p>
      </div>

      <div className="category">
        <img
          src={phone}
          alt="phone"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Phone Bill</p>
      </div>

      <div className="category">
        <img src={TV} alt="TV" style={{ width: "40px", height: "40px" }} />
        <p>TV Bill</p>
      </div>

      <div className="category">
        <img
          src={internet}
          alt="internet"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Internet Bill</p>
      </div>

      <div className="category">
        <img
          src={purchases}
          alt="purchases"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Purchases</p>
      </div>

      <div className="category">
        <img
          src={personalItems}
          alt="personalItems"
          style={{ width: "40px", height: "40px" }}
        />
        <div style={{ textAlign: "end" }}>
          <p>Personal</p>
          <p style={{ marginTop: "-40px" }}>Items</p>
        </div>
      </div>

      <div className="category">
        <img src={iron} alt="iron" style={{ width: "40px", height: "40px" }} />
        <div style={{ textAlign: "end" }}>
          <p>Household</p>
          <p style={{ marginTop: "-40px" }}>Items</p>
        </div>
      </div>

      <div className="category">
        <img
          src={makeup}
          alt="makeup"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Makeup</p>
      </div>

      <div className="category">
        <img
          src={house}
          alt="house"
          style={{ width: "40px", height: "40px" }}
        />
        <div style={{ textAlign: "end" }}>
          <p>Household</p>
          <p style={{ marginTop: "-40px" }}>expenses</p>
        </div>
      </div>

      <div className="category">
        <img src={cat} alt="cat" style={{ width: "40px", height: "40px" }} />
        <p>Pets bill</p>
      </div>

      <div className="category">
        <img
          src={transport}
          alt="transport"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Transport</p>
      </div>

      <div className="category">
        <img
          src={health}
          alt="health"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Health</p>
      </div>

      <div className="category">
        <img
          src={medical}
          alt="medical"
          style={{ width: "40px", height: "40px" }}
        />
        <div style={{ textAlign: "end" }}>
          <p>Medical</p>
          <p style={{ marginTop: "-40px" }}>examination</p>
        </div>
      </div>

      <div className="category">
        <img
          src={education}
          alt="education"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Education</p>
      </div>

      <div className="category">
        <img
          src={entertainment}
          alt="Avocation"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Avocation</p>
      </div>

      <div className="category">
        <img
          src={presents}
          alt="presents"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Presents</p>
      </div>

      <div className="category">
        <img
          src={saving}
          alt="saving"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Savings</p>
      </div>

      <div className="category">
        <img
          src={other}
          alt="other"
          style={{ width: "40px", height: "40px" }}
        />
        <p>Other</p>
      </div>
    </div>
  );
};

export default IconComponents;
