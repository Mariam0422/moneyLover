import { Button } from "antd";
import IconComponents from "../../components/shared/IconComponents";
import { useState } from "react";
import ExpensesModalForm from "../../components/shared/expensesModalForm";
import wallet from "../../img/wallet.svg";
import Chart from "../../chart/Chart";
import "./index.css";

const CabinetBoard = () => {
  const [visibleExpenses, setVisibleExpenses] = useState(false);

  const showExpensesModal = () => {
    setVisibleExpenses(true);
  };
  return (
    <div className="main">
      <div>
        <div className="boardHeader">
          <div style={{textAlign: "center"}}>
            <img src={wallet} alt="wallet" style={{ width: "150px" }} />
            <p style={{fontSize: "20px", fontWeight: "500"}}>Payment Method Cash</p>
          </div>
          <div className="graphics_container">
            <Chart />
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

      <ExpensesModalForm
        visible={visibleExpenses}
        setVisible={setVisibleExpenses}
      />
    </div>
  );
};

export default CabinetBoard;
