import React, {Fragment, useState} from "react";


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
    const [typeDocument , setTypeDocument] = useState('')

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
                            <input type="text"  id='searchBox' className="form-control" placeholder="کد ملی را وارد کنید"
                            aria-label="searchBox" aria-describedby="search"/>
                            <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtr">search</button>
                        </div>
                        <div className="form-floating  col-4">
                            <select className="form-select" id="typeDocument"
                                    aria-label="Type Document" onChange={(e) => setTypeDocument(e.target.value)}>
                                <option selected disabled>یک مورد انتخاب کنید</option>
                                <option value="شناسنامه">شناسنامه</option>
                                <option value="کارت ملی">کارت ملی</option>
                                <option value="تضمین">تضمین</option>
                                <option value="گواهی">گواهی</option>
                                <option value="بازنشستگی">بازنشستگی</option>
                            </select>
                            <label htmlFor="typeDocument">نوع مدارک</label>
                        </div>

                        <hr className='bg-primary my-5'/>

                        <div className='row'>
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline-success" id='checkBtn' type="button">نمایش</button>
                                    <select className="form-select" id="checkFileList"
                                    aria-label="checkFileList">
                                    <option selected disabled>فایل مورد نظر را انتخاب کنید</option>
                                      {(() => {

                                          if (typeDocument === 'شناسنامه'){
                                              return(
                                                  <Fragment>
                                                        <option value="صفحه 1">صفحه 1</option>
                                                        <option value="صفحه 2">صفحه 2</option>
                                                        <option value="صفحه 3">صفحه 3</option>
                                                        <option value="صفحه 4">صفحه 4</option>
                                                  </Fragment>
                                              )
                                          }else if (typeDocument === 'کارت ملی'){
                                              return(
                                                  <Fragment>
                                                        <option value="پشت">پشت</option>
                                                        <option value="رو">رو</option>
                                                  </Fragment>
                                              )
                                          }else if (typeDocument === 'تضمین'){
                                              return(
                                                  <Fragment>
                                                        <option value="تضمین">تضمین</option>
                                                  </Fragment>
                                              )
                                          }else if (typeDocument === 'گواهی'){
                                              return(
                                                  <Fragment>
                                                        <option value="گواهی پزشکی">گواهی پزشکی</option>
                                                        <option value="گواهی بیمه">گواهی بیمه</option>
                                                        <option value="گواهی پلیس">گواهی پلیس</option>
                                                        <option value="گواهینامه">گواهینامه</option>
                                                  </Fragment>
                                              )
                                          }else if (typeDocument === 'بازنشستگی'){
                                              return(
                                                  <Fragment>
                                                        <option value="حکم بازنشستگ">حکم بازنشستگی</option>
                                                        <option value="کارت بازنشستگی">کارت بازنشستگی</option>
                                                  </Fragment>
                                              )
                                          }
                                      })()}
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