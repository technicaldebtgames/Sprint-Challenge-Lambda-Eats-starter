import React, {useState} from "react";
import Home from "./components/Home";
import Orders from "./components/Orders";
import "./App.css";

const App = () => {

  const initialValues = {
    userName: '',
    pizzaSize: '',
    pizzaToppings: [],
    pizzaInstructions: 'Enter any additional instructions related to your sense of entitlement here!'
  }

  const [userName, setUserName] = useState(initialValues.userName);
  const [pizzaSize, setPizzaSize] = useState(initialValues.pizzaSize);
  const [pizzaToppings, setPizzaToppings] = useState(initialValues.pizzaToppings);
  const [pizzaInstructions, setPizzaInstructions] = useState(initialValues.pizzaInstructions);
  const [pizzaOrders, setPizzaOrders] = useState([]);

  return (
    <div className="App">
      <Home userName={userName} 
            setUserName={setUserName}
            pizzaSize={pizzaSize} 
            setPizzaSize={setPizzaSize}
            pizzaToppings={pizzaToppings}
            setPizzaToppings={setPizzaToppings}
            pizzaInstructions={pizzaInstructions}
            setPizzaInstructions={setPizzaInstructions}
            pizzaOrders={pizzaOrders}
            setPizzaOrders={setPizzaOrders}
            initialValues={initialValues}/>
      <Orders pizzaOrders={pizzaOrders}/>
    </div>
  );
};
export default App;
