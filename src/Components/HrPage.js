import React, {useState} from 'react';
import {Formik , Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Styled from 'styled-components';

const HrPage = ()  => {
    const [result, setResult] = useState([]);
    const [show, setShow] = useState(false);
    
    const initialValues = {
        fullname : '',
        address : '',
        contactNo : '',
        email : '',
        companyName : '',
        companyAddress : '',
        companyContactNo : '',
        jobTittle : '',
        jobRole : '',
        dateFrom: null,
        dateTo: null,
    }

    const validationSchema = Yup.object({
        fullname : Yup.string().required('Required'),
        address : Yup.string().required('Required'),
        contactNo : Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email').required('Required'),
        companyName : Yup.string().required('Required'),
        companyAddress : Yup.string().required('Required'),
        companyContactNo : Yup.string().required('Required'),
        jobTittle : Yup.string().required('Required'),
        jobRole : Yup.string().required('Required'),
        dateFrom : Yup.string().required('Required')

    })

    const onSubmit = values => {
  
        setResult(values);
        setShow(true);
        console.log(result.email);
    }
    const displayResult = (<div>
    <h3>{result.email}</h3>
    <h3>Work Experience</h3>
    <hr />
    <div className='d-flex text-center'>
        <div className='col-4'> Employer Name</div>
        <div className='col-6'>{result.companyName}</div>

    </div>
    <div className='d-flex text-center'>
        <div className='col-4'>Employer Address</div>
        <div className='col-6'><p> {result.companyAddress}</p></div>

    </div>
    <div className='d-flex text-center'>
        <div className='col-4'>Employer phone number</div>
        <div className='col-6'>{result.companyContactNo}</div>

    </div>
    <div className='d-flex text-center'>
        <div className='col-4'>Job Title</div>
        <div className='col-6'>{result.jobTittle}</div>

    </div>
    <div className='d-flex text-center'>
        <div className='col-4'>Job Role</div>
        <div className='col-6'>{result.jobRole}</div>

    </div>
    
</div>)

    return (
        <div className="container ">
            <div className='row'>
                <div className=' text-centre mx-auto my-5  '>
                    <h2>Job Registration Portal</h2>
                </div>
            </div>
            <div className="row ">
            <div className="col-md-6  col-sm-8 mx-auto my-2 "> 
        <DivWrapper className='card'> 
        <div className='card-body'> 
        <Formik
        initialValues = {initialValues} 
        validationSchema = {validationSchema}
        onSubmit = {onSubmit} >
        { formik => {
            return <Form>
                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Fullname'
                    name = 'fullname'
                    />

                <FormikControl 
                    control='textarea'
                    label = 'Address'
                    name = 'address'
                    />

                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Phone Number'
                    name = 'contactNo'
                    />

                <FormikControl 
                    control='input'
                    type = 'email'
                    label = 'Email Address'
                    name = 'email'
                    />

            <input type='file' className='form-control-file' name='file' />
            <div><h3>Work Experience</h3></div>

                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Company Name'
                    name = 'companyName'
                    />

                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Company Address'
                    name = 'companyAddress'
                    />

                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Company Contact Number'
                    name = 'companyContactNo'
                    />

                <FormikControl 
                    control='input'
                    type = 'input'
                    label = 'Job Tittle'
                    name = 'jobTittle'
                    />

                <FormikControl 
                    control='textarea'
                    label = 'Job Role'
                    name = 'jobRole'
                    />

                <FormikControl 
                    control='date'
                    label = 'Date: From'
                    name = 'dateFrom'
                    />

                <FormikControl 
                    control='date'
                    label = 'Date: To'
                    name = 'dateTo'
                    />

                <button type='submit'  >
                    Submit
                </button>
            </Form>

        }  }

        </Formik>
        </div>
        </DivWrapper> 
        </div>
        </div>
        <div className='col-md-6 mx-auto card'>
            <div className=' card-body'>
            { show && displayResult}
                </div>  </div>
        
        </div>
        
        
    )

  
    
}
const DivWrapper = Styled.div`
box-shadow: 10px 10px 8px 10px #888888;
padding: 0.5rem;
`;

export default HrPage;
