import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return (
        <p>Hi</p>
    );
}



const wrapper = document.getElementById("app-body");
wrapper ? ReactDOM.render(<App />, wrapper) : false;