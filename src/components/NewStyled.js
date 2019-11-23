import styled from "styled-components";
import {Field} from "formik";

export const StyledFields = styled(Field)`
    border: none;
    resize: none;
    width: 100%;
    padding: 0 17px;
    height: 33px;
    box-sizing: border-box;
    
    &:focus {
      outline:0;
    }
`;

export const StyledFieldBlock = styled.div`
    padding: 0 1px;
    border-bottom: 2px solid ${({theme}) => theme.primary};
    ${props => !props.borderBottom ? "border-bottom: none" : ""};
`;

export const StyledNew = styled.div`
    border: 2px solid ${({theme}) => theme.primary};
    border-radius: 3px;
    padding-bottom: 19px;
    margin-bottom: 40px;
`;

export const NewStyledButton = styled.button`
    background: ${(props) => props.outline ? "none" : props.theme.primary};
    border: ${(props) => props.outline ? "2px solid" + props.theme.primary  : "none"};
    font-size: 16px;
    width:100px;
    height:34px;
    color: ${(props) => props.outline ? props.theme.primary : props.theme.white};
    border-radius: 3px;
    text-transform: uppercase;
    margin-right: 25px;
    
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

export const ControlBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
`;


