import React, {Fragment, useState} from "react";
import axios from "axios";
import Url from '../../config'

const Modal = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

    const submit = async e => {
        e.preventDefault();

        const user = {
            username: props.username,
            password: props.password,
          };

        const {data} = await axios.post(`${Url}/token/`, user ,{headers: {
            'Content-Type': 'application/json'
        }}, {withCredentials: true});
        localStorage.clear();
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
        window.location.href = '/'
    }
  return (
      <Fragment>
     <div className="modal fade "  id="modalLogin" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalMainLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered   " >
                    <div className="modal-content" style={{backgroundColor:'hsl(105, 100%, 92%)'}}>
                        <div className="modal-header">
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>
                    <form onSubmit={submit}>
                        <div className="container modal-body">
                          <div className="col input-group flex-nowrap mb-3">
                              <span className="input-group-text" id="addon-wrapping">@</span>
                                    <input type="text" className="form-control" id="userName" autoComplete="on"
                                           name='username' value={props.username} onChange={e => props.setUsername(e.target.value)}
                                           placeholder="نام کاربری" required/>
                                    <div className="invalid-feedback">
                                     نام کاربری را وارد کنید
                                    </div>
                          </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text material-symbols-outlined" id="addon-wrapping">lock</span>
                                <input type={passwordShown ? "text" : "password"} name='password' autoComplete="on" className="form-control" id="password"
                                    placeholder="رمز عبور" value={props.password} onChange={e => props.setPassword(e.target.value)} required/>
                                   <button className="btn btn-outline-secondary material-symbols-outlined rounded-end" type='button' onClick={togglePassword} id="button-addon1">{passwordShown ? "visibility" : "visibility_off"}
                                </button>
                                    <div className="invalid-feedback">
                                    رمز عبور را وارد کنید.
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