import styled, {css} from 'styled-components';

export const Title = styled.h1`
    font-size: 5rem;
    color: ${props => props.primary ? "red" : "black"};
    border-color: ${props => props.primary ? "red" : "black"};
    border-width: 2px;
    border-radius: 10px;
    border-style: solid;
    padding: 1rem;
    display: block;

    &:hover {
        background: ${props => props.primary ? "red" : "black"};
        color: white;
        /* border-color: pink; */
    }

    ${props => props.none ? css`
        color: "initial";
    ` : css`
        color: "inherit";
    `
    }
`