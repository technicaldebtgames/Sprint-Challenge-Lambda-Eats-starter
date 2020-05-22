import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Form = props => {
    return (
        <div>
            <p>This is a form.</p>
            <Link to='/'>Close this Form!</Link>
        </div>
    )
}

export default Form;