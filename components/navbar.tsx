import React, { useState } from 'react'; 
import {
    Navbar, 
    Nav, 
    NavItem, 
    NavbarBrand,
    NavLink,
} from "shards-react"; 

const NavBar = (() => {
    return (
        <div>
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="#">abidrais.pro</NavbarBrand>

                <Nav navbar>
                    <NavItem>
                        <NavLink href="/">
                            Home
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/workExperience">
                            Work Experience
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink href="/Projects">
                            Projects
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink disabled>
                            Resume
                        </NavLink>
                        
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
})

export default NavBar; 