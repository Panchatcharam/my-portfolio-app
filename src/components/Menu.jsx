import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import './Menu.css'
import ReactDOM from "react-dom";

const useStyles = makeStyles({
    avatar: {
        margin: 10,
    },
});

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
                <Avatar alt="Panch Sharp" src="/images/panch-avatar.jpeg" className={useStyles.avatar} />
                <Navbar.Brand href="#home" style={{marginLeft:12}}>Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#TimeLine">TimeLine</Nav.Link>
                    <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        );
    }
}

export default Menu;