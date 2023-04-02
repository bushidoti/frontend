import React, {Fragment} from "react";
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"


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

                            <div className='row'>

                                <div className="col form-floating mb-3 ">
                                    <input type="text" className="form-control" id="contractNumber"
                                           placeholder="name@example.com" required />
                                    <div className="invalid-feedback">
                                        لطفا شماره قرارداد را وارد کنید.
                                    </div>
                                        <label htmlFor="contractNumber">شماره قرارداد</label>
                                </div>

                                 <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="name"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="name">نام پیمانکار</label>
                                     <div className="invalid-feedback">
                                         نام پیمانکار را وارد کنید.
                                     </div>
                                </div>

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
                        </div>


                            <div className='row mb-5'>
                                <div className="col form-floating ">
                                    <CurrencyInput
                                      className='form-control'
                                      id="contractPrice"
                                      prefix="ریال "
                                      name="contractPrice"
                                      placeholder="name@example.com"
                                      required/>
                                        <label htmlFor="contractPrice">مبلغ قرارداد</label>
                                    <div className="invalid-feedback">
                                        مبلغ قرارداد را وارد کنید.
                                    </div>
                                </div>


                                    <div className="col  form-floating">
                                    <input type="text" className="form-control" id="durationContract"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="durationContract">مدت قرارداد</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>

                                </div>

                                <div className="col form-floating">
                                       <CurrencyInput
                                      className='form-control'
                                      id="prePaid"
                                      prefix="ریال "
                                      name="prePaid"
                                      placeholder="name@example.com"
                                      required/>
                                        <label htmlFor="prePaid">مبلغ پیش پرداخت</label>
                                    <div className="invalid-feedback">
                                        مبلغ پیش پرداخت را وارد کنید.
                                    </div>
                                 </div>
                            </div>
                            <hr className='bg-primary mb-5'/>


                            <div className='row'>

                                 <div className="col form-floating mb-3">
                                       <CurrencyInput
                                      className='form-control'
                                      id="goodPrice"
                                      prefix="ریال "
                                      name="goodPrice"
                                      placeholder="name@example.com"
                                      required/>
                                        <label htmlFor="goodPrice">مبلغ حسن انجام کار</label>
                                     <div className="invalid-feedback">
                                         مبلغ حسن انجام کار وارد کنید.
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
                            <div className='row mb-2'>

                                     <div className="col form-floating mb-3">
                                       <CurrencyInput
                                      className='form-control'
                                      id="commitmentPrice"
                                      prefix="ریال "
                                      name="commitmentPrice"
                                      placeholder="name@example.com"
                                      required/>
                                        <label htmlFor="commitmentPrice">مبلغ تعهد انجام کار</label>
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

                            <div className='row'>
                                 <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="topicContract"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="topicContract">موضوع قرارداد</label>
                                     <div className="invalid-feedback">
                                         موضوع قرارداد را وارد کنید.
                                     </div>
                                </div>

                                <div className="col form-floating">
                                    <input className="form-control" list="typeContractList" id="typeContract" placeholder="name@example.com" required/>
                                    <label htmlFor="typeContract">نوع قرارداد</label>
                                    <datalist id="typeContractList">
                                        <option value="خرید قطعات نظامی"/>
                                        <option value="اجاره"/>
                                        <option value="هندلینگ"/>
                                        <option value="آموزش"/>
                                        <option value="عمرانی"/>
                                        <option value="پلیس"/>
                                        <option value="سپاه"/>
                                        <option value="بیمه"/>
                                    </datalist>
                                    <div className="invalid-feedback">
                                        نوع قرارداد را انتخاب کنید.
                                    </div>
                                </div>
                        </div>
                                <hr className='bg-primary mb-2'/>

                            <div className='row d-flex mb-2 align-items-center'>

                                            <p className='col-1'>در</p>
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
                                        <p className='col-2'>تسویه شده</p>

                                 <div className="form-check col-3 ms-4">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="clearedCheck"/>
                                                <label className="form-check-label" htmlFor="clearedCheck">
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
                     <label htmlFor="datePicker">تاریخ</label>

        </div>

  )
}
export default Modal