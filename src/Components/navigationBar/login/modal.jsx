import React, {Fragment} from "react";


const Modal = (props) => {


    (() => {
      'use strict'

      const forms = document.querySelectorAll('.needs-validation')

      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
    })()

  return (

      <Fragment>



     <div className="modal fade "  id="modalLogin" tabIndex="-1" aria-labelledby="modalMainLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered   " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                    <form className='needs-validation' noValidate>

                        <div className="container modal-body">

                          <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="topicContract"
                                           placeholder="name@example.com" required disabled={props.editDocument}/>
                                        <label htmlFor="topicContract">نام کاربری</label>
                                     <div className="invalid-feedback">
                                         موضوع قرارداد را وارد کنید.
                                     </div>
                          </div>
                           <div className="col form-floating mb-3">
                                    <input type="password" className="form-control" id="topicContract"
                                           placeholder="name@example.com" required disabled={props.editDocument}/>
                                        <label htmlFor="topicContract">رمز عبور</label>
                                     <div className="invalid-feedback">
                                         موضوع قرارداد را وارد کنید.
                                     </div>
                          </div>

                          <div className="d-flex   mb-4">
                                   <div className="form-check ">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="receivedDocument" disabled={props.editDocument}/>
                                                <label className="form-check-label" htmlFor="receivedDocument">
                                                    مرا به خاطر بسپار
                                                </label>
                                        </div>
                              </div>


                        </div>
                        <div className="modal-footer justify-content-center">
                                <button className="btn btn-primary mb-4 align-middle">وارد شدن</button>
                        </div>
                </form>

                    </div>
                </div>
            </div>
          </Fragment>
  );
};


export default Modal