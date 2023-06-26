import React, {Fragment} from "react";
import { ReactComponent as Logo } from "./avatar.svg";
import Modal from './modal'
import {Link} from "react-router-dom";

export const Profile = (props) => {

    return (
        <Fragment>
                <Modal username={props.username} setUsername={props.setUsername} password={props.password} setPassword={props.setPassword}/>
               <div className="dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <Logo/>
                </Link>
                <ul className="dropdown-menu">
                    {props.isAuth ?
                        <li><Link className="dropdown-item" to='/logout'>خروج</Link></li>
                        :
                        <li><Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#modalLogin">ورود</Link></li>
                    }
                </ul>
              </div>
        </Fragment>
    )

}