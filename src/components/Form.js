import React from 'react';
import './Form.css';
//import {Link} from 'react-router-dom';

const Form = props => {

    let pcb = document.getElementById('pepperozzi');
    let mcb = document.getElementById('muchroom');
    let ocb = document.getElementById('octopus');
    let ecb = document.getElementById('entitlement');

    //console.log(props);

    const changeName = event => {
        props.setUserName(event.target.value);
    }

    const changeSize = event => {
        props.setPizzaSize(event.target.value);
    }

    const changeToppings = event => {

        const toppings = props.pizzaToppings;
        const index = toppings.includes(event.target.name)
    
        if (event.target.checked) { //checked
            toppings.push(event.target.name);
        }
        else { //unchecked
            toppings.splice(index);
        }

        props.setPizzaToppings(toppings);

    }

    const changeInstructions = event => {
        props.setPizzaInstructions(event.target.value);
        console.log(props.pizzaInstructions);
    }

    // just run val here since it's simple
    const onSubmit = event => {
        
        if (props.userName.length <= 2) {
            console.log(props.userName);
            return;
        }

        event.preventDefault()
        const newOrder = {orderKey: props.orderKey,
                          userName: props.userName,
                          pizzaSize: props.pizzaSize,
                          pizzaToppings: props.pizzaToppings,
                          pizzaInstructions: props.pizzaInstructions};

        console.log(props.pizzaOrders); //debugging

        //get order list, push new item to it
        const newOrderList = props.pizzaOrders;
        console.log(newOrderList);
        newOrderList.push(newOrder);

        console.log(newOrder); //debugging

        // add new order to order list
        props.setPizzaOrders(newOrderList);

        //reset values
        props.setUserName(props.initialValues.userName);
        props.setPizzaSize(props.initialValues.pizzaSize);
        props.setPizzaToppings(props.initialValues.pizzaToppings);
        props.setPizzaInstructions(props.initialValues.pizzaInstructions);

        //reset checkboxes
        pcb.checked = false;
        mcb.checked = false;
        ocb.checked = false;
        ecb.checked = false;

    }

    return (
        <div className='form-container'>
            <form>
                <p>Time to make a pizza!</p>
                <div className='userName-container'>
                    <label htmlFor='userName'>Name:</label>
                    <input type='text' name='userName' id='userName' value={props.userName} onChange={changeName}/>
                </div> 
                <div className='pizzaSize-container'>
                    <label htmlFor='pizzaSize'>Size:</label>
                    <select name='pizzaSize' id='pizzaSize' value={props.pizzaSize} onChange={changeSize}>
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
                            <input type='checkbox' name='pepperozzi' id='pepperozzi' onChange={changeToppings}/>
                            Pepperozzi
                        </label>
                        <label>
                            <input type='checkbox' name='muchroom' id='muchroom' onChange={changeToppings}/>
                            Muchroom
                        </label>
                        <label>
                            <input type='checkbox' name='octopus' id='octopus' onChange={changeToppings}/>
                            Octopus
                        </label>
                        <label>
                            <input type='checkbox' name='entitlement' id='entitlement' onChange={changeToppings}/>
                            A Sense of Entitlement
                        </label>
                    </div>
                </div>
                <div className='pizzaInstructions-container'>
                    <textarea name='pizzaInstructions' id='pizzaInstructions' rows='5' cols='50' onChange={changeInstructions} value={props.pizzaInstructions}></textarea>
                </div>
                <p className='submitButton' onClick={onSubmit}>Place your order!</p>
            </form>
        </div>
    )
}

export default Form;