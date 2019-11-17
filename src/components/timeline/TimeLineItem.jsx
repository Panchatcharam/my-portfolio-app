import React from "react";
import useStyles from "./TimeLineItemStyle"

// Reference:- https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
const TimeLineItem = ({data}) => {

    const classes = useStyles();

    return(
        <div className={classes.timeLineItem}>
            <div className={classes.timelineItemContent}>
                <span className={classes.tag} style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time className={classes.date}>{data.date}</time>
                <p>{data.company}</p>
                <p className={classes.title}>{data.title}</p>
                <ul>
                    {data.responsibility.map((responsibility,i) =>
                        <li key={i}>{responsibility}</li>
                    )}
                </ul>
                <p>{data.text}</p>
                {data.link && (
                    <a
                        href={data.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.text}
                    </a>
                )}
                <span className="circle" />
            </div>
        </div>
    );
};

export default TimeLineItem;