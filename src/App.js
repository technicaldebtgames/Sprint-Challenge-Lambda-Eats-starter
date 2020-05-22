import React, {useState} from "react";
import Home from "./components/Home";

const App = () => {

  const [userName, setUserName] = useState();
  const [pizzaSize, setPizzaSize] = useState();
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [pizzaInstructions, setPizzaInstructions] = useState();

  return (
    <div>
      <Home userName={userName} 
            setUserName={setUserName}
            pizzaSize={pizzaSize} 
            setPizzaSize={setPizzaSize}
            pizzaToppings={pizzaToppings}
            setPizzaToppings={setPizzaToppings}
            pizzaInstructions={pizzaInstructions}
            setPizzaInstructions={setPizzaInstructions}/>
    </div>
  );
};
export default App;
