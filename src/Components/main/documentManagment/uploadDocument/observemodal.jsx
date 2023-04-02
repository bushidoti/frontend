import React, {Fragment} from "react";
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"


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
                    <input type="text" className="form-control" placeholder="شماره قرارداد"
                           aria-label="searchBox" aria-describedby="search"/>
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="search">search</button>
                </div>
                                <hr className='bg-primary my-5'/>

                              <div className="form-floating col-4 mb-5">
                                            <select className="form-select" id="partitionSelect"
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="نام پیمانکار">قرارداد</option>
                                                <option value="شماره ثبت">تضامین</option>
                                            </select>
                                            <label htmlFor="partitionSelect">بخش</label>
                                        </div>

                            <div className='row'>

                                <div className="input-group mb-3">
                                    <button className="btn btn-outline-success" type="button">نمایش</button>
                                    <select className="form-select" id="checkFileBtn"
                                            aria-label="checkFileBtn">
                                        <option selected>فایل مورد نظر را انتخاب کنید</option>
                                        <option value="1">صفحه اول</option>
                                        <option value="2">صفحه دوم</option>
                                        <option value="3">صفحه سوم</option>
                                        <option value="4">صفحه چهارم</option>
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