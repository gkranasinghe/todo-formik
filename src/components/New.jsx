import React from 'react';
import {Formik} from "formik";

import  {StyledFields, StyledNew, StyledFieldBlock, NewStyledButton, ControlBlock} from './NewStyled'

const New = ({addTask, onHideNewTaskForm}) => {

    const getNewId = () => {
        return `f${(+new Date()).toString(16)}`;
    };

    return (
        <StyledNew>
            <Formik
                initialValues={{
                    name:"",
                    description: "",
                }}
            >
                {
                    ({values, dirty}) => (
                        <form onSubmit={(e) => {e.preventDefault(); addTask({...values, id:getNewId()}); onHideNewTaskForm()}}>
                            <StyledFieldBlock borderBottom>
                                <StyledFields placeholder="Type task name..." name="name" value={values.name}/>
                            </StyledFieldBlock>
                            <StyledFieldBlock>
                                <StyledFields placeholder="Type task description..." name="description" value={values.description}/>
                            </StyledFieldBlock>
                            <ControlBlock>
                                <NewStyledButton outline>CANCEL</NewStyledButton>
                                <NewStyledButton disabled={!dirty}>ADD</NewStyledButton>
                            </ControlBlock>
                        </form>
                    )
                }
            </Formik>
        </StyledNew>
    );
};

export default New;
