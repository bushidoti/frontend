import React, {Fragment} from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
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
                                                'ویرایش سند'
                                            )
                                        }else if (props.ModalTitle === 'done'){
                                            return (
                                                'فروش'
                                            )
                                        }else if (props.ModalTitle === 'add'){
                                            return (
                                                'ثبت سند'
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
                                <input type="text" id="Id" className="w-25 form-control" aria-label="ID"
                                aria-describedby="REGISTER ID" value='' disabled required/>
                                <label  id="numberId">شماره ثبت</label>
                            </div>

                            <div className='d-flex gap-2'>
                                    <div className="form-floating  col">
                                            <select className="form-select" id="typePropertySelector"
                                                    aria-label="Type Property Selector" disabled={props.editProperty}>
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
                                            <label htmlFor="typePropertySelector">نوع</label>
                                    </div>

                                <div className="col form-floating mb-3 ">
                                    <input type="text" className="form-control" id="name"
                                    placeholder="وانت" disabled={props.editProperty} required />
                                    <div className="invalid-feedback">
                                    لطفا {props.propToggle?'نام':'سیستم'} را وارد کنید.
                                    </div>
                                    <label htmlFor="name">{props.propToggle?'نام':'سیستم'}</label>
                                </div>
                        </div>


                            <div className='d-flex gap-2 mb-5'>
                                <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="docNumber"
                                    placeholder="12/پ-7532" disabled={props.editProperty} required/>
                                    <label htmlFor="docNumber">شماره سند</label>
                                    <div className="invalid-feedback">
                                    شماره سند را وارد کنید.
                                    </div>
                                </div>
                                <div className="col  form-floating">
                                    <input type="text" className="form-control" id="plateMotor"
                                    placeholder="26/د"  disabled={props.editProperty} required/>
                                    <label htmlFor="plateMotor">{props.propToggle ? 'پلاک' :  'شماره موتور'}</label>
                                    <div className="invalid-feedback">
                                    {props.propToggle ? 'پلاک' :  'شماره موتور'} را وارد کنید.
                                    </div>
                                </div>
                                <div className="col  form-floating">
                                    <input type="text" className="form-control" id="address"
                                    placeholder="افسریه قصرفیروزه 1" disabled={props.editProperty} required/>
                                    <label htmlFor="address">{props.propToggle ? 'آدرس' :  'شماره شاسی'}</label>
                                    <div className="invalid-feedback">
                                    {props.propToggle ? 'آدرس' :  'شماره شاسی'} را وارد کنید.
                                    </div>
                                </div>
                                <div className="col  form-floating">
                                    <input type="text" className="form-control" id="landlord"
                                    placeholder="علی عبدلی" disabled={props.editProperty} required/>
                                    <label htmlFor="landlord">نام مالک</label>
                                    <div className="invalid-feedback">
                                    نام مالک را وارد کنید.
                                    </div>
                                </div>
                            </div>
                            <hr className='bg-primary mb-5'/>
                            <div className='d-flex gap-2 mb-5'>
                                 <div className="col  form-floating">
                                    <input type="text" className="form-control" id="modelMeter"
                                    placeholder="1000 هکتار" disabled={props.editProperty} required/>
                                    <label htmlFor="modelMeter">{props.propToggle ? 'متراژ' :  'مدل'}</label>
                                    <div className="invalid-feedback">
                                    {props.propToggle ? 'متراژ' :  'مدل'} را وارد کنید.
                                    </div>
                                 </div>

                                 <div className="col  form-floating">
                                      {props.propToggle ?
                                          <Fragment>
                                            <input type="text" className="form-control" id="madeOf"
                                            placeholder="1399" disabled={props.editProperty} required/>
                                            <label htmlFor="madeOf">سال ساخت</label>
                                            <div className="invalid-feedback">
                                            سال ساخت را وارد کنید.
                                            </div>
                                          </Fragment>
                                          :

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
                                            <span className="input-group-text c-form__car-plate-input rounded-8"></span>
                                          </div>
                                      }
                                 </div>
                            </div>
                            <div className="col form-floating">
                                <textarea  className="form-control" id="description"
                                placeholder="تهران ....." disabled={props.editProperty} required/>
                                <label htmlFor="description">{props.propToggle ? 'توضیحات' :  'محل استقرار'}</label>
                                <div className="invalid-feedback">
                                {props.propToggle ? 'توضیحات' :  'محل استقرار'} را وارد کنید.
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
                                                <input type="text" className="form-control" id="paperDoc"
                                                placeholder="....." disabled={props.editProperty} required/>
                                                <label htmlFor="paperDoc">برگه سند</label>
                                                <div className="invalid-feedback">
                                                برگه سند را وارد کنید.
                                                </div>
                                              </div>
                                        <div className="col  form-floating">
                                               <input type="text" className="form-control" id="insurancePaper"
                                               placeholder="....." disabled={props.editProperty} required/>
                                               <label htmlFor="insurancePaper">بیمه نامه</label>
                                               <div className="invalid-feedback">
                                               بیمه نامه را وارد کنید.
                                               </div>
                                        </div>
                                        <div className="col  form-floating">
                                            <input type="text" className="form-control" id="gasCard"
                                            placeholder="....." disabled={props.editProperty} required/>
                                            <label htmlFor="gasCard">کارت سوخت</label>
                                            <div className="invalid-feedback">
                                            کارت سوخت را وارد کنید.
                                            </div>
                                        </div>
                                        <div className="col  form-floating">
                                            <input type="text" className="form-control" id="carCard"
                                            placeholder="....." disabled={props.editProperty} required/>
                                            <label htmlFor="carCard">کارت ماشین</label>
                                            <div className="invalid-feedback">
                                            کارت ماشین را وارد کنید.
                                            </div>
                                        </div>
                            </div>
                                        <div className="col  form-floating">
                                            <textarea  className="form-control" id="description"
                                            placeholder="....." disabled={props.editProperty} required/>
                                            <label htmlFor="description">توضیحات</label>
                                            <div className="invalid-feedback">
                                            توضیحات را وارد کنید.
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
                                                 id="soldDatePicker"
                                                 calendar={persian}
                                                 locale={persian_fa}
                                             />
                                             </div>
                                             <p className='ms-2'>فروخته شده</p>
                                        </div>
                                        <div className="col  form-floating">
                                            <input type="text" className="form-control" id="buyer"
                                            placeholder="محمد حسنی" disabled={props.editProperty} required/>
                                            <label htmlFor="buyer">نام خریدار</label>
                                            <div className="invalid-feedback">
                                            نام خریدار را وارد کنید.
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
export default Modal