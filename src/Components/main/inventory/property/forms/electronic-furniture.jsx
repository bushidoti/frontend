import React, {Fragment, useContext, useEffect, useState} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import Url from "../../../../config";
import axios from "axios";
import Swal from "sweetalert2";

export const ElectronicFurniture = () => {
    const form = useContext(Contextform)
    const [property, setProperty] = useState([])
    const [getName, setGetName] = useState([])
    let today = new Date().toLocaleDateString('fa-IR');
    const formik = useFormik({
        initialValues: {
              code: "",
              name: "",
              inventory: "",
              install_location: "",
              user: "",
              model: "",
              year_buy: "",
              description: "",
              type_register: "",
            },
            enableReinitialize: true,
            });

    function refreshPages() {
        window.location.reload()
    }

    const fetchDataName = async () => {
        const response = await fetch(`${Url}/api/electronicfurniture/${formik.values.code}`)
        const data = await response.json()
        setGetName(data)
      }

    const fetchDataProperty = async () => {
        const response = await fetch(`${Url}/api/electronicfurniture`)
        const data = await response.json()
        setProperty(data)
      }

    const postHandler = async () => {
           await axios.post(
            `${Url}/api/electronicfurniture/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              model: formik.values.model,
              year_buy: formik.values.year_buy,
              install_location: formik.values.install_location,
              inventory: form.message,
              type_register: 'ثبت اولیه',
              date: today.replaceAll('/' , '-'),
         })
           setTimeout(
                    refreshPages, 3000)
        }

    const putHandlerAutoIncrement = async () => {
           await axios.put(
            `${Url}/api/autoincrementproperty/1/`,
              {
              electronic_furniture_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.electronic_furniture_01+1 : form.autoIncrement.electronic_furniture_01,
              electronic_furniture_02: form.message === 'چابهار' ? form.autoIncrement.electronic_furniture_02+1 : form.autoIncrement.electronic_furniture_02,
              electronic_furniture_03: form.message === 'دزفول' ? form.autoIncrement.electronic_furniture_03+1 : form.autoIncrement.electronic_furniture_03,
              electronic_furniture_04: form.message === 'جاسک' ? form.autoIncrement.electronic_furniture_04+1 : form.autoIncrement.electronic_furniture_04,
              electronic_furniture_05: form.message === 'بیشه کلا' ? form.autoIncrement.electronic_furniture_05+1 : form.autoIncrement.electronic_furniture_05,
              electronic_furniture_06: form.message === 'اورهال تهران' ? form.autoIncrement.electronic_furniture_06+1 : form.autoIncrement.electronic_furniture_06,
              electronic_furniture_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.electronic_furniture_07+1 : form.autoIncrement.electronic_furniture_07,
         })
        }

    const postAlert = () => {
          Swal.fire({
              title: 'مطمئنید?',
              text: "آیا از ثبت این اموال مطمئنید ؟",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'انصراف',
              confirmButtonText: 'بله, ثبت کن!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'ثبت شد!',
                  'اموال ثبت شد.',
                  'success',
                  'ok',
                  postHandler(),
                  putHandlerAutoIncrement(),
                )
              }
            })
      }

    const postHandlerRepair = async () => {
           await axios.post(
            `${Url}/api/repairedelectronicfurniture/`,
              {
              electronic_furniture: formik.values.code,
              name: getName.name,
              description: formik.values.description,
              date: today.replaceAll('/' , '-'),
         })
           setTimeout(
                    refreshPages, 3000)
        }

    const postAlertRepair = () => {
          Swal.fire({
              title: 'مطمئنید?',
              text: "آیا از ثبت تعمیر این اموال مطمئنید ؟",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'انصراف',
              confirmButtonText: 'بله, ثبت کن!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'ثبت شد!',
                  'اموال ثبت شد.',
                  'success',
                  'ok',
                  postHandlerRepair(),
                )
              }
            })
      }

    const handleAutoIncrement = () => {
        if (form.message === 'دفتر مرکزی') {
            return form.autoIncrement.electronic_furniture_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.electronic_furniture_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.electronic_furniture_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.electronic_furniture_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.electronic_furniture_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.electronic_furniture_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.electronic_furniture_07
        }
    }

     useEffect(() => {
          void fetchDataProperty()
          void fetchDataName()
          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [formik.values.code])

     const handleSubmit = () => {
        if (formik.values.type_register === 'ثبت اولیه'){
            return postAlert
        }else  if (formik.values.type_register === 'تعمیرات'){
            return postAlertRepair
        }
    }

    return(
     <form className='needs-validation' noValidate>
        <Fragment>
               {formik.values.type_register === 'ثبت اولیه' ?
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="register_code" className="w-25 form-control" aria-label="Username"
                aria-describedby="register_code" value={handleAutoIncrement()} disabled required/>
                <label  htmlFor="register_code">کد ثبت</label>
              </div>
             : null}
               <div className='d-flex gap-2'>
                    <div className="col form-floating mb-3 ">
                        <select className="form-select" defaultValue='' id="typeAdd" aria-label="Type Add" onChange={(e) => {
                           form.setIsRepair(e.target.value)
                            formik.setFieldValue('type_register' , e.target.value)
                        }} required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="ثبت اولیه">ثبت اولیه</option>
                            <option value="تعمیرات">تعمیرات</option>
                        </select>
                        <label htmlFor="typeAdd">نوع ثبت</label>
                           <div className="invalid-feedback">
                             نوع ثبت را انتخاب کنید.
                         </div>
                    </div>
                   {(() => {
                       if (form.isRepair === 'تعمیرات'){
                           return (
                               <Fragment>
                                     <div className="col form-floating mb-3">
                                            <select className="form-select" defaultValue='' id="register_code"
                                                onChange={e => formik.setFieldValue('code' , e.target.value)} name='register_code' aria-label="Type Add" required>
                                                <option value='' disabled>یک مورد انتخاب کنید</option>
                                                {(property.filter(property => property.inventory ===  form.message).map((data) => (
                                                    <option key={data.code} value={data.code}>{data.code} - {data.name}</option>
                                                )))}
                                            </select>
                                        <label htmlFor="register_code">کد</label>
                                         <div className="invalid-feedback">
                                             کد را وارد کنید.
                                         </div>
                                     </div>
                               </Fragment>
                           )
                       }else if (form.isRepair === 'ثبت اولیه'){
                           return (
                               <Fragment>
                                      <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="nameFurniture" name='name' onChange={formik.handleChange}
                                                   placeholder="لپ تاپ" required/>
                                                <label htmlFor="nameFurniture">نام اثاث</label>
                                             <div className="invalid-feedback">
                                                 نام اثاث را وارد کنید.
                                             </div>
                                         </div>

                                         <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="year" name='year_buy' onChange={formik.handleChange}
                                                   placeholder="1400" required/>
                                                <label htmlFor="year">سال خرید</label>
                                             <div className="invalid-feedback">
                                                 سال خرید را وارد کنید.
                                             </div>
                                      </div>
                               </Fragment>
                           )
                       }
                   })()}
                </div>
                    {(() => {
                        if (form.isRepair === 'تعمیرات'){
                            return(
                                <Fragment>
                                     <hr className='bg-primary mb-5'/>
                                     <div className='d-flex gap-2'>
                                       <div className="col form-floating">
                                            <textarea className="form-control" id="describeRepair" name='description' onChange={formik.handleChange}
                                            placeholder="...." required/>
                                            <label htmlFor="describeRepair">شرح تعمیرات</label>
                                            <div className="invalid-feedback">
                                            شرح تعمیرات را وارد کنید.
                                            </div>
                                       </div>
                                     </div>
                                </Fragment>
                            )
                        }else if (form.isRepair === 'ثبت اولیه'){
                            return(
                                <Fragment>
                                 <hr className='bg-primary mb-5'/>
                                 <div className='d-flex gap-2'>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="user" name='user' onChange={formik.handleChange}
                                        placeholder="فرودگاه" required/>
                                            <label htmlFor="user">یوزر</label>
                                            <div className="invalid-feedback">
                                            یوزر را وارد کنید.
                                            </div>
                                    </div>

                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="location" name='install_location' onChange={formik.handleChange}
                                        placeholder="شرکت" required/>
                                            <label htmlFor="location">محل نصب</label>
                                            <div className="invalid-feedback">
                                            محل نصب را وارد کنید.
                                            </div>
                                    </div>
                                    <div className="col form-floating">
                                    <input type="text" className="form-control" id="model" name='model' onChange={formik.handleChange}
                                           placeholder="12BA" required/>
                                        <label htmlFor="model">مدل</label>
                                     <div className="invalid-feedback">
                                         مدل را وارد کنید.
                                     </div>
                                    </div>
                                    </div>
                                </Fragment>
                            )
                        }
                    })()}
                  <div className='d-flex flex-column mt-2'>
                      <button type="button" className="btn material-symbols-outlined btn-success align-self-end" onClick={handleSubmit()}>done</button>
                  </div>
        </Fragment>
    </form>

    )
}