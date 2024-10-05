import { useEffect, useState,  } from "react";
import { db, onSnapshot, doc } from "../../../services/firebase";
import { useAuth } from "../../../context/AuthContext";
import "./index.css";

const Card = () => {
  const { userId } = useAuth();
  const [cardData, setCardData] = useState({});

  useEffect(() => {  
    const ref = doc(db, "registerUsers", userId);
    const unsubscribe = onSnapshot(ref, (docSnapshot) => {
      const card = docSnapshot.data().card;
      if(card){
        const { cardNumber, cardValidity, cardHolder } = card;
        setCardData({
          cardNumber: cardNumber,
          cardValidity: cardValidity,
          cardHolder: cardHolder,
        });
      }
      
    });
 
    return () => unsubscribe();
  }, [userId]);

  const changeFormat = (cardNumber) => {
    let result = [];
    for (let i = 0; i < cardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        result.push(" ");
      }
      result.push(cardNumber[i]);
    }
    return result.join("");
  };

  return (
    <div className="card">
      <div className="visa">VISA</div>
      <div className="text">{cardData.cardNumber ? changeFormat(cardData.cardNumber) : "0000 0000 0000 0000"}</div>
      <div className="footer">
        <div className="cardHolder">{ cardData.cardHolder ? cardData.cardHolder : "Name Surname"}</div>
        <div className="term">{cardData.cardValidity ? cardData.cardValidity : "00/00"}</div>
      </div>
    </div>
  );
};

export default Card;