 import "./index.css";

 const StoryLayout = () => {
    return ( 
        <div className="story">
            <h3 style={{color: "#5dae9b"}}>Spending history</h3>
         <div className="block">
            <p style={{color:"black"}}>06-10-24</p>
            <p style={{color: "red", fontSize: "18px"}}>-5000</p>
            <p style={{color: "#5dae9b"}}>Purpose: Phone Bill</p>
         </div>
        </div>
     );
 }
  
 export default StoryLayout;