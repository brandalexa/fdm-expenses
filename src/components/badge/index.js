import React, { useState } from "react";
import style from "./style.css"

const Badge = (props) => {
    return (
        <div className="container">
            <p className="badge">{props.value}</p>
        </div>
    );
}

export default Badge;