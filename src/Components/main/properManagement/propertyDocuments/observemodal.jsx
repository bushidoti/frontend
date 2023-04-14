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
                                <div className="mt-2 input-group">
                                            <input className="form-control c-form__input c-form__car-plate-input__section4" type="tel" maxLength='2' placeholder="⚊ ⚊"
                                            id="carPlateSection4"/>
                                            <span className="c-form__car-plate-input__iran">ایران</span>
                                            <input type="tel"  id="carPlateSection3" placeholder="⚊ ⚊ ⚊" aria-label="First name"
                                            maxLength='3' className="c-form__input form-control"/>
                                            <select id="carPlateSection2" className="c-form__combo c-form__car-plate-input__section2">
                                                <option value="الف">الف</option>
                                                <option value="ب">ب</option>
                                                <option value="پ">پ</option>
                                                <option value="ت">ت</option>
                                                <option value="ث">ث</option>
                                                <option value="ج">ج</option>
                                                <option value="د">د</option>
                                                <option value="ز">ز</option>
                                                <option value="س">س</option>
                                                <option value="ش">ش</option>
                                                <option value="ص">ص</option>
                                                <option value="ط">ط</option>
                                                <option value="ع">ع</option>
                                                <option value="ف">ف</option>
                                                <option value="ق">ق</option>
                                                <option value="ک">ک</option>
                                                <option value="گ">گ</option>
                                                <option value="ل">ل</option>
                                                <option value="م">م</option>
                                                <option value="ن">ن</option>
                                                <option value="و">و</option>
                                                <option value="ه">ه</option>
                                                <option value="ی">ی</option>
                                                <option value="ژ">معلولین</option>
                                                <option value="تشریفات">تشریفات</option>
                                                <option value="D">D</option>
                                                <option value="S">S</option>
                                            </select>
                                            <input type="tel" placeholder="⚊ ⚊"  id="carPlateSection1" maxLength='2' className="c-form__input form-control"/>
                                            <button className="input-group-text c-form__car-plate-input rounded-8"></button>
                                          </div>
                            </div>
                            <hr className='bg-primary my-5'/>
                            <div className='row'>
                                <div className="input-group mb-3">
                                    <button className="btn btn-outline-success"  id='checkFileBtn' type="button">نمایش</button>
                                    <select className="form-select" id="checkFileSelector"
                                    aria-label="checkFileBtn">
                                        <option selected>فایل مورد نظر را انتخاب کنید</option>
                                        <option value="کارت سبز">کارت سبز</option>
                                        <option value="کارت ماشین">کارت ماشین</option>
                                        <option value="کارت سوخت">کارت سوخت</option>
                                        <option value="بیمه نامه">بیمه نامه</option>
                                        <option value="فاکتور فروش">فاکتور فروش</option>
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