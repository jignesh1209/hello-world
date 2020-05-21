import React from 'react'

function FunctionClick() {
    function clickme() {
        console.log("button cliked");
    }
    return (
        <div>
            <button onClick={clickme}>Click</button>
        </div>
    )
}

export default FunctionClick
