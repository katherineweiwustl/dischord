import styled from 'styled-components'

export const Container = styled('div')`
    height: 100vh; /* vh = viewport height */
    width: 80px;
    position: absolute; /* position is not relative to any othet component */
    left: 0; /* align to the left; 0 pixels away from left side */
    background-color: black;
    display: flex;
    justify-content: center;
    top: 0;

`;

export const StyledButton = styled('button')`
    border-radius: 50%;
    width: 70px;
    height: 70px;
    border: none;
    outline: none;
    margin-top: 10px;

`