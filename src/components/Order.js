import React from 'react';
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
            <p>Order #{props.orderKey}:</p>
            <p>Name: {props.userName}</p>
            <p>Size: {props.pizzaSize}</p>
            <p>Toppings:</p>
            {/* insert toppings through loop */}
            <p>Special Instructions: {modifiedInstructions}</p>
        </div>
    )
}

export default Order;