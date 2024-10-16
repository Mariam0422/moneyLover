
import {
  db,
  deleteDoc, 
  doc,
  arrayRemove,
  updateDoc
} from "../../../services/firebase";
import { useAuth } from "../../../context/AuthContext";
import { Button } from "antd";
import "./index.css";
import { useExpenses } from "../../../context/ExpensesContext";

const StoryLayout = () => {
  const { userId } = useAuth();
  const { expenses } = useExpenses();
 console.log(expenses, "expenses");
 
  const handleDelete = async (id) => {
  try{
    await deleteDoc(doc(db, "expensesData", id));
    const userDocRef = doc(db, "registerUsers", userId);
    await updateDoc(userDocRef, {
      buy: arrayRemove(id)
    })
      
  }
  catch{
   console.log("error");
   
  }
  }
  return (
    <div className="story">
      <h3 style={{ color: "#5dae9b" }}>Spending history</h3>
      {expenses.map((item) => {
        return (
          <div className="block" key={item.key}>
            <div className="btnRemove">
              <Button ghost size="small" onClick={() => {handleDelete(item.key)}}>X</Button>
            </div>
            <div>
              <p style={{ color: "black" }}>{item.date ? item.date : ""}</p>
              <p style={{ color: "red", fontSize: "18px" }}>
                -{item.sum ? item.sum : ""}
              </p>
              <p style={{ color: "#5dae9b" }}>
                <span style={{ color: "black" }}>Purpose:</span>{" "}
                {item.category ? item.category : ""}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StoryLayout;
