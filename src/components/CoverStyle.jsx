import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles({

    cover: {
        height: '88vh',
    },
    image: {
        backgroundImage: 'url("/images/panch-run.jpeg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '88vh',
        width: '100%',
        overflow: 'hidden'
    },
    itemSize: {
        width: '100%',
        height: '88vh',
        fontFamily: 'fa5-proxima-nova,"Helvetica Neue",Helvetica,Arial,sans-serif',
        color: 'rgb(236, 239, 241)',
        backgroundColor: '#e1f5fe',
        '& $h1': {
            display: 'inline-flex',
            fontSize: '4rem',
            letterSpacing: '-2px',
            textShadow: '4px 3px 0 #fff, 9px 8px 0 rgba(0,0,0,0.15)',
            fontWeight: 520,
            color: '#1565c0'
        }
    },
    avatar: {
        margin: 10
    },
    socialIcon: {
        fontSize: 30,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '0 auto',
        width: '20%',
    },
    gitHub: {
        color: '#000000',
    },
    linkedIn: {
        color: '#01579b',
    },
    stackOverflow: {
        color: '#f4511e',
    },
    downloadButton: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& .Button': {
            color: '#000'
        }
    },
    mailIcon: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'left',
        paddingLeft: 10
    },
    animateText: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: 100,
        flexFlow: 'column nowrap',
        alignItems: 'center',
        color: '#000',
        lineHeight: 37.5,
        fontSize: '4rem'
    },
    coverTitle: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    description: {
        color: '#004d40',
        fontSize: '20px',
        letterSpacing: '1px',
        fontWeight: 900
    }
});

export default useStyles;