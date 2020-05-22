import React, {useState} from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Form from './Form';
import './Home.css';

const Home = props => {

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
                        pizzaOrders={props.pizzaOrders}
                        setPizzaOrders={props.setPizzaOrders}
                        initialValues={props.initialValues}/>
            </Route>
            <Route path='/'>
                <Link to='/pizza'><div>Get a Pizza!</div></Link>
            </Route>
          </Switch>
        </div>
      );
}

export default Home;