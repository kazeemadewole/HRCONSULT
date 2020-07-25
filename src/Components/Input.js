import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';


const Input = (props) => {
    const {label, name, ...rest} = props;
    return (
        <React.Fragment>
        <div className= 'form-group'>
            <label htmlFor={name}>{label}</label>
            <Field 
                name={name} 
                id={name} 
                {...rest}  
                className='form-control' />
            <ErrorMessage name={name} component={TextError} />
        </div>
        </React.Fragment>
    )
}

export default Input;
