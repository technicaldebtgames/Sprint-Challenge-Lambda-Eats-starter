import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Form = props => {
    return (
        <div className='form-container'>
            <p>Time to make a pizza!</p>
            <div className='userName-container'>
                <label for='userName'>Name:</label>
                <input type='text' name='userName' id='userName' value={props.userName}/>
            </div> 
            <div className='pizzaSize-container'>
                <label for='pizzaSize'>Size:</label>
                <select name='pizzaSize' id='pizzaSize'>
                    <option value=''>Select your pizza size</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra Large'>Extra Large</option>
                </select>
            </div>
            <div className='pizzaToppings-container'>
                <p>Select your toppings:</p>
                <div className='pizzaToppings-subcontainer'>
                    <label>
                        <input type='checkbox' name='pepperozzi' id='pepperozzi'/>
                        Pepperozzi
                    </label>
                    <label>
                        <input type='checkbox' name='muchroom' id='muchroom'/>
                        Muchroom
                    </label>
                    <label>
                        <input type='checkbox' name='octopus' id='octopus'/>
                        Octopus
                    </label>
                    <label>
                        <input type='checkbox' name='entitlement' id='entitlement'/>
                        A Sense of Entitlement
                    </label>
                </div>
            </div>
            <div className='pizzaInstructions-container'>
                <textarea name='pizzaInstructions' id='pizzaInstructions' rows='5' cols='50'>Enter any additional instructions related to your sense of entitlement here!</textarea>
            </div>
            <Link to='/'>Place your order!</Link>
        </div>
    )
}

export default Form;