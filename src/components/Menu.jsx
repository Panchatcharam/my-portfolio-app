import React from 'react';
import {Navbar, Nav, NavItem, Button, Form, FormControl} from 'react-bootstrap'
import ReactDOM from "react-dom";
import { Link, NavLink } from "react-router-dom"

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.handleResize = this.handleResize.bind(this);
    }

    handleResize(e = null) {
        document.body.style.paddingTop = ReactDOM.findDOMNode(this._navbar).offsetHeight + 10 + "px";
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {

        return(
            <Navbar style={{fontWeight:"bold"}} fixed="top" bg="primary" variant="dark" ref={(e) => this._navbar = e}>
                <Navbar.Brand as={Link} to='/' style={{marginLeft:12}}> Home </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to='/timeline'>TimeLine</Nav.Link>
                    <Nav.Link as={NavLink} to='/contact'>Contact</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;
//<Form inline>
//    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//    <Button variant="outline-info">Search</Button>
//</Form>