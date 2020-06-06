import React from "react";

import AppTodoListItem from "./AppTodoListItem";

const AppTodoList = (tasks) => {
    console.log(tasks)
    const elements = tasks.map((item) => {
        return (
            <li key = {item.id}>
                <AppTodoListItem
                    taskName = {item.taskName}
                    important = {item.important} />
            </li>
            )
        }
    );

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default AppTodoList