import React, {Fragment} from "react";
import { ReactComponent as Logo } from "./avatar.svg";
import Modal from './modal'
export const Profile = () => {
    return (
        <Fragment>
                <Modal/>
               <div className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <Logo/>
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#modalLogin">ورود</a></li>
                  <li><a className="dropdown-item" href="#">خروج</a></li>
                </ul>
              </div>
        </Fragment>
    )

}