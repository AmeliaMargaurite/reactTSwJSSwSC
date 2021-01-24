import React from 'react'
import {StyledWrapperMain} from '../../Styles'

const Main = ({classes}) => {
console.log(classes)
    return (
        <StyledWrapperMain className={classes.main}>
            This is main content
            align to the left
        </StyledWrapperMain>
    )
}

export default Main
