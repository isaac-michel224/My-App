import React from 'react';


//below in Welcome.jsx, we are defining props
//props is a JS object ans as such can be destructured
//I prefer this method but passing

function Welcome({name}) {
    return (
        
        <div>
            <h1>Hello, {name}</h1> 
    </div>
    );


}

export default Welcome;