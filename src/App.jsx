import React, {createContext, useState} from 'react';
import Active from "./components/Active";
import List from "./components/List";
import New from "./components/New";

import {StyledButton, StyledApp} from './AppStyled'

import { createGlobalStyle, ThemeProvider} from "styled-components";

const GlobalStyled = createGlobalStyle`
    body{
        margin: 0;
    }
`;

const theme = {
    primary: '#D1004B',
    white: '#FFFFFF',
};

export const MyContext = createContext(null);

const initialState = {
    list: [
        {
            id: 1,
            name: "Task 1",
            description: "task 1 description"
        },
        {
            id: 2,
            name: "Task 2",
            description: "task 2 description"
        },
        {
            id: 3,
            name: "Task 3",
            description: "task 3 description"
        },
        {
            id: 4,
            name: "Task 4",
            description: "task 4 description"
        }
    ],
    active: null,
    showNew: false,
};

function App() {
    const [state, setState] = useState(initialState);
    const getById = (taskId) => state.list.find(i => i.id === taskId);
    const deleteTask = (taskId) => {
        const newList = state.list.filter(i => i.id !== taskId);
        setState({...state, list: newList, active: null})
    };
    const changeTask = (task) => {
        const newList = state.list.map(t => {
            if (t.id === task.id) {
                return task
            }
            return t;
        });
        setState({...state, list: newList, active: task});
    };
    const addTask = (task) => {
        let newList = state.list;
        newList.push(task);
        setState({...state, list: newList, active: null});
    };

    const onShowNewTaskForm = () => {
        setState({ ...state, showNew:true, active: null} );
    };

    const onHideNewTaskForm = () => {
        setState({ ...state, showNew:false, active: null} );
    };

    const context = {
        list: state.list
    };

    return (
        <MyContext.Provider value={context}>
        <StyledApp className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyled/>

                {state.active &&
                    <Active/>
                }
                {state.showNew &&
                    <New addTask={addTask} onHideNewTaskForm={onHideNewTaskForm}/>
                }
                <List/>
                <StyledButton onClick={onShowNewTaskForm}>Add new task</StyledButton>
            </ThemeProvider>
        </StyledApp>
        </MyContext.Provider>
    );
}

export default App;
