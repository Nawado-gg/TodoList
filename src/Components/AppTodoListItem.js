import React from "react";

const AppTodoListItem = ({taskName, important}) => {

    const style = {
        color: important? 'tomato': 'black'
    };

    return (
        <span style = {style}>{taskName}</span>
    );
};

export default AppTodoListItem