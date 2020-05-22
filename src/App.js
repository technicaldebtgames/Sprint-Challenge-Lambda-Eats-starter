import React, {useState} from "react";
import Home from "./components/Home";
import Orders from "./components/Orders";
import "./App.css";

const App = () => {

  const initialValues = {
    userName: '',
    pizzaSize: '',
    pizzaToppings: [],
    pizzaInstructions: '',
    orderKey: ''
  }

  const [userName, setUserName] = useState();
  const [pizzaSize, setPizzaSize] = useState();
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [pizzaInstructions, setPizzaInstructions] = useState();
  const [orderKey, setOrderKey] = useState();
  const [pizzaOrders, setPizzaOrders] = useState([])

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
            orderKey={orderKey}
            setOrderKey={setOrderKey}
            initialValues={initialValues}/>
      <Orders pizzaOrders={pizzaOrders}/>
    </div>
  );
};
export default App;
