import { useEffect, useState } from "react";
import { db,  collection, query, where, onSnapshot} from "../../../services/firebase";
import { useAuth } from "../../../context/AuthContext";
import "./index.css";




const StoryLayout = () => {
const { userId } = useAuth();
const [ expenses, setExpenses ] = useState([]);
useEffect(() => {
  const q = query(collection(db, "expensesData"), where("userId", "==", userId));

  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const expensesList = querySnapshot.docs.map(doc => doc.data());
    setExpenses(expensesList); 
  }, (error) => {
    console.error("Ошибка при получении данных: ", error);
  });

  return () => unsubscribe();
}, [userId]);
  return (
    <div className="story">   
      <h3 style={{ color: "#5dae9b" }}>Spending history</h3>
      {expenses.map((item) => {
      return(
        <div className="block">
        <p style={{ color: "black" }}>{item.date ? item.date : ""}</p>
        <p style={{ color: "red", fontSize: "18px" }}>-{item.sum ? item.sum : ""}</p>
        <p style={{ color: "#5dae9b" }}>Purpose: {item.category ? item.category : ""}</p>
      </div>
      )
    })}     
    </div>
  );
};

export default StoryLayout;
