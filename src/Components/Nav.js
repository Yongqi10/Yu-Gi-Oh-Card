import React from "react";

import { Link } from "react-router-dom";

function Nav() {

    return (
        <ul className="navBox">
            <Link to = "/Home" className="navItems"> Home </Link>

            {

                <Link to = "/Login" className="navItems"> Login </Link>

            }

            <Link to = "/Card" className="navCart"> My Card </Link>
        </ul>
    )
}

export default Nav;
