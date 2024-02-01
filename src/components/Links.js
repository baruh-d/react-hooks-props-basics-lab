import React from "react";

function Links(props){
    return(
        <div id="links">
            <h3>Links</h3>
            <a href={props.github} alt="github link"></a>
            <a href={props.linkedin} alt="linkedIn link"></a>
        </div>
    )
}

export default Links;