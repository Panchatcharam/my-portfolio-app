import React from "react";
import Container from "react-bootstrap/Container";
import timeLineData from "./TimeLineData"
import {makeStyles} from "@material-ui/core";
import TimeLineItem from "./TimeLineItem";

const useStyles = makeStyles({
    timelineContainer : {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        margin: '40px 0',
        backgroundColor: '#cfd8dc',
        '&:after': {
            backgroundColor: '#b71c1c',
            content: '" "',
            position: 'absolute',
            left: 'calc(50% - 2px)',
            width: 10,
            height: '100%',
        }
    }
});

const TimeLine = () => {

    const classes = useStyles();

    return(
        timeLineData.data.length > 0 && (
            <Container fluid={true}>
                <div className={classes.timelineContainer}>
                    {timeLineData.data.map((data, idx) => (
                        <TimeLineItem data={data} key={idx} />
                    ))}
                </div>
            </Container>
        )
    );
};

export default TimeLine;