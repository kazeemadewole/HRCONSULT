import React from 'react';

function newPage(props) {
    return (
    <React.Fragment>
        <div className= 'row' >
            <div className='col-md-6 col-sm-10 mx-auto my-2 card'>
                <div className=' card-body'>
            
                    <h3>{props.email}</h3>
                    <p className='text-muted' >{props.phone}</p>
                    <h3>Work Experience</h3>
                    <p>Cv Received</p>
                    <hr />
                    <div className='d-flex text-center'>
                        <div className='col-4'> Employer Name</div>
                        <div className='col-6'>{props.companyName}</div>

                    </div>
                    <div className='d-flex text-center'>
                        <div className='col-4'>Employer Address</div>
                        <div className='col-6'><p> {props.companyAddress}</p></div>

                    </div>
                    <div className='d-flex text-center'>
                        <div className='col-4'>Employer phone number</div>
                        <div className='col-6'>{props.companyContactNo}</div>

                    </div>
                    <div className='d-flex text-center'>
                        <div className='col-4'>Job Title</div>
                        <div className='col-6'>{props.jobTittle}</div>

                    </div>
                    <div className='d-flex text-center'>
                        <div className='col-4'>Job Role</div>
                        <div className='col-6'>{props.jobRole}</div>

                    </div>
            
</div>
        </div>
        </div>
        </React.Fragment>
    )
}

export default newPage;
