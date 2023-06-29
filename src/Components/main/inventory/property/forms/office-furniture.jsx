import React, {Fragment, useContext, useEffect, useState} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import Url from "../../../../config";
import axios from "axios";
import Swal from "sweetalert2";

export const OfficeFurniture = () => {
    const form = useContext(Contextform)
    const [property, setProperty] = useState([])
    const [getName, setGetName] = useState([])
    let today = new Date().toLocaleDateString('fa-IR');
    const formik = useFormik({
        initialValues: {
              code: "",
              name: "",
              inventory: "",
              using_location: "",
              user: "",
              year_made: "",
              description: "",
              type_register: "",
            },
            enableReinitialize: true,
            });

    function refreshPages() {
        window.location.reload()
    }

    const fetchDataName = async () => {
        const response = await fetch(`${Url}/api/officefurniture/${formik.values.code}`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setGetName(data)
      }

    const fetchDataProperty = async () => {
        const response = await fetch(`${Url}/api/officefurniture`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setProperty(data)
      }

    const postHandler = async () => {
           await axios.post(
            `${Url}/api/officefurniture/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              year_made: formik.values.year_made,
              using_location: formik.values.using_location,
              inventory: form.office,
              type_register: 'ثبت اولیه',
              date: today.replaceAll('/' , '-'),
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
           setTimeout(
                    refreshPages, 3000)
        }

    const putHandlerAutoIncrement = async () => {
           await axios.put(
            `${Url}/api/autoincrementproperty/1/`,
              {
              office_furniture_01: form.office === 'دفتر مرکزی' ? form.autoIncrement.office_furniture_01+1 : form.autoIncrement.office_furniture_01,
              office_furniture_02: form.office === 'چابهار' ? form.autoIncrement.office_furniture_02+1 : form.autoIncrement.office_furniture_02,
              office_furniture_03: form.office === 'دزفول' ? form.autoIncrement.office_furniture_03+1 : form.autoIncrement.office_furniture_03,
              office_furniture_04: form.office === 'جاسک' ? form.autoIncrement.office_furniture_04+1 : form.autoIncrement.office_furniture_04,
              office_furniture_05: form.office === 'بیشه کلا' ? form.autoIncrement.office_furniture_05+1 : form.autoIncrement.office_furniture_05,
              office_furniture_06: form.office === 'اورهال تهران' ? form.autoIncrement.office_furniture_06+1 : form.autoIncrement.office_furniture_06,
              office_furniture_07: form.office === 'اورهال اصفهان' ? form.autoIncrement.office_furniture_07+1 : form.autoIncrement.office_furniture_07,
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
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
            `${Url}/api/repairedofficefurniture/`,
              {
              office_furniture: formik.values.code,
              name: getName.name,
              description: formik.values.description,
              date: today.replaceAll('/' , '-'),
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
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
        if (form.office === 'دفتر مرکزی') {
            return form.autoIncrement.office_furniture_01
        } else if (form.office === 'چابهار') {
            return form.autoIncrement.office_furniture_02
        } else if (form.office === 'دزفول') {
            return form.autoIncrement.office_furniture_03
        } else if (form.office === 'جاسک') {
            return form.autoIncrement.office_furniture_04
        } else if (form.office === 'بیشه کلا') {
            return form.autoIncrement.office_furniture_05
        } else if (form.office === 'اورهال تهران') {
            return form.autoIncrement.office_furniture_06
        } else if (form.office === 'اورهال اصفهان') {
            return form.autoIncrement.office_furniture_07
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
               {formik.values.type_register === 'ثبت اولیه' || form.editStatus ?
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="register_code" className="w-25 form-control" aria-label="Username"
                aria-describedby="register_code" value={form.editStatus ?  form.idNumber :handleAutoIncrement()} disabled required/>
                <label  htmlFor="register_code">کد ثبت</label>
              </div>
             : null}
               <div className='d-flex gap-2'>
                   {form.editStatus === false ?
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
                   : null}
                   {(() => {
                       if(form.isRepair === 'تعمیرات'){
                           return(
                               <Fragment>
                                       <div className="col form-floating mb-3">
                                                <select className="form-select" defaultValue='' id="register_code"
                                                    onChange={e => formik.setFieldValue('code' , e.target.value)} name='register_code' aria-label="Type Add" required>
                                                    <option value='' disabled>یک مورد انتخاب کنید</option>
                                                    {(property.filter(property => property.inventory ===  form.office).map((data) => (
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
                       }else if(form.isRepair === 'ثبت اولیه' || form.editStatus){
                           return(
                               <Fragment>
                                     <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="nameFurniture" name='name' disabled={form.viewOnly}
                                               value={form.editStatus ? form.formik.values.name : formik.values.name}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                               placeholder="لپ تاپ" required/>
                                            <label htmlFor="nameFurniture">نام اثاث</label>
                                         <div className="invalid-feedback">
                                             نام اثاث را وارد کنید.
                                         </div>
                                     </div>

                                     <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="year" name='year_made' disabled={form.viewOnly}
                                               value={form.editStatus ? form.formik.values.year_made : formik.values.year_made}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                               placeholder="1400" required/>
                                            <label htmlFor="year">سال ساخت</label>
                                         <div className="invalid-feedback">
                                             سال ساخت را وارد کنید.
                                         </div>
                                     </div>
                               </Fragment>
                           )
                       }
                   })()}
                </div>
                    {(() => {
                       if(form.isRepair === 'تعمیرات'){
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
                       }else if(form.isRepair === 'ثبت اولیه' || form.editStatus){
                           return(
                               <Fragment>
                                   <hr className='bg-primary mb-5'/>
                                   <div className='d-flex gap-2'>
                                       <div className="col form-floating">
                                            <input type="text" className="form-control" id="locationUse" name='using_location' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.using_location : formik.values.using_location}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                            placeholder="شرکت" required/>
                                                <label htmlFor="locationUse">محل استفاده</label>
                                                <div className="invalid-feedback">
                                                محل استفاده را وارد کنید.
                                                </div>
                                       </div>
                                       <div className="col form-floating">
                                            <input type="text" className="form-control" id="user" name='user' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.user : formik.values.user}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                            placeholder="فرودگاه" required/>
                                                <label htmlFor="user">یوزر</label>
                                                <div className="invalid-feedback">
                                                یوزر را وارد کنید.
                                                </div>
                                       </div>
                                   </div>
                               </Fragment>
                           )
                       }
                   })()}
              {form.viewOnly ? null :
                <div className='d-flex flex-column mt-2'>
                          <button type="button" className="btn material-symbols-outlined btn-success align-self-end" onClick={handleSubmit()}>done</button>
                </div>
                 }
        </Fragment>
    </form>

    )
}