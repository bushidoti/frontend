import React, {Fragment, useEffect, useState} from "react";
import {Clock} from "./clock/timer";
import {Profile} from "./login/loginBar";
import {Link, Outlet} from "react-router-dom";

const NavBar = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        props.setIsAuth(true);
      }
    }, [props, props.isAuth]);



    return (
        <Fragment>
          <div className='rounded-top  bg-light mt-2 w-25 ms-2 border-top border-start border-end  border-success' style={{maxWidth: 'max-content'}}><Clock/></div>
          <nav className="navbar navbar-expand-lg navbar-light rounded-8  shadow-lg p-3 mb-5 mb-2 ms-2 me-2" style={{backgroundColor:'hsl(209, 100%, 95%)'}}>
            <div className="container-fluid">
              <Link className='navbar-brand' to='/'><img src="./favicon.ico" alt="" width="50" height="50"></img></Link>
                <Profile isAuth={props.isAuth} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>

              <div className="collapse navbar-collapse " id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3 ms-1">

                  <li className="nav-item ">
                      <Link className='nav-link active' to='/'>خانه</Link>
                  </li>
                    {props.isAuth ?
                        <Fragment>
                            {props.message === 'حسین شاه محمدلو' || props.permission === 'اداری'?
                                <Fragment>
                                    {props.message === 'حسین شاه محمدلو' ?
                                        <li className="nav-item dropdown">
                                        <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                              data-bs-toggle="dropdown" aria-expanded="false">
                                          مدیریت قراردادها
                                        </span>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <li><Link className='dropdown-item' to="/main" onClick={() => {
                                                    props.formik.resetForm()
                                                    props.setDocToggle(null)
                                                }}>ثبت قرارداد</Link></li>
                                                <li>
                                                    <hr className="dropdown-divider bg-primary"></hr>
                                                </li>
                                                <li><Link className='dropdown-item' to='/report' onClick={() => {
                                                    props.formik.resetForm()
                                                    props.setDocToggle(null)
                                                }}>گزارش</Link></li>
                                                <li><Link className='dropdown-item' to='/upload'>بارگزاری مدارک</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    : null}
                                 <li className="nav-item dropdown">
                                    <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                      مدیریت اسناد
                                    </span>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                      <li><Link className='dropdown-item ' to='/addpropertydoc'>ثبت اسناد اموال</Link></li>
                                      <li><Link className='dropdown-item' to='/addIndividualsDoc'>ثبت مدارک اشخاص</Link></li>
                                      <li>
                                        <hr className="dropdown-divider bg-primary"></hr>
                                      </li>
                                        <li><Link className='dropdown-item' to='/uploadpropertydoc'>بارگزاری اسناد امول</Link></li>
                                        <li><Link className='dropdown-item' to='/uploadindividualsdoc'>بارگزاری مدارک اشخاص</Link></li>
                                      <li>
                                        <hr className="dropdown-divider bg-primary"></hr>
                                      </li>
                                        <li><Link className='dropdown-item' to='/reportindividualsdoc'>گزارش  مدارک اشخاص</Link></li>
                                        <li><Link className='dropdown-item' to='/reportpropertydoc'>گزارش اموال</Link></li>
                                    </ul>
                              </li>
                            </Fragment>
                             : null}
                            {props.permission !== 'اداری' ?
                                <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                      data-bs-toggle="dropdown" aria-expanded="false">
                                  انبارداری
                                </span>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className='dropdown-item ' to='/warehouse'>انبار</Link></li>
                                        <li>
                                            <hr className="dropdown-divider bg-primary"></hr>
                                        </li>
                                        <li><Link className='dropdown-item' to='/property'>اموال</Link></li>
                                        <li><Link className='dropdown-item' to='/report-properties'>گزارش</Link></li>
                                        <li><Link className='dropdown-item ' to='/pending-products'>جا به جای</Link>
                                        </li>
                                        <li>
                                        </li>
                                        {props.message === 'حسین شاه محمدلو' ?
                                            <Fragment>
                                                <hr className="dropdown-divider bg-primary"></hr>
                                                <li><Link className='dropdown-item'
                                                          to='/warehouse-handling'>انبارگردانی</Link></li>
                                            </Fragment>
                                            : null}

                                    </ul>
                                </li>
                            : null}
                        </Fragment>
                        :
                        null
                    }


                  <li className="nav-item">
                      <Link className='nav-link' to='contactus'>پشتیبانی</Link>
                  </li>

                </ul>

                  <span className="btn position-relative material-symbols-outlined">
                      <i className="fas fa-bell fa-2x"></i>
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{top:'8px' , right:'10px'}}>
                                 1
                    <span className="visually-hidden">New alerts</span>
                  </span>
                  </span>

              </div>

            </div>
          </nav>
                  <Outlet/>

        </Fragment>

    )
}
export default NavBar