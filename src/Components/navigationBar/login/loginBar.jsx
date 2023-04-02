import React from "react";
import { ReactComponent as Logo } from "./avatar.svg";

export const Profile = () => {
    return (
               <div className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                   aria-expanded="false">
                    <Logo/>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">ورود</a></li>
                  <li><a className="dropdown-item" href="#">خروج</a></li>
                </ul>
              </div>
    )

}