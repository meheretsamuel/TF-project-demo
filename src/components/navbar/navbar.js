import React, { Fragment } from 'react';
import "./navbar-style.css"

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth';

import {FaTicketAlt} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'

import {
    Collapse, Navbar, Container,
    NavbarBrand,
    Nav, NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavBar = ({auth: {isAuthenticated, loading}, logout}) => {

    const authLinks = (
        <Nav className="ml-auto" navbar>
  
            <NavItem>
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </NavItem> 
            <NavItem>
                <NavLink className="nav-link" href="/Packages#packages">Packages</NavLink>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/tutorial">About</Link>
            </NavItem>
            <NavItem>
                <Link onClick={logout} className="nav-link" to="#!" > <BiLogOut/>Log Out</Link>
            </NavItem>
        </Nav>
    )

    const guestLinks = (
        <Nav className="ml-auto" navbar>

            {/* <NavItem>
                <Link className="nav-link" to="/events">Events</Link>
            </NavItem> */}
            <NavItem>
                <NavLink className="nav-link" href="/Packages#packages">Packages</NavLink>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/tutorial">About</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/register">Register</Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/login">Log In</Link>
            </NavItem>
        </Nav>
    )

    return (
        <Container className="nav-container">
            <Navbar color="light" light expand="md" fixed="top">
                <NavbarBrand className="tf-icon" href="/"> Ticket Funnel </NavbarBrand>
                <Collapse navbar className="justify-content-end right" offset="1">
                    {!loading && (isAuthenticated? authLinks : guestLinks )}

                </Collapse>
            </Navbar>
        </Container>
    );
}

NavBar.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect (mapStateToProps, {logout}) (NavBar);