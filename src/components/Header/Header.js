import React from "react";
import "./Header.css";

function Header() {
    return(
    <header className="header">
        <h1>Employee Directory</h1>
        <p>Click on contacts to filter by heading or use the search box to narrow your results</p>
    </header>
    );
};

export default Header;