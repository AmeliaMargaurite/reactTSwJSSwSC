import React from 'react';
import {Title, PageWrapper} from '../../Styles'
import Main from '../Main'
import Insight from '../Insight'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    main: {
        background: "red",
        '&::before': {
                content: '"hi"',
                position: "absolute",
                width: "2rem",
                height: "2rem",
                background: "green",
                borderRadius: "50%"
            }
        },
    wrapper: {
        background: "yellow",
        padding: "2rem"
    },
    title: {
        color: "blue"
    }
})

const Body = () => {

    const classes = useStyles();

    return (
        <div>
            <Title className={classes.title} primary>Hello World</Title>
            <Title className={classes.title}>Hello World</Title>
            <Title className={classes.title} none>This is not blue because it takes the colour from Headings.js</Title>
            <PageWrapper className={classes.wrapper}>
                <Main classes={classes}></Main>
                <Insight ></Insight>
            </PageWrapper>
        </div>
    )
}

export default Body
