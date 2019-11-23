import React, {useContext} from 'react';
import {MyContext} from "../App";

import {Task} from'./ListStyled'
import {TaskContainer} from'./ListStyled'

const List = () => {
    const { list } = useContext(MyContext);
    return (
        <TaskContainer>
            {
                list.map(item=>{
                    return <Task key={item.id}>{item.name}</Task>
                })
            }
        </TaskContainer>
    );
};

export default List;
