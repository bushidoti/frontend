import React, {Fragment} from "react";
import {Clock} from "./clock/timer";
import {Profile} from "./login/loginBar";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Fragment>
          <div className='rounded-top  bg-light mt-2 w-25 ms-2 border-top border-start border-end  border-success' style={{maxWidth: 'max-content'}}><Clock/></div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-8  shadow-lg p-3 mb-5 mb-2 ms-2 me-2 ">
            <div className="container-fluid">
              <Link className='navbar-brand' to='/'><img src="./favicon.ico" alt="" width="50" height="50"></img></Link>
                <Profile/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 ms-1">

                  <li className="nav-item ">
                      <Link className='nav-link active' to='/'>خانه</Link>
                  </li>

                  <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                      مدیریت قراردادها
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                       <li> <Link className='dropdown-item' to="/main">ثبت قرارداد</Link></li>
                        <li>
                        <hr className="dropdown-divider bg-primary"></hr>
                      </li>
                      <li><Link className= 'dropdown-item' to= '/report'>گزارش</Link></li>
                      <li><Link className= 'dropdown-item' to= '/upload'>بارگزاری مدارک</Link></li>
                    </ul>
                  </li>

                     <li className="nav-item dropdown">
                    <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                      مدیریت اسناد
                    </span>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><Link className='dropdown-item' to='#'>ثبت اسناد اموال</Link></li>
                      <li><Link className='dropdown-item' to='#'>ثبت مدارک اشخاص</Link></li>
                      <li>
                        <hr className="dropdown-divider bg-primary"></hr>
                      </li>
                        <li><Link className='dropdown-item' to='#'>بارگزاری اسناد امول</Link></li>
                        <li><Link className='dropdown-item' to='#'>بارگزاری مدارک اشخاص</Link></li>
                      <li>
                        <hr className="dropdown-divider bg-primary"></hr>
                      </li>
                        <li><Link className='dropdown-item' to='#'>گزارش</Link></li>
                    </ul>
                  </li>

                    <li className="nav-item">
                        <Link className='nav-link disabled' to='/automation'>انبار داری</Link>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">پشتیبانی</a>
                  </li>

                </ul>


              </div>

            </div>
          </nav>

        </Fragment>

    )
}
export default NavBar