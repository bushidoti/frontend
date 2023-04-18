import React, {Fragment, useState} from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import CurrencyInput from "react-currency-input-field";
import {CustomInputDate} from "../../../../App";


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

    const [isCommitmentPriceEmpty , setIsCommitmentPriceEmpty] = useState('')
    const [isTypeBail1Empty , setIsTypeBail1Empty] = useState('')

    let firstBail = ''
    let secondBail = ''

    const handleLabelBails1 = () => {
        if (isTypeBail1Empty === 'چک'){
            firstBail = 'شماره چک'
            secondBail = 'بانک'
        } else if (isTypeBail1Empty === 'نقد'){
            firstBail = 'واریز به حساب'
            secondBail = 'شماره حساب'
        }else if (isTypeBail1Empty === 'سفته'){
            firstBail = 'تعداد سفته'
            secondBail = 'مبلغ سفته'
        }else if (isTypeBail1Empty === 'بانک'){
            firstBail = 'ضمانت'
            secondBail = 'شماره تضمین'
        }else if (isTypeBail1Empty === 'تعهد'){
            firstBail = 'متعهد'
            secondBail = 'شماره تعهد'
        }

    }
    handleLabelBails1()

  return (
      <Fragment>
             <div className="modal fade "  id="modalMain" tabIndex="-1" aria-labelledby="modalMainLabel"
             aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {(() => {
                                       if (props.ModalTitle === 'edit'){
                                            return (
                                                'ویرایش مدرک'
                                            )
                                        }else if (props.ModalTitle === 'done'){
                                            return (
                                                'تسویه قرارداد'
                                            )
                                        }else if (props.ModalTitle === 'add'){
                                            return (
                                                'ثبت قرارداد'
                                            )
                                        }else{
                                            return (
                                                'نمایش اطلاعات'
                                            )
                                        }

                                })()}
                            </h1>
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                            aria-label="Close"></button>
                        </div>

                    <form className='needs-validation' noValidate>
                        <div className="container modal-body">

                            <div className="form-floating justify-content-center mb-5">
                                <input type="text" id="numberId" className="w-25 form-control" aria-label="Username"
                                aria-describedby="basic-addon1" value='' disabled required/>
                                <label  htmlFor="numberId">شماره ثبت</label>
                            </div>

                            <div className='d-flex gap-2'>
                                      <div className="form-floating  col">
                                            <select className="form-select" id="situationSelector"
                                            aria-label="situationSelector" disabled={props.editDocumentIndividuals}>
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="قراردادی">قراردادی</option>
                                                <option value="بیمه ای">بیمه ای</option>
                                            </select>
                                            <label htmlFor="situationSelector">وضعیت</label>
                                             <div className="invalid-feedback">
                                            لطفا وضعیت  را انتخاب کنید.
                                            </div>
                                      </div>

                                      <div className="col form-floating mb-3 ">
                                            <input type="text" className="form-control" id="fullName"
                                            placeholder="امیرحسین عباسی" required disabled={props.editDocumentIndividuals}/>
                                            <div className="invalid-feedback">
                                            لطفا نام کامل  را وارد کنید.
                                            </div>
                                            <label htmlFor="fullName">نام و نشان</label>
                                      </div>

                                      <div className="form-floating  col">
                                            <select className="form-select" id="sexSelector"
                                            aria-label="sexSelector" disabled={props.editDocumentIndividuals} required>
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="مونث">مونث</option>
                                                <option value="مذکر">مذکر</option>
                                            </select>
                                             <div className="invalid-feedback">
                                            لطفا جنسیت  را انتخاب کنید.
                                            </div>
                                            <label htmlFor="sexSelector">جنسیت</label>
                                      </div>

                        </div>


                            <div className='d-flex gap-2 mb-5'>
                                      <div className="col-3">
                                          <DatePicker
                                             animations={[transition()]}
                                             render={<CustomInputDate disabled={props.editDocumentIndividuals} label='تاریخ استخدام'/>}
                                             id="employedDatePicker"
                                             calendar={persian}
                                             locale={persian_fa}
                                             required
                                          />
                                      </div>

                                      <div className="col-4 form-floating mb-3">
                                          <input type="text" className="form-control" id="nationalCard"
                                          placeholder="1520505142" disabled={props.editDocumentIndividuals}  required/>
                                          <label htmlFor="nationalCard">کد ملی</label>
                                          <div className="invalid-feedback">
                                          کد ملی را وارد کنید.
                                          </div>
                                      </div>
                                </div>

                            <hr className='bg-primary mb-5'/>

                        <div className='d-flex gap-2 mb-5'>
                                <div className="col form-floating ">
                                    <CurrencyInput
                                      className='form-control'
                                      id="guaranteeApproved"
                                      prefix="ریال "
                                      name="Guarantee Approved"
                                      placeholder="ریال 1,000"
                                      disabled={props.editDocumentIndividuals}
                                      required/>
                                    <label htmlFor="guaranteeApproved">تضمین مصوب</label>
                                    <div className="invalid-feedback">
                                        مبلغ تضمین مصوب را وارد کنید.
                                    </div>
                                </div>
                            <div className="col-3 form-floating">
                                    <input className="form-control" type='search' list="workLocationList" id="workLocation" disabled={props.editDocumentIndividuals}
                                    placeholder="دزفول" required/>
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
                                    محل کار را انتخاب کنید.
                                    </div>
                            </div>
                            <div className="col  form-floating">
                                    <input type="text" className="form-control" id="job"
                                    placeholder="حسابدار" disabled={props.editDocumentIndividuals} required/>
                                    <label htmlFor="job">شغل</label>
                                    <div className="invalid-feedback">
                                    شغل را وارد کنید.
                                    </div>
                            </div>
                        </div>


                        <hr className='bg-primary mb-5'/>

                            <div className='d-flex gap-2'>

                                 <div className="col-3 form-floating mb-3">
                                       <CurrencyInput
                                          className='form-control'
                                          id="commitmentPrice"
                                          prefix="ریال "
                                          name="Commitment Price"
                                          placeholder="ریال 640,000"
                                          onChange={(e) => setIsCommitmentPriceEmpty(e.target.value)}
                                          disabled={props.editDocumentIndividuals}
                                          required/>
                                       <label htmlFor="commitmentPrice">مبلغ تضمین</label>
                                       <div className="invalid-feedback">
                                       مبلغ تضمین  وارد کنید.
                                       </div>
                                 </div>

                                      {(() => {
                                             if (isCommitmentPriceEmpty.length !== 0) {
                                                return (
                                                             <div className="col-2 form-floating">
                                                                <input className="form-control" type='search' list="typeBailList" id="typeBail" placeholder="بانک"
                                                                onChange={(e) => setIsTypeBail1Empty(e.target.value)} disabled={props.editDocumentIndividuals} required/>
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
                                                )
                                            }
                                      })()}

                                      {(() => {
                                              if (isTypeBail1Empty.length !==0) {
                                                  return (
                                                      <Fragment>
                                                            <div className="col form-floating ">
                                                                <input type="text" placeholder={firstBail} aria-label="First Bail" id='firstBail' className="form-control"
                                                                disabled={props.editDocumentIndividuals} required/>
                                                                <label htmlFor="firstBail">{firstBail}</label>
                                                                <div className="invalid-feedback">
                                                                 {firstBail} را وارد کنید.
                                                                </div>
                                                            </div>

                                                             <div className="col form-floating mb-3">
                                                                <input type="text" placeholder={secondBail} id='secondBail' aria-label="Second Bail" className="form-control"
                                                                disabled={props.editDocumentIndividuals} required/>
                                                                <label htmlFor="secondBail">{secondBail}</label>
                                                                <div className="invalid-feedback">
                                                                 {secondBail} را وارد کنید.
                                                                </div>
                                                             </div>
                                                      </Fragment>

                                                )
                                              }
                                          })()}
                            </div>

                            <hr className='bg-primary mb-5'/>

                            <div className='row  mb-2 align-items-center '>
                                    <div className='d-flex col align-items-center'>
                                          <p className='me-2'>در</p>
                                          <div>
                                             <DatePicker
                                                animations={[transition()]}
                                                render={<CustomInputDate disabled={props.editDocumentIndividuals} label='تاریخ'/>}
                                                id="clearedDatePicker"
                                                calendar={persian}
                                                locale={persian_fa}
                                             />
                                          </div>
                                          <p className='ms-2'>تسویه شده</p>
                                    </div>

                                    <div className="form-check col ms-4">
                                            <input className="form-check-input" type="checkbox" value=""
                                            id="receivedDocument" disabled={props.editDocumentIndividuals}/>
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

export default Modal