import React, {Fragment} from "react";
import {Link} from "react-router-dom";

export const Footer = () => {
    return(
        <Fragment>
            <div className='container m-4'>
                <footer className="text-center text-white flex-shrink-0 fixed-bottom" style={{backgroundColor:'#caced1'}}>
                <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                    © 2023 Copyright:
                    <Link className="text-white stretched-link" to={`https://saje.ir`}> saje.co</Link>
                </div>
            </footer>
            </div>

        </Fragment>
    )
}