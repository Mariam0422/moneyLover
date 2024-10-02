import { Button  } from "antd";
import IconComponents from "../../components/shared/IconComponents";
import "./index.css";
import { useState } from "react";

import IssueModalForm from "../../components/shared/issueModalForm";

const CabinetBoard = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  }
 
  return (
    <div className="main">
      <div>
        <div className="cardButton">
          <div className="card">
            <div className="visa">VISA</div>
            <div className="text">0000 0000 0000 0000</div>
            <div className="footer">
              <div className="cardHolder">Ruben Rubinyan</div>
              <div className="term">05/28</div>
            </div>
          </div>
          <div className="btnClass">
            <Button className="btn" onClick={showModal}>
              <span style={{ marginTop: "-7px" }}>+</span>
            </Button>
            <p className="btnText">Add new card</p>
          </div>
          <div className="btnClass">
            <Button className="btn">
              <span style={{ marginTop: "-7px" }}>+</span>
            </Button>
            <p className="btnText">Add new expenses</p>
          </div>
        </div>
        <IconComponents />
      </div>
      <div className="story"></div>
      <IssueModalForm visible={visible} setVisible={setVisible}/>
    </div>
  );
};

export default CabinetBoard;
