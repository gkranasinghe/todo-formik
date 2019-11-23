import React from 'react';
import {Form, withFormik} from "formik";

import {
    StyledFields,
    StyledTaskForm,
    StyledFieldBlock,
    SaveStyledButton,
    ControlBlock,
    DeleteStyledButton
} from './FormStyled'

const TaskForm = ({showNew, deleteTask, onHideTaskForm, active}) => {

    return (
        <StyledTaskForm>
            <Form>
                <StyledFieldBlock borderBottom>
                    <StyledFields placeholder="Type task name..." name="name"/>
                    {
                        active && <DeleteStyledButton onClick={() => deleteTask(active.id)} type="button">delete</DeleteStyledButton>
                    }
                </StyledFieldBlock>
                <StyledFieldBlock>
                    <StyledFields placeholder="Type task description..." name="description"/>
                </StyledFieldBlock>
                <ControlBlock>
                    <SaveStyledButton type="button" onClick={onHideTaskForm} outline>cancel</SaveStyledButton>
                    <SaveStyledButton type="submit">{showNew ? "add" : "save"}</SaveStyledButton>
                </ControlBlock>
            </Form>
        </StyledTaskForm>
    );
};

const getNewId = () => {
    return `f${(+new Date()).toString(16)}`;
};

const FormikTaskForm = withFormik({
    mapPropsToValues({active}){
        return{
            id: (active && active.id) || '',
            name: (active && active.name) || '',
            description: (active && active.description) || '',
        }
    },
    handleSubmit(values, {props}) {
        if (values.id){
            props.editTask({
                ...values,
                id: values.id
            });
        } else {
            props.addTask({
                ...values,
                id: getNewId()
            });
        }
    },
    enableReinitialize : true,
})(TaskForm);

export default FormikTaskForm;
