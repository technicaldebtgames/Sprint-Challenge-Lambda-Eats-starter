import React from 'react';
import Order from './Order';
import { v4 as uuid } from 'uuid';
import './Orders.css';

const Orders = props => {
    return (
        <div className='orders-container'>
            <p>Orders:</p>
            {
                props.pizzaOrders.map(o => {
                    return (
                    <Order key={uuid()}
                           userName={o.userName}
                           pizzaSize={o.pizzaSize}
                           pizzaToppings={o.pizzaToppings}
                           pizzaInstructions={o.pizzaInstructions}/>)
                })
            }
        </div>
    )
}

export default Orders;