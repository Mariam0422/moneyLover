import { Button  } from "antd";
import IconComponents from "../../components/shared/IconComponents";
import "./index.css";
import { useState } from "react";

import IssueModalForm from "../../components/shared/issueModalForm";
import Card from "../../components/shared/Card";

const CabinetBoard = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  }
 
  return (
    <div className="main">
      <div>
        <div className="cardButton">
          <Card/>
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
