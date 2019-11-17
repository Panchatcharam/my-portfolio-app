import React from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'

const ContactForm = () => {

    return(
        <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Name" />
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ContactForm;