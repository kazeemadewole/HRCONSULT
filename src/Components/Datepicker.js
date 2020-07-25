import React from 'react';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, ErrorMessage} from 'formik';
import TextError from './TextError';


function Datepicker(props) {
    const {label, name, ...rest} = props;
    const CustomInputComponent = ({form, field}) => {
        const {setFieldValue} = form;
        const {value} = field;
        return <DateView id={name} {...field} {...rest} selected={value} onChange= {
            val => setFieldValue(name,val)} />
        }
    return (
        <React.Fragment>
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
           <Field name={name} component={CustomInputComponent} />
           
                    
            
            <ErrorMessage name={name} component={TextError} />
            
        </div>
        </React.Fragment>
    )
}

export default Datepicker;


