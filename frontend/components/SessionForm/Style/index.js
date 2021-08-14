import styled from 'styled-components'

export const OuterContainer = styled('div')`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;    
    background: rgba(0, 0, 0, .7);
    z-index: 9999;
`

export const InnerContainer = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
export const StyledForm = styled('form')`
    width: 40vw; // viewport width, kind of like percentages
    height: 70vh; //viewport height
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`