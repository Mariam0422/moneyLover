import { Button } from "antd";
import IconComponents from "../../components/shared/IconComponents";
import { useState } from "react";
import CardModalForm from "../../components/shared/cardModalForm";
import Card from "../../components/shared/Card";
import ExpensesModalForm from "../../components/shared/expensesModalForm";
import graphic from "../../img/graphics.png";
import "./index.css";

const CabinetBoard = () => {
  const [visibleCard, setVisibleCard] = useState(false);
  const [visibleExpenses, setVisibleExpenses] = useState(false);

  const showCardModal = () => {
    setVisibleCard(true);
  };
  const showExpensesModal = () => {
    setVisibleExpenses(true);
  };
  return (
    <div className="main">
      <div>
        <div className="boardHeader">
          <Card />
          <div>
            <div className="btnClass">
              <Button className="btn" onClick={showCardModal}>
                <span style={{ marginTop: "-7px" }}>+</span>
              </Button>
              <p className="btnText">Add new card</p>
            </div>
            <div className="btnClass">
              <Button className="btn" onClick={showExpensesModal}>
                <span style={{ marginTop: "-7px" }}>+</span>
              </Button>
              <p className="btnText">Add new expenses</p>
            </div>
          </div>
          <div className="graphics">
            <img src={graphic} alt="graphic" style={{width: "400px"}} />
          </div>
        </div>
        <IconComponents />
      </div>

      <CardModalForm visible={visibleCard} setVisible={setVisibleCard} />
      <ExpensesModalForm
        visible={visibleExpenses}
        setVisible={setVisibleExpenses}
      />
    </div>
  );
};

export default CabinetBoard;
