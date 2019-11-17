import React from "react"
import Container from "react-bootstrap/Container"
import timeLineData from "./TimeLineData"
import TimeLineItem from "./TimeLineItem"
import useStyles from "./TimeLineStyle"

const TimeLine = () => {

    const classes = useStyles();

    return(
        timeLineData.data.length > 0 && (
            <Container fluid={true} id="timeline">
                <div className={classes.timeLineTitle}>
                    <h1>TimeLine</h1>
                </div>
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