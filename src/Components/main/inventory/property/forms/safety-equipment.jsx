import React, {Fragment, useContext, useEffect, useState} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import Url from "../../../../config";
import axios from "axios";
import Swal from "sweetalert2";

export const SafetyEquipment = () => {
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
          use_for: "",
          description: "",
          type_register: "",
        },
        enableReinitialize: true,
        });

    function refreshPages() {
        window.location.reload()
    }


    const fetchDataName = async () => {
            const response = await fetch(`${Url}/api/safetyequipment/${formik.values.code}`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
            const data = await response.json()
            setGetName(data)
          }

    const fetchDataProperty = async () => {
        const response = await fetch(`${Url}/api/safetyequipment`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setProperty(data)
      }

    const postHandler = async () => {
           await axios.post(
            `${Url}/api/safetyequipment/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              use_for: formik.values.use_for,
              install_location: formik.values.install_location,
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
              safety_equipment_01: form.office === 'دفتر مرکزی' ? form.autoIncrement.safety_equipment_01+1 : form.autoIncrement.safety_equipment_01,
              safety_equipment_02: form.office === 'چابهار' ? form.autoIncrement.safety_equipment_02+1 : form.autoIncrement.safety_equipment_02,
              safety_equipment_03: form.office === 'دزفول' ? form.autoIncrement.safety_equipment_03+1 : form.autoIncrement.safety_equipment_03,
              safety_equipment_04: form.office === 'جاسک' ? form.autoIncrement.safety_equipment_04+1 : form.autoIncrement.safety_equipment_04,
              safety_equipment_05: form.office === 'بیشه کلا' ? form.autoIncrement.safety_equipment_05+1 : form.autoIncrement.safety_equipment_05,
              safety_equipment_06: form.office === 'اورهال تهران' ? form.autoIncrement.safety_equipment_06+1 : form.autoIncrement.safety_equipment_06,
              safety_equipment_07: form.office === 'اورهال اصفهان' ? form.autoIncrement.safety_equipment_07+1 : form.autoIncrement.safety_equipment_07,
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
            `${Url}/api/repairedsafetyequipment/`,
              {
              safety_equipment: formik.values.code,
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
            return form.autoIncrement.safety_equipment_01
        } else if (form.office === 'چابهار') {
            return form.autoIncrement.safety_equipment_02
        } else if (form.office === 'دزفول') {
            return form.autoIncrement.safety_equipment_03
        } else if (form.office === 'جاسک') {
            return form.autoIncrement.safety_equipment_04
        } else if (form.office === 'بیشه کلا') {
            return form.autoIncrement.safety_equipment_05
        } else if (form.office === 'اورهال تهران') {
            return form.autoIncrement.safety_equipment_06
        } else if (form.office === 'اورهال اصفهان') {
            return form.autoIncrement.safety_equipment_07
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
                            <input type="text" id="register_code" className="w-25 form-control" aria-label="register_code"
                            aria-describedby="register_code" value={form.editStatus ?  form.idNumber :handleAutoIncrement()} disabled required/>
                            <label  htmlFor="register_code">کد ثبت</label>
                        </div>
                     : null}
               <div className='d-flex gap-2'>
                   {form.editStatus === false ?
                       <div className="col form-floating mb-3">
                        <select className="form-select" defaultValue='' id="typeAdd" name='type_register' aria-label="Type Add" onChange={(e) => {
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
                            if (form.isRepair === 'تعمیرات'){
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
                            }else if (form.isRepair === 'ثبت اولیه' || form.editStatus) {
                                return(
                                       <Fragment>
                                           <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" name='name' disabled={form.viewOnly}
                                                       value={form.editStatus ? form.formik.values.name : formik.values.name} id="nameEquipment" onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                       placeholder="کلاه ایمنی" required/>
                                                    <label htmlFor="nameEquipment">نام تجهیزات</label>
                                                 <div className="invalid-feedback">
                                                     نام تجهیزات را وارد کنید.
                                                 </div>
                                             </div>
                                             <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="use_for" name='use_for' disabled={form.viewOnly}
                                                       value={form.editStatus ? form.formik.values.use_for : formik.values.use_for} onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                       placeholder="ساختمان" required/>
                                                    <label htmlFor="use_for">مورد استفاده</label>
                                                 <div className="invalid-feedback">
                                                     مورد استفاده را وارد کنید.
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
                                            <textarea className="form-control" name='description' id="describeRepair" onChange={formik.handleChange}
                                            placeholder="...." required/>
                                            <label htmlFor="describeRepair">شرح تعمیرات</label>
                                            <div className="invalid-feedback">
                                            شرح تعمیرات را وارد کنید.
                                            </div>
                                       </div>
                                       </div>
                                    </Fragment>
                                )
                            }else if (form.isRepair === 'ثبت اولیه' || form.editStatus) {
                                return(
                                       <Fragment>
                                         <hr className='bg-primary mb-5'/>
                                        <div className='d-flex gap-2'>
                                            <div className="col form-floating">
                                                    <input type="text" className="form-control" id="user" name='user' disabled={form.viewOnly}
                                                           value={form.editStatus ? form.formik.values.user : formik.values.user} onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                    placeholder="فرودگاه" required/>
                                                        <label htmlFor="user">یوزر</label>
                                                        <div className="invalid-feedback">
                                                        یوزر را وارد کنید.
                                                        </div>
                                               </div>

                                               <div className="col form-floating">
                                                    <input type="text" className="form-control" id="install_location" name='install_location' disabled={form.viewOnly}
                                                           value={form.editStatus ? form.formik.values.install_location : formik.values.install_location}
                                                    onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                    placeholder="شرکت" required/>
                                                        <label htmlFor="install_location">محل نصب</label>
                                                        <div className="invalid-feedback">
                                                        محل نصب را وارد کنید.
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