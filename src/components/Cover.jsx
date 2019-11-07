import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {makeStyles} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Spinner from 'react-bootstrap/Spinner'

const useStyles = makeStyles({
    itemSize: {
        width: '100%',
        height: '100%',
        '& $h1': {
            display: 'inline-flex'
        }
    },
    avatar: {
        margin: 10,
    }
});

const Cover = () => {

    const classes = useStyles();

    return(
        <Container fluid={true}>
            <div>
                <Row noGutters={true}>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Image  className={classes.itemSize} src="images/panch.png" square/>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Jumbotron className={classes.itemSize}>
                            <h1>Hello! <Avatar alt="Vanakkam" src="/images/vanakkam.jpg" className={useStyles.avatar} />  Welcome to my portfolio!</h1>
                            <p>
                                I'm a software engineer and have <b>13+ years</b> of software development experience from various
                                industries which includes but not limited to Automotive/Medical devices/Casino/Industrial Automation and travel industry.
                                Have good hands on experience with programming languages such as <b>C, C++, Java and, Javascript</b> <Spinner animation="grow" variant="success" />
                            </p>
                            <p>
                                <Button variant="primary">Learn more</Button>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Cover;