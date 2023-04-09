import React, {Fragment} from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";


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


     <div className="modal fade "  id="modalMain" tabIndex="-1" aria-labelledby="modalMainLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">ثبت قرارداد</h1>
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                    <form className='needs-validation' noValidate>

                        <div className="container modal-body">

                            <div className="form-floating justify-content-center mb-5">
                                <input type="text" id="Id" className="w-25 form-control" aria-label="Username"
                                       aria-describedby="basic-addon1" value='1' disabled required/>
                                <label  id="Id">شماره ثبت</label>

                            </div>

                            <div className='d-flex gap-2'>

                                    <div className="form-floating  col">
                                            <select className="form-select" id="searchSelect"
                                                    aria-label="Floating label select example" disabled={props.editProperty}>
                                                <option selected disabled>یک مورد انتخاب کنید</option>

                                                {props.propToggle ?
                                                    <Fragment>
                                                              <option value="ملک تجاری">ملک تجاری</option>
                                                              <option value="ملک غیرتجاری">ملک غیرتجاری</option>
                                                    </Fragment>
                                                    :
                                                    <Fragment>

                                                            <option value="خودرو سواری">خودرو سواری</option>
                                                            <option value="خودرو فرودگاهی">خودرو فرودگاهی</option>

                                                    </Fragment>
                                                }

                                            </select>
                                            <label htmlFor="searchSelect">نوع</label>
                                        </div>

                                <div className="col form-floating mb-3 ">
                                    <input type="text" className="form-control" id="contractNumber"
                                           placeholder="name@example.com" disabled={props.editProperty} required />
                                    <div className="invalid-feedback">
                                        لطفا شماره قرارداد را وارد کنید.
                                    </div>
                                        <label htmlFor="contractNumber">{props.propToggle ? 'نام' :  'سیستم'}</label>
                                </div>
                        </div>


                            <div className='d-flex gap-2 mb-5'>

                                          <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="name"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="name">شماره سند</label>
                                     <div className="invalid-feedback">
                                         نام پیمانکار را وارد کنید.
                                     </div>
                                </div>
                                      <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com"  disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">{props.propToggle ? 'پلاک' :  'شماره موتور'}</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>

                                </div>
                                         <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">{props.propToggle ? 'آدرس' :  'شماره شاسی'}</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>


                                </div>
                                              <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">نام مالک</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>
                            </div>
                            <hr className='bg-primary mb-5'/>

                            <div className='d-flex gap-2 mb-5'>

                                 <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">{props.propToggle ? 'متراژ' :  'مدل'}</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>

                                  <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty}d required/>
                                        <label htmlFor="durationContract">{props.propToggle ? 'سال ساخت' :  'پلاک'}</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>

                                </div>

                                             <div className="col  form-floating">
                                    <textarea  className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">{props.propToggle ? 'توضیحات' :  'محل استقرار'}</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>

                                </div>


                            </div>
                                                        <hr className='bg-primary mb-5'/>
                            {props.propToggle ?

                                <>
                                </>

                                :
                                    <Fragment>
                                  <div className='d-flex gap-2 mb-5'>
                                              <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">برگه سند</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>
                                     <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">بیمه نامه</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>

                                       <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">کارت سوخت</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>

                                     <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">کارت ماشین</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>

                            </div>

                                      <div className="col  form-floating">
                                    <textarea  className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">توضیحات</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>
                                                                                                <hr className='bg-primary mb-5'/>

                                </Fragment>
                            }



                                  <div className='d-flex mb-2'>
                                        <div className='d-flex col align-items-center'>
                                            <p className='me-2'>در</p>
                                          <div>
                                         <DatePicker
                                             animations={[transition()]}
                                             render={<CustomInputDate disabled={props.editProperty} />}
                                             id="clearedDatePicker"
                                            calendar={persian}
                                              locale={persian_fa}
                                         />
                                          </div>
                                        <p className='ms-2'>فروخته شده</p>
                                        </div>

                                      <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" disabled={props.editProperty} required/>
                                        <label htmlFor="durationContract">نام خریدار</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal">close</button>
                            <button type="submit" className="btn material-symbols-outlined btn-success">done</button>
                        </div>
                </form>

                    </div>
                </div>

            </div>
          </Fragment>
  );
};

function CustomInputDate({ openCalendar, value, handleValueChange ,disabled }) {
  return (
       <div className=" form-floating mb-3 ">
                <input type="text" className="form-control" id="datePicker"
                       placeholder="name@example.com" required
                  onFocus={openCalendar}
              value={value}
              onChange={handleValueChange}
                disabled={disabled}/>
                <div className="invalid-feedback">
                    لطفا تاریخ را انتخاب کنید.
                </div>
                     <label htmlFor="datePicker">تاریخ</label>

        </div>

  )
}
export default Modal