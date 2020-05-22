import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Form from './Form';

const Home = props => {
    return (
        <div>
          <h1>Lambda Eats</h1>
          <p>We give you the ingredients, you cook the pizza!</p>
          <Switch>
            <Route path='/pizza'>
                <Form userName={props.userName} 
            setUserName={props.setUserName}
            pizzaSize={props.pizzaSize} 
            setPizzaSize={props.setPizzaSize}
            pizzaToppings={props.pizzaToppings}
            setPizzaToppings={props.setPizzaToppings}
            pizzaInstructions={props.pizzaInstructions}
            setPizzaInstructions={props.setPizzaInstructions}/>
            </Route>
            <Route path='/'>

            </Route>
          </Switch>
        </div>
      );
}

export default Home;