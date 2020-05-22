import React, {useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Form from './Form';
import './Home.css';

const Home = props => {

    const [nextOrderNumber, setNextOrderNumber] = useState(0);

    const incrementOrder = () => {
        setNextOrderNumber(nextOrderNumber + 1);
    }

    /*const onInputChangeWithValidation = event => {
        const [name] = event.target;
        const [value] = event.value;
        //add validation, disable link or button for placing order if fail, if not, enable
    }*/

    // just run val here since it's simple
    const onSubmit = event => {

        if (props.userName.length <= 2) {
            //enable an error message
            return;
        }

        //disable error message

        event.preventDefault()
        const newOrder = {orderKey: props.orderKey,
                          userName: props.userName,
                          pizzaSize: props.pizzaSize,
                          pizzaToppings: props.pizzaToppings,
                          pizzaInstructions: props.pizzaInstructions};

        // increment the order number now that its placed
        incrementOrder();

        const newOrderList = props.pizzaOrders;
        newOrderList.push(newOrder);

        // add new order to order list
        props.setPizzaOrders(newOrderList);

        //reset values
        props.setUserName(props.initialValues.userName);
        props.setPizzaSize(props.initialValues.pizzaSize);
        props.setPizzaToppings(props.initialValues.pizzaToppings);
        props.setPizzaInstructions(props.initialValues.pizzaInstructions);
    }

    return (
        <div className='home-container'>
          <h1>Lambda Eats</h1>
          <p>We give you the ingredients, you cook the pizza!</p>
          <Link to='/'><div>Home</div></Link>
          <Switch>
            <Route path='/pizza'>
                <Form   userName={props.userName} 
                        setUserName={props.setUserName}
                        pizzaSize={props.pizzaSize} 
                        setPizzaSize={props.setPizzaSize}
                        pizzaToppings={props.pizzaToppings}
                        setPizzaToppings={props.setPizzaToppings}
                        pizzaInstructions={props.pizzaInstructions}
                        setPizzaInstructions={props.setPizzaInstructions}
                        onSubmit={onSubmit}/>
            </Route>
            <Route path='/'>
                <Link to='/pizza'><div>Get a Pizza!</div></Link>
            </Route>
          </Switch>
        </div>
      );
}

export default Home;