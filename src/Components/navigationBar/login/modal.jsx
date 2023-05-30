import React, {Fragment} from "react";
import {Required} from "../../main/required";
import axios from "axios";

const Modal = (props) => {
    const submit = async e => {
        e.preventDefault();

        const user = {
            username: props.username,
            password: props.password,
          };

        const {data} = await axios.post('http://localhost:8000/token/', user ,{headers: {
            'Content-Type': 'application/json'
        }}, {withCredentials: true});
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/'
    }
    Required()
  return (
      <Fragment>
     <div className="modal fade "  id="modalLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalMainLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered   " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                    <form className='needs-validation' onSubmit={submit} noValidate>
                        <div className="container modal-body">
                          <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="userName" autoComplete="on" name='username' value={props.username} onChange={e => props.setUsername(e.target.value)}
                                           placeholder="نام کاربری" required/>
                                    <label htmlFor="userName">نام کاربری</label>
                                    <div className="invalid-feedback">
                                     نام کاربری را وارد کنید
                                    </div>
                          </div>
                           <div className="col form-floating mb-3">
                                    <input type="password" name='password' autoComplete="on" className="form-control" id="password"
                                    placeholder="رمز عبور" value={props.password} onChange={e => props.setPassword(e.target.value)} required/>
                                    <label htmlFor="password">رمز عبور</label>
                                    <div className="invalid-feedback">
                                    رمز عبور را وارد کنید.
                                    </div>
                          </div>
                          <div className="d-flex   mb-4">
                                   <div className="form-check ">
                                            <input className="form-check-input" type="checkbox" value='true'
                                            id="rememberMe"/>
                                            <label className="form-check-label" htmlFor="rememberMe">
                                            مرا به خاطر بسپار
                                            </label>
                                   </div>
                          </div>
                        </div>
                        <div className="modal-footer justify-content-center">
                                <button type="submit" id='signInBtn' className="btn btn-primary mb-4 align-middle">وارد شدن</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
  </Fragment>
  );
};


export default Modal