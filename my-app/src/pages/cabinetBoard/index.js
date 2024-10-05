import { Button } from "antd";
import IconComponents from "../../components/shared/IconComponents";
import { useState } from "react";
import CardModalForm from "../../components/shared/cardModalForm";
import Card from "../../components/shared/Card";
import "./index.css";
import ExpensesModalForm from "../../components/shared/expensesModalForm";

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
        <div className="cardButton">
          <Card />
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
        <IconComponents />
      </div>
      <div className="story"></div>
      <CardModalForm visible={visibleCard} setVisible={setVisibleCard} />
      <ExpensesModalForm
        visible={visibleExpenses}
        setVisible={setVisibleExpenses}
      />
    </div>
  );
};

export default CabinetBoard;
