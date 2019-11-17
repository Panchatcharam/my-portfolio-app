import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Jumbotron, Button} from 'react-bootstrap'
import Avatar from "@material-ui/core/Avatar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin, faStackOverflow} from "@fortawesome/free-brands-svg-icons"
import {faCoffee, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { fadeIn } from 'react-animations'
import styled, {keyframes} from 'styled-components'
import useStyles from "./CoverStyle"

const Cover = () => {
    const classes = useStyles();
    const [index, setIndex] = useState(true);
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(index => index === false);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const FadeInUp = styled.div`animation: 2s ${keyframes`${fadeIn}`}`;

    return(
        <Container fluid={true} >
            <div className={classes.cover}>
                <Row noGutters={true}>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <div className={classes.image}/>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Jumbotron className={classes.itemSize}>
                            <div className={classes.coverTitle}>
                                <h1>Hello! Welcome<Avatar alt="Vanakkam" src="/images/vanakkam.jpg" className={useStyles.avatar} /></h1>
                            </div>
                            <hr/>
                            <div>
                                <div className={classes.animateText}>
                                    {index ?
                                        <FadeInUp>
                                          <h2 className={classes.coverTitle}>I'm Panchatcharam Murugesan <Avatar alt="Panch Sharp" src="/images/panch-avatar.jpeg" className={useStyles.avatar} /></h2>
                                        </FadeInUp>
                                        :
                                        <FadeInUp>
                                          <h2>Love Programming and <FontAwesomeIcon icon={faCoffee} size="sm"/></h2>
                                        </FadeInUp>
                                    }
                                </div>
                                <hr/>
                                <div className={classes.description}>
                                    <p>
                                        A Software engineer by profession and have <b>14+ years</b> of software development experience from various
                                        industries which includes but not limited to Automotive/Medical devices/Casino/Industrial Automation and travel industry.
                                        Have good hands on experience with programming languages such as <b>C, C++, Java and, Javascript</b>
                                    </p>
                                </div>
                                <hr/>
                                <div className={classes.socialIcon}>
                                    <div><FontAwesomeIcon className={classes.gitHub} icon={faGithub} size="lg"/></div>
                                    <div><FontAwesomeIcon className={classes.linkedIn} icon={faLinkedin} size="lg"/></div>
                                    <div><FontAwesomeIcon className={classes.stackOverflow} icon={faStackOverflow} size="lg"/></div>
                                </div>
                                <hr/>
                                <div className={classes.downloadButton}>
                                    <Button variant="primary" size={"lg"}>Download CV</Button>
                                </div>
                            </div>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Cover;