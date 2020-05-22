import React from 'react';
import {v4 as uuid} from 'uuid';
import './Orders.css';

const Order = props => {

    let modifiedInstructions = '';

    if (props.pizzaInstructions === 'Enter any additional instructions related to your sense of entitlement here!') {
        modifiedInstructions = 'None';
    }
    else {
        modifiedInstructions = props.pizzaInstructions;
    }

    return (
        <div className='order-container'>
            <p>Name: {props.userName}</p>
            <p>Size: {props.pizzaSize}</p>
            <p>Toppings:</p>
            {
                props.pizzaToppings.map(t => {
                    return (<p key={uuid()}>{t}</p>)
                })
            }
            <p>Special Instructions: {modifiedInstructions}</p>
        </div>
    )
}

export default Order;