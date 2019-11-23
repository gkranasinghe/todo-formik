import styled from 'styled-components'

export const Task = styled.div`
        border: 2px solid ${({theme}) => theme.primary};
        border-radius: 3px;
        width: 250px;
        height: 50px;
        padding-left: 18px;
        vertical-align: middle;
        line-height: 50px;
        box-sizing: border-box;
        margin-bottom: 24px;
        
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

export const TaskContainer = styled.div`
    margin: 0 0 16px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;
