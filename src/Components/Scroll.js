import React from 'react';






const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', height:'700px', border:'5px solid black'}}>
            {props.children}
        </div>
    )    
}



export default Scroll