import React from 'react';
import {Title, PageWrapper} from '../../Styles'
import Main from '../Main'
import Insight from '../Insight'

const Body = () => {
    return (
        <div>
            <Title primary>Hello World</Title>
            <PageWrapper>
                <Main></Main>
                <Insight></Insight>
            </PageWrapper>
        </div>
    )
}

export default Body
