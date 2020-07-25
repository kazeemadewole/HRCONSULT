import React from 'react';
import {Field, ErrorMessage} from 'formik';
import TextError from './TextError';


function Textarea(props) {
    const {label,name, ...rest} = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field 
                as='textarea' 
                name={name} 
                id={name} 
                {...rest} 
                className='form-control' />
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Textarea;
