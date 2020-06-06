import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AppHeader from "./Components/AppHeader";
import AppSearchPanel from "./Components/AppSearchPanel";
import AppButtons from "./Components/AppButtons";
import AppTodoList from "./Components/AppTodoList";

const App = () => {

    const taskData = [
        {id: 1, taskName: "Make React App", important: true},
        {id: 2, taskName: "Playing games", important: false},
        {id: 3, taskName: "Suck some dicks", important: false}
    ]

    return (
        <div>
            <AppHeader />
            <AppSearchPanel />
            <AppButtons />
            <AppTodoList tasks = {taskData}/>
        </div>);
};
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

