import React, {Fragment} from "react";
import { ReactComponent as Logo } from "./avatar.svg";
import Modal from './modal'

export const Profile = (props) => {

    return (
        <Fragment>
                <Modal username={props.username} setUsername={props.setUsername} password={props.password} setPassword={props.setPassword}/>
               <div className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <Logo/>
                </a>
                <ul className="dropdown-menu">
                    {props.isAuth ?
                        <li><a className="dropdown-item" href='/logout'>خروج</a></li>
                        :
                        <li><a className="dropdown-item"  data-bs-toggle="modal" data-bs-target="#modalLogin">ورود</a></li>
                    }
                </ul>
              </div>
        </Fragment>
    )

}