import React from "react";

function Links(props){
    return(
        <div id="links">
            <h3>Links</h3>
            <a href={props.github} title="github link">{props.github}</a>
            <a href={props.linkedin} title="linkedIn link">{props.linkedin}</a>
        </div>
    )
}

export default Links;