import React, {useState} from 'react';
import {Formik , Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';
import Styled from 'styled-components';
import NewPage from './newPage';
import  {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const notify = () =>{
    toast.success('Successfully Added');
}



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
        setResult([...result, values])
        setShow(true)
    };
    return (
        <div className="container ">
            <div className='row'>
                <div className=' text-centre mx-auto my-5  '>
                    <h2>Job Registration Portal</h2>
                </div>
            </div>
            <div className="row ">
            <div className="col-md-6  col-sm-10 mx-auto my-2 "> 
        <DivWrapper className='card'> 
        <div className='card-body'> 
        <Formik
        initialValues = {initialValues} 
        validationSchema = {validationSchema}
        onSubmit = {onSubmit}  >
        { formik => {
            return (<Form>
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
            <div className='form-group-file'>
                <label htmlFor='file'>Upload CV</label>
                <input type='file' className='form-control-file' name='file' id='file'/>
            </div>
            
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

                <button type='submit' onClick={notify} >
                    Submit
                </button>
            </Form> );

        }
          }
        </Formik>
        </div>
        </DivWrapper> 
        </div>
        </div>
          { show && result.map(res => {
            return <NewPage 
            id={res.email}
            email={res.email} 
            companyName={res.companyName}
            companyAddress = {res.companyAddress}
            companyContactNo = {res.companyContactNo}
            jobTittle = {res.jobTittle}
            jobRole = {res.jobRole}
            phone = {res.contactNo} />
        })}
             
        
        </div>
        
        
    )

  
    
}
const DivWrapper = Styled.div`
box-shadow: 10px 10px 8px 10px #888888;
padding: 0.5rem;
`;

export default HrPage;
