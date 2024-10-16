import { createContext, useState, useContext, useEffect } from "react";
import { db, collection, query, where, onSnapshot } from "../services/firebase";
import { useAuth } from "./AuthContext";

const ExpensesContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const { userId } = useAuth();

  useEffect(() => {
    if(!userId) return;

    const q = query(collection(db, "expensesData"), where ("userId", "==", userId));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const expensesList = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        key: doc.id
      }))
      setExpenses(expensesList)
    });
    return () => unsubscribe();
  }, [userId])

  return (
    <ExpensesContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpensesContext);
