import React, {Fragment} from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CurrencyInput from "react-currency-input-field";


const Modal = () => {


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
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="منقول">قراردادی</option>
                                                <option value="غیر منقول">بیمه ای</option>
                                            </select>
                                            <label htmlFor="searchSelect">وضعیت</label>
                                        </div>

                                <div className="col form-floating mb-3 ">
                                    <input type="text" className="form-control" id="contractNumber"
                                           placeholder="name@example.com" required />
                                    <div className="invalid-feedback">
                                        لطفا شماره قرارداد را وارد کنید.
                                    </div>
                                        <label htmlFor="contractNumber">نام و نشان</label>
                                </div>

                                      <div className="form-floating  col">
                                            <select className="form-select" id="searchSelect"
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="مونث">مونث</option>
                                                <option value="مذکر">مذکر</option>
                                            </select>
                                            <label htmlFor="searchSelect">جنسیت</label>
                                        </div>

                        </div>


                            <div className='d-flex gap-2 mb-5'>
                                          <div className="col-3">
                                         <DatePicker
                                             animations={[transition()]}
                                             render={<CustomInputDate />}
                                             id="datePicker"
                                            calendar={persian}
                                              locale={persian_fa}
                                             required
                                         />
                            </div>

                                          <div className="col-4 form-floating mb-3">
                                    <input type="text" className="form-control" id="name"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="name">کد ملی</label>
                                     <div className="invalid-feedback">
                                         نام پیمانکار را وارد کنید.
                                     </div>
                                </div>
                                </div>
                            <hr className='bg-primary mb-5'/>

                                <div className='d-flex gap-2 mb-5'>
<div className="col form-floating ">
                                    <CurrencyInput
                                      className='form-control'
                                      id="contractPrice"
                                      prefix="ریال "
                                      name="contractPrice"
                                      placeholder="name@example.com"
                                      required/>
                                        <label htmlFor="contractPrice">تضمین مصوب</label>
                                    <div className="invalid-feedback">
                                        مبلغ قرارداد را وارد کنید.
                                    </div>
                                </div>

                                            <div className="col-3 form-floating">
                                    <input className="form-control" list="typeBailList" id="workLocation" placeholder="name@example.com" required/>
                                    <label htmlFor="workLocation">محل کار</label>
                                    <datalist id="workLocationList">
                                                <option value="جاسک"/>
                                                <option value="اورهال تهران"/>
                                                <option value="اورهال اصفهان"/>
                                                <option value="دفتر مرکزی"/>
                                                <option value="دزفول"/>
                                                <option value="بیشه کلا"/>
                                                <option value="چابهار"/>
                                    </datalist>
                                    <div className="invalid-feedback">
                                        نوع ضمانت را انتخاب کنید.
                                    </div>

                                </div>



                                      <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="durationContract">شغل</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>

                                </div>


                            </div>


                            <hr className='bg-primary mb-5'/>

                            <div className='d-flex gap-2'>

                                     <div className="col form-floating mb-3">
                                       <CurrencyInput
                                      className='form-control'
                                      id="commitmentPrice"
                                      prefix="ریال "
                                      name="commitmentPrice"
                                      placeholder="name@example.com"
                                      required/>
                                        <label htmlFor="commitmentPrice">مبلغ تضمین</label>
                                         <div className="invalid-feedback">
                                             مبلغ تعهد انجام کار وارد کنید.
                                         </div>
                                </div>

                                  <div className="col-2 form-floating">
                                    <input className="form-control" list="typeBailList" id="typeBail" placeholder="name@example.com" required/>
                                    <label htmlFor="typeBail">نوع ضمانت</label>
                                    <datalist id="typeBailList">
                                        <option value="چک"/>
                                        <option value="نقد"/>
                                        <option value="سفته"/>
                                        <option value="بانک"/>
                                        <option value="تعهد"/>
                                    </datalist>
                                    <div className="invalid-feedback">
                                        نوع ضمانت را انتخاب کنید.
                                    </div>
                                </div>

                                <div className="col form-floating ">

                                    <input type="text" placeholder='ضمانت اول' aria-label="First name" id='firstBail' className="form-control" required/>
                                    <label htmlFor="firstBail">ضمانت اول</label>
                                      <div className="invalid-feedback">
                                             ضمانت اول را انتخاب کنید.
                                        </div>
                                </div>

                                 <div className="col form-floating mb-3">
                                    <input type="text" placeholder='ضمانت دوم' id='secondBail' aria-label="Last name" className="form-control" required/>
                                    <label htmlFor="secondBail">ضمانت دوم</label>
                                       <div className="invalid-feedback">
                                         ضمانت دوم را انتخاب کنید.
                                    </div>
                                 </div>

                            </div>
                                                        <hr className='bg-primary mb-5'/>

                             <div className='row  mb-2 align-items-center '>
                                        <div className='d-flex col align-items-center'>
                                            <p className='me-2'>در</p>
                                          <div>
                                         <DatePicker
                                             animations={[transition()]}
                                             render={<CustomInputDate />}
                                             id="clearedDatePicker"
                                            calendar={persian}
                                              locale={persian_fa}
                                         />
                                          </div>
                                        <p className='ms-2'>تسویه شده</p>
                                        </div>
                                 <div className="form-check col ms-4">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="receivedDocument"/>
                                                <label className="form-check-label" htmlFor="receivedDocument">
                                                    مدارک تحویل داده شده
                                                </label>
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

function CustomInputDate({ openCalendar, value, handleValueChange }) {
  return (
       <div className=" form-floating mb-3 ">
                <input type="text" className="form-control" id="datePicker"
                       placeholder="name@example.com" required
                  onFocus={openCalendar}
              value={value}
              onChange={handleValueChange}/>
                <div className="invalid-feedback">
                    لطفا تاریخ را انتخاب کنید.
                </div>
                     <label htmlFor="datePicker">تاریخ استخدام</label>

        </div>

  )
}
export default Modal