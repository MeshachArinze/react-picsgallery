import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, 
::before, 
::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: san-serif;       
}
`

export const Container = styled.div`
width: 100%;
max-height: 100%;
display: flex;
`;

export const Button = styled.button`
border-radius: 4px;
margin: .5rem;
padding: 0.5rem .9rem;
border: none;
font-size: ${({size})=> (size ? '1.1rem' : '1.1rem')};
`


export default GlobalStyles;