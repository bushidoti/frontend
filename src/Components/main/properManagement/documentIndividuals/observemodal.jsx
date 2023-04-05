import React, {Fragment} from "react";


const ObserveModal = () => {


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


     <div className="modal fade "  id="observModal" tabIndex="-1" aria-labelledby="observModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">نمایش مدارک</h1>
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                    <form className='needs-validation' noValidate>

                        <div className="container modal-body">

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="کد ملی"
                           aria-label="searchBox" aria-describedby="search"/>
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="search">search</button>

                </div>
                             <div className="form-floating  col-4">

                                            <select className="form-select" id="searchSelect"
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="کارت سبز">شناسنامه</option>
                                                <option value="کارت ماشین">کارت ملی</option>
                                                <option value="کارت سوخت">تضمین</option>
                                                <option value="بیمه نامه">گواهی</option>
                                                <option value="بیمه نامه">بازنشستگی</option>
                                            </select>
                                            <label htmlFor="searchSelect">نوع مدارک</label>
                                        </div>
                                <hr className='bg-primary my-5'/>

                            <div className='row'>

                                <div className="input-group mb-3">
                                    <button className="btn btn-outline-success" type="button">نمایش</button>
                                    <select className="form-select" id="checkFileBtn"
                                            aria-label="checkFileBtn">
                                        <option selected>فایل مورد نظر را انتخاب کنید</option>
                                        <option value="کارت سبز">ele</option>
                                    </select>
                                </div>


                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal">close</button>
                        </div>
                </form>

                    </div>
                </div>
            </div>
          </Fragment>
  );
};
export default ObserveModal