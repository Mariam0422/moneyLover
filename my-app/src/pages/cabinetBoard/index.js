import { Button } from "antd";
import IconComponents from "../../components/shared/IconComponents";
import "./index.css";

const CabinetBoard = () => {
  return (
    <div className="main">
      <div >
      <div className="card">
        <div className="visa">VISA</div>
        <div className="text">0000 0000 0000 0000</div>
        <div className="footer">
          <div className="cardHolder">Ruben Rubinyan</div>
          <div className="term">05/28</div>
        </div>
      </div>
      <div className="btnClass">
        <Button className="plusBtn">
          <span style={{ marginTop: "-7px" }}>+</span>
        </Button>
        <p className="btnText">Add new expenses</p>
      </div>

      <IconComponents />
      </div>
      <div className="story"></div>
    </div>
  );
};

export default CabinetBoard;
