import React, {Fragment, useContext, useEffect, useState} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import Url from "../../../../config";
import axios from "axios";
import Swal from "sweetalert2";

export const AirportEquipment = () => {
    const form = useContext(Contextform)
    const [property, setProperty] = useState([])
    const [getName, setGetName] = useState([])
    let today = new Date().toLocaleDateString('fa-IR');

    const formik = useFormik({
    initialValues: {
          code: "",
          name: "",
          model: "",
          year_made: "",
          owner: "",
          inventory: "",
          install_location: "",
          user: "",
          description: "",
          type_register: "",
          repaired_type: "",
        },
        enableReinitialize: true,
        });

    function refreshPages() {
        window.location.reload()
    }

     const fetchDataName = async () => {
            const response = await fetch(`${Url}/api/airportequipment/${formik.values.code}`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
            const data = await response.json()
            setGetName(data)
          }


    const fetchDataProperty = async () => {
        const response = await fetch(`${Url}/api/airportequipment`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setProperty(data)
      }

    const postHandler = async () => {
           await axios.post(
            `${Url}/api/airportequipment/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              model: formik.values.model,
              use_for: formik.values.use_for,
              year_made: formik.values.year_made,
              owner: formik.values.owner,
              install_location: formik.values.install_location,
              inventory: form.message,
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
              airport_equipment_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.airport_equipment_01+1 : form.autoIncrement.airport_equipment_01,
              airport_equipment_02: form.message === 'چابهار' ? form.autoIncrement.airport_equipment_02+1 : form.autoIncrement.airport_equipment_02,
              airport_equipment_03: form.message === 'دزفول' ? form.autoIncrement.airport_equipment_03+1 : form.autoIncrement.airport_equipment_03,
              airport_equipment_04: form.message === 'جاسک' ? form.autoIncrement.airport_equipment_04+1 : form.autoIncrement.airport_equipment_04,
              airport_equipment_05: form.message === 'بیشه کلا' ? form.autoIncrement.airport_equipment_05+1 : form.autoIncrement.airport_equipment_05,
              airport_equipment_06: form.message === 'اورهال تهران' ? form.autoIncrement.airport_equipment_06+1 : form.autoIncrement.airport_equipment_06,
              airport_equipment_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.airport_equipment_07+1 : form.autoIncrement.airport_equipment_07,
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
            `${Url}/api/repairedairportequipment/`,
              {
              airport_equipment: formik.values.code,
              repaired_type: formik.values.repaired_type,
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
        if (form.message === 'دفتر مرکزی') {
            return form.autoIncrement.airport_equipment_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.airport_equipment_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.airport_equipment_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.airport_equipment_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.airport_equipment_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.airport_equipment_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.airport_equipment_07
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
                <label  id="register_code">کد ثبت</label>
              </div>
             : null}
               <div className='d-flex gap-2'>
                   {form.editStatus === false ?
                    <div className="col form-floating mb-3 ">
                        <select className="form-select" id="typeAdd" defaultValue='' aria-label="Type Add" onChange={(e) => {
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
                            if (form.isRepair === 'تعمیرات') {
                                return (
                                    <Fragment>
                                           <div className="col form-floating mb-3 ">
                                            <select className="form-select" defaultValue='' id="typeRepair" name='repaired_type'
                                            onChange={formik.handleChange} aria-label="Type Repair" required>
                                                <option value='' disabled>یک مورد انتخاب کنید</option>
                                                <option value="تعویض روغن">تعویض روغن</option>
                                                <option value="تعویض باتری">تعویض باتری</option>
                                                <option value="تعویض قطعات">تعویض قطعات</option>
                                                <option value="تعویض لاستیک">تعویض لاستیک</option>
                                            </select>
                                            <label htmlFor="typeAdd">نوع تعمیر</label>
                                               <div className="invalid-feedback">
                                                 نوع تعمیر را انتخاب کنید.
                                             </div>
                                     </div>
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
                            }else if (form.isRepair === 'ثبت اولیه' || form.editStatus) {
                                return(
                                       <Fragment>
                                             <div className="col-2 form-floating">
                                                    <input className="form-control" list="nameEquipmentList" type='search' name='name' id="nameEquipment" disabled={form.viewOnly}
                                                    value={form.editStatus ? form.formik.values.name : formik.values.name}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange} placeholder="نقاله" required/>
                                                    <label htmlFor="nameEquipment">نام تجهیزات</label>
                                                    <datalist id="nameEquipmentList" >
                                                        <option value="X RAY"/>
                                                        <option value="نقاله"/>
                                                        <option value="کانتر"/>
                                                        <option value="ایرکاندیشن"/>
                                                    </datalist>
                                                    <div className="invalid-feedback">
                                                    نام تجهیزات را انتخاب کنید.
                                                    </div>
                                               </div>
                                             <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="model" name='model' disabled={form.viewOnly}
                                                       value={form.editStatus ? form.formik.values.model : formik.values.model}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                       placeholder="12BA" required/>
                                                    <label htmlFor="model">مدل</label>
                                                 <div className="invalid-feedback">
                                                     مدل را وارد کنید.
                                                 </div>
                                             </div>
                                             <div className="col form-floating mb-3">
                                                <input type="number" className="form-control" id="MadeOf" name='year_made' disabled={form.viewOnly}
                                                       value={form.editStatus ? form.formik.values.year_made : formik.values.year_made}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                       placeholder="2020" required/>
                                                    <label htmlFor="MadeOf">سال ساخت</label>
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
                        if (form.isRepair === 'تعمیرات') {
                            return (
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
                        }else if (form.isRepair === 'ثبت اولیه' || form.editStatus) {
                            return (
                                <Fragment>
                                      <hr className='bg-primary mb-5'/>
                                      <div className='d-flex gap-2'>
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
                                       <div className="col form-floating">
                                            <input type="text" className="form-control" id="owner" name='owner' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.owner : formik.values.owner}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                            placeholder="فرودگاه" required/>
                                                <label htmlFor="owner">مالکیت</label>
                                                <div className="invalid-feedback">
                                                مالکیت را وارد کنید.
                                                </div>
                                       </div>
                                       <div className="col form-floating">
                                            <input type="text" className="form-control" id="location" name='install_location' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.install_location : formik.values.install_location}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                            placeholder="شرکت" required/>
                                                <label htmlFor="location">محل نصب</label>
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