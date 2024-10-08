import { useEffect, useState } from "react";
import {
  db,
  collection,
  query,
  where,
  onSnapshot,
  deleteDoc, 
  doc
} from "../../../services/firebase";
import { useAuth } from "../../../context/AuthContext";
import { Button } from "antd";
import "./index.css";

const StoryLayout = () => {
  const { userId } = useAuth();
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const q = query(
      collection(db, "expensesData"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const expensesList = querySnapshot.docs.map((doc) => doc.data());
        setExpenses(expensesList);
      },
      (error) => {
        console.error("Error", error);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  const handleDelete = async (id) => {
  try{
    await deleteDoc(doc(db, "expensesData", id));
    console.log("successfull deleted");    
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
