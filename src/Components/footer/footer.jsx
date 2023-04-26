import React, {Fragment} from "react";

export const Footer = () => {
    return(
        <Fragment>
            <div className='container'>
                <footer className="text-center text-white flex-shrink-0 fixed-bottom" style={{backgroundColor:'#caced1'}}>
                <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                    © 2023 Copyright:
                    <a className="text-white" href="https://saje.com/"> saje.co</a>
                </div>
            </footer>
            </div>

        </Fragment>
    )
}