import React, {Fragment, useContext, useEffect, useState} from "react";
import {Clock} from "./clock/timer";
import {Profile} from "./login/loginBar";
import {Outlet} from "react-router-dom";
import {Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {Context} from "../../context";

const NavBar = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(Context)

   useEffect(() => {
     if (localStorage.getItem('access_token') !== null) {
        context.setIsAuth(true);
      }
    }, [context, context.isAuth]);



    return (
        <Fragment>
          <div className='rounded-top  bg-light mt-2 w-50 ms-2 border-top border-start border-end  border-success' style={{maxWidth: 'max-content'}}><Clock/></div>
          <Navbar collapseOnSelect expand="lg" className="nav rounded-8 shadow-lg p-3 mb-5 mb-2 ms-2 me-2 border border-2 border-success" style={{backgroundColor:'hsl(209, 100%, 95%)'}}>
            <Container fluid>
              <Navbar.Brand href='/'><img src="./favicon.ico" alt="" width="50" height="50"></img></Navbar.Brand>
                <Profile isAuth={context.isAuth} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

              <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="me-auto mb-2 mb-lg-0 gap-3 ms-1">

                      <NavLink className='nav-link active' to='/'>خانه</NavLink>

                    {context.isAuth ?
                        <Fragment>
                            {context.permission === 'مدیر' ?
                                  <NavLink className='nav-link active' to='/admin' >پنل مدیریتی</NavLink>
                            : null}
                            {context.permission === 'مدیر'  || context.permission === 'اداری' || context.permission === 'مشاهده'?
                                <Fragment>
                                    {context.permission === 'مدیر' || (context.permission === 'اداری' && context.office === 'دفتر مرکزی') || context.permission === 'مشاهده'  ?
                                        <NavDropdown title="مدیریت قراردادها" id="collasible-nav-dropdown">
                                                {context.permission !== 'مشاهده' ?
                                                    <Fragment>
                                                    <NavLink className='dropdown-item'  to="/main" onClick={() => {
                                                        context.formik.resetForm()
                                                        context.setDocToggle(null)
                                                    }}>ثبت قرارداد</NavLink>
                                                    <NavLink className='dropdown-item' to='/addIndividualsDoc'>ثبت مدارک
                                                    اشخاص</NavLink>
                                                    <NavDropdown.Divider />
                                                    </Fragment>

                                                         : null }
                                                <NavLink className='dropdown-item' to='/report' onClick={() => {
                                                    context.formik.resetForm()
                                                    context.setDocToggle(null)
                                                }}>گزارش قراداد</NavLink>
                                                <NavLink className='dropdown-item' to='/reportindividualsdoc'>گزارش
                                                    مدارک اشخاص</NavLink>
                                                {context.permission !== 'مشاهده' ?
                                                    <Fragment>
                                                         <NavDropdown.Divider />
                                                        <NavLink className='dropdown-item' to='/upload'>بارگزاری
                                                            مدارک قرارداد</NavLink>
                                                        
                                                         <NavLink className='dropdown-item' to='/uploadindividualsdoc'>بارگزاری
                                                        مدارک اشخاص</NavLink>
                                                    </Fragment>
                                                : null }
                                        </NavDropdown>
                                    : null}
                                    {context.permission === 'مدیر' || context.permission === 'اداری' ?
                                        <NavDropdown title="مدیریت اسناد" id="collasible-nav-dropdown">
                                                <NavLink className='dropdown-item ' to='/addpropertydoc'>ثبت اسناد
                                                    اموال</NavLink>
                                                <NavDropdown.Divider />
                                                <NavLink className='dropdown-item' to='/uploadpropertydoc'>بارگزاری
                                                    اسناد امول</NavLink>
                                                <NavLink className='dropdown-item' to='/reportpropertydoc'>گزارش
                                                    اموال</NavLink>
                                        </NavDropdown>
                                    : null}
                            </Fragment>
                             : null}
                            {context.permission === 'انباردار' || context.permission === 'مدیر'?
                                <NavDropdown title="انبارداری" id="collasible-nav-dropdown">
                                        <NavLink className='dropdown-item ' to='/warehouse'>انبار</NavLink>
                                        <NavDropdown.Divider />
                                        <NavLink className='dropdown-item' to='/property'>اموال</NavLink>
                                        <NavLink className='dropdown-item' to='/report-properties'>گزارش</NavLink>
                                        <NavLink className='dropdown-item ' to='/pending-products'>جا به جای</NavLink>
                                        

                                        {context.permission === 'مدیر'  ?
                                            <Fragment>
                                                <NavDropdown.Divider />
                                                <NavLink className='dropdown-item'
                                                          to='/warehouse-handling'>انبارگردانی</NavLink>
                                            </Fragment>
                                            : null}
                                </NavDropdown>
                            : null}
                        </Fragment>
                        :
                        null
                    }


                  <li className="nav-item">
                      <NavLink className='nav-link' to='contactus'>پشتیبانی</NavLink>
                  </li>

                </Nav>

                  {/*<span className="btn position-relative material-symbols-outlined">
                      <i className="fas fa-bell fa-2x"></i>
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{top:'8px' , right:'10px'}}>
                                 1
                    <span className="visually-hidden">New alerts</span>
                  </span>
                  </span> */}

              </Navbar.Collapse>

            </Container>
          </Navbar>
                  <Outlet/>

        </Fragment>

    )
}
export default NavBar