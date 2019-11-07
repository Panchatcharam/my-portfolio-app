import React from "react";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({

    timeLineItem: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: 30,
        position: 'relative',
        margin: '10px 0',
        width: '50%',
        '&:nth-child(odd)': {
            alignSelf: 'flex-end',
            justifyContent: 'flex-start',
            paddingLeft: 30,
            paddingRight: 0,
            '& $timelineItemContent': {
                textAlign: 'left',
                alignItems: 'flex-start',
                '&:after': {
                    right: 'auto',
                    left: -7.5,
                    boxShadow: '-1px 1px 1px rgba(0, 0, 0, 0.2)',
                },
                '& $tag': {
                    left: 'auto',
                    right: 5
                },
                '& .circle': {
                    right: 'auto',
                    left: -40,
                }
            }
        }
    },
    timelineItemContent: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
        borderRadius: '5px',
        backgroundColor: '#ffcc80',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: 15,
        position: 'relative',
        width: 700,
        maxWidth: '70%',
        textAlign: 'left',
        '&:after': {
            content: '" "',
            backgroundColor:'#ffcc80',
            boxShadow: '1px -1px 1px rgba(0, 0, 0, 0.2)',
            position: 'absolute',
            right: -7.5,
            top: 'calc(50% - 7.5px)',
            transform: 'rotate(45deg)',
            width: 15,
            height: 15,
        },
        '& $tag': {
            color: '#fff',
            fontSize: 12,
            fontWeight: 'bold',
            top: 5,
            left: 5,
            letterSpacing: 1,
            padding: 5,
            position: 'absolute',
            textTransform: 'uppercase'
        },
        '& .time': {
            color: '#777',
            fontSize: 12,
            fontWeight: 'bold'
        },
        '& .p': {
            fontSize: 16,
            lineHeight: 24,
            margin: '15px 0',
            maxWidth: 250
        },
        '& .a': {
            fontSize: 14,
            fontWeight: 'bold',
            '&:after': {
                content: '"►"',
                fontSize: 12
            }
        },
        '& .circle': {
            backgroundColor: '#fff',
            border: '3px solid #e17b77',
            borderRadius: '50%',
            position: 'absolute',
            top: 'calc(50% - 10px)',
            right: -45,
            width: 25,
            height: 25,
            zIndex: 100
        }
    },
    '@media only screen and (min-width: 1023px)': {
        '$timelineItemContent': {
            maxWidth: '100%'
        }
    },
    '@media only screen and (min-width: 767px)': {
        '$timelineItemContent, $timeLineItem &:nth-child(odd) $timelineItemContent': {
            padding: '15px 10px',
            textAlign: 'center',
            alignItems: 'center'
        },
        '$timelineItemContent $tag': {
            width: 'calc(100% - 10px)',
            textAlign: 'center'
        },
        '$timelineItemContent & .time': {
            marginTop: 20
        },
        '$timelineItemContent & .a': {
            textDecoration: 'underline'
        },
        '$timelineItemContent & .a &:after': {
            display: 'none'
        }
    },
    tag: {
    }
});

// Reference:- https://www.florin-pop.com/blog/2019/04/how-to-create-a-timeline-with-react/
const TimeLineItem = ({data}) => {

    const classes = useStyles();

    return(
        <div className={classes.timeLineItem}>
            <div className={classes.timelineItemContent}>
                <span className={classes.tag} style={{ background: data.category.color }}>
                    {data.category.tag}
                </span>
                <time>{data.date}</time>
                <p>{data.company}</p>
                <p>{data.title}</p>
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