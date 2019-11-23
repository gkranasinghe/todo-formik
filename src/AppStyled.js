import styled from 'styled-components'

export const StyledButton = styled.button`
    background: ${({theme}) => theme.primary};
    border:none;
    font-size: 16px;
    width:250px;
    height:50px;
    margin-left: auto;
    display:flex;
    align-items:center;
    justify-content:center;
    color: ${({theme}) => theme.white};
    border-radius: 3px;
    text-transform: uppercase;
    
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    &:focus {
        outline:0;
        background-color: ${(props) => props.theme.primary};
        color: ${(props) => props.theme.white};
    }
    &:hover {
        box-shadow: ${(props) => "0 0 10px" + props.theme.primary};
    }
`;

export const StyledApp = styled.div`
    width: 600px;
    padding-top: 77px;
    margin: 0 auto;
`;
