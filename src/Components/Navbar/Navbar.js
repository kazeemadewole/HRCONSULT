import React from 'react';
import styled from 'styled-components';


function Navbar() {
    
    return (
        <React.Fragment>
            <NavWrapper className="navbar bg-dark text-white">
                <h3 className='text-centre mx-auto'>HR CONSULT LIMITED</h3>
                
            </NavWrapper>
        </React.Fragment>
    )
}
const NavWrapper = styled.nav`
background: #030226 !important ;
`;


export default Navbar;
