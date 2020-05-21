import React from "react";

function Hello() {
    // return (
    //     <h1>Hello Jignesh</h1>
    // );

    return React.createElement('div', {id:"Hello",className:'dummyClass' }, React.createElement('h1', null, 'Hello Jignesh'));

}

export default Hello;