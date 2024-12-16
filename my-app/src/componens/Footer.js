import React from "react";

import TaskFilter from "./TaskFilter";

const Footer = () => {
    return (
        <div>
            <span>1 Осталась</span>
            <TaskFilter />
            <button>Очистить всё</button>
        </div>
    )
}

export default Footer;