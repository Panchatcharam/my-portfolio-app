import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    timelineContainer : {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundImage: 'url("/images/timeline-bg-2.png")',
        fontFamily: 'museo-slab,Georgia,"Times New Roman",Times,serif',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontWeight: 500,
        fontSize: '1rem',
        letterSpacing: '1px',
        '&:after': {
            backgroundColor: '#b71c1c',
            content: '" "',
            position: 'absolute',
            left: 'calc(50% - 2px)',
            width: 10,
            height: '100%',
        }
    },
    timeLineTitle: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
        fontFamily: 'museo-slab,Georgia,"Times New Roman",Times,serif',
        color: '#000',
        letterSpacing: '1px',
        // backgroundColor: '#03a9f4'
    }
});

export default useStyles;