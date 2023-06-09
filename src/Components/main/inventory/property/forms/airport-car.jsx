import React, {Fragment, useContext, useEffect, useState} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import Url from "../../../../config";
import axios from "axios";
import Swal from "sweetalert2";

export const AirportCar = (props) => {
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
              plate1: "",
              plate2: "",
              plate3: "",
              plate4: "",
              motor: "",
              chassis: "",
              kilometer: "",
              year_changed: "",
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
        if (props.showForm === 'airportCar'){
            const response = await fetch(`${Url}/api/airportvehicle/${formik.values.code}`)
            const data = await response.json()
            setGetName(data)
        }else if (props.showForm === 'personalCar'){
            const response = await fetch(`${Url}/api/officevehicle/${formik.values.code}`)
            const data = await response.json()
            setGetName(data)
        }
          }

    const fetchDataProperty = async () => {
        if (props.showForm === 'airportCar'){
            const response = await fetch(`${Url}/api/airportvehicle`)
            const data = await response.json()
            setProperty(data)
        }else if (props.showForm === 'personalCar'){
            const response = await fetch(`${Url}/api/officevehicle`)
            const data = await response.json()
            setProperty(data)
        }
      }
    const postHandler = async () => {
        if (props.showForm === 'airportCar'){
           await axios.post(
            `${Url}/api/airportvehicle/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              model: formik.values.model,
              year_made: formik.values.year_made,
              motor: formik.values.motor,
              plate1: formik.values.plate1,
              plate2: formik.values.plate2,
              plate3: formik.values.plate3,
              plate4: formik.values.plate4,
              chassis: formik.values.chassis,
              owner: formik.values.owner,
              inventory: form.message,
              type_register: 'ثبت اولیه',
              date: today.replaceAll('/' , '-'),
         })}else if (props.showForm === 'personalCar'){
            await axios.post(
                `${Url}/api/officevehicle/`,
                  {
                  code: handleAutoIncrement(),
                  name: formik.values.name,
                  user: formik.values.user,
                  model: formik.values.model,
                  year_made: formik.values.year_made,
                  motor: formik.values.motor,
                  plate1: formik.values.plate1,
                  plate2: formik.values.plate2,
                  plate3: formik.values.plate3,
                  plate4: formik.values.plate4,
                  chassis: formik.values.chassis,
                  owner: formik.values.owner,
                  inventory: form.message,
                  type_register: 'ثبت اولیه',
                  date: today.replaceAll('/' , '-'),
             })
    }


           setTimeout(
                    refreshPages, 3000)
        }

    const putHandlerAutoIncrement = async () => {
        if (props.showForm === 'airportCar'){
           await axios.put(
            `${Url}/api/autoincrementproperty/1/`,
              {
              airport_vehicle_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.airport_vehicle_01+1 : form.autoIncrement.airport_vehicle_01,
              airport_vehicle_02: form.message === 'چابهار' ? form.autoIncrement.airport_vehicle_02+1 : form.autoIncrement.airport_vehicle_02,
              airport_vehicle_03: form.message === 'دزفول' ? form.autoIncrement.airport_vehicle_03+1 : form.autoIncrement.airport_vehicle_03,
              airport_vehicle_04: form.message === 'جاسک' ? form.autoIncrement.airport_vehicle_04+1 : form.autoIncrement.airport_vehicle_04,
              airport_vehicle_05: form.message === 'بیشه کلا' ? form.autoIncrement.airport_vehicle_05+1 : form.autoIncrement.airport_vehicle_05,
              airport_vehicle_06: form.message === 'اورهال تهران' ? form.autoIncrement.airport_vehicle_06+1 : form.autoIncrement.airport_vehicle_06,
              airport_vehicle_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.airport_vehicle_07+1 : form.autoIncrement.airport_vehicle_07,
         })}else if (props.showForm === 'personalCar'){
            await axios.put(
            `${Url}/api/autoincrementproperty/1/`,
              {
              office_vehicle_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.office_vehicle_01+1 : form.autoIncrement.office_vehicle_01,
              office_vehicle_02: form.message === 'چابهار' ? form.autoIncrement.office_vehicle_02+1 : form.autoIncrement.office_vehicle_02,
              office_vehicle_03: form.message === 'دزفول' ? form.autoIncrement.office_vehicle_03+1 : form.autoIncrement.office_vehicle_03,
              office_vehicle_04: form.message === 'جاسک' ? form.autoIncrement.office_vehicle_04+1 : form.autoIncrement.office_vehicle_04,
              office_vehicle_05: form.message === 'بیشه کلا' ? form.autoIncrement.office_vehicle_05+1 : form.autoIncrement.office_vehicle_05,
              office_vehicle_06: form.message === 'اورهال تهران' ? form.autoIncrement.office_vehicle_06+1 : form.autoIncrement.office_vehicle_06,
              office_vehicle_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.office_vehicle_07+1 : form.autoIncrement.office_vehicle_07,
         })
        }
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
        if (props.showForm === 'airportCar'){
           await axios.post(
            `${Url}/api/repairedairportvehicle/`,
              {
              airport_vehicle: formik.values.code,
              year_changed: formik.values.year_changed,
              repaired_type: formik.values.repaired_type,
              kilometer: formik.values.kilometer,
              name: getName.name,
              description: formik.values.description,
              date: today.replaceAll('/' , '-'),
         })}else if (props.showForm === 'personalCar'){
            await axios.post(
            `${Url}/api/repairedofficevehicle/`,
              {
              office_vehicle: formik.values.code,
              year_changed: formik.values.year_changed,
              repaired_type: formik.values.repaired_type,
              kilometer: formik.values.kilometer,
              name: getName.name,
              description: formik.values.description,
              date: today.replaceAll('/' , '-'),
         })}
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
    if (props.showForm === 'airportCar'){
        if (form.message === 'دفتر مرکزی') {
            return form.autoIncrement.airport_vehicle_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.airport_vehicle_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.airport_vehicle_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.airport_vehicle_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.airport_vehicle_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.airport_vehicle_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.airport_vehicle_07
        }
    }else if (props.showForm === 'personalCar'){
        if (form.message === 'دفتر مرکزی') {
            return form.autoIncrement.office_vehicle_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.office_vehicle_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.office_vehicle_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.office_vehicle_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.office_vehicle_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.office_vehicle_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.office_vehicle_07
        }
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
                <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                aria-describedby="basic-addon1" value={handleAutoIncrement()} disabled required/>
                <label  htmlFor="idNumber">کد ثبت</label>
              </div>
             : null}
               <div className='d-flex gap-2'>
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
                   {(() => {
                       if (form.isRepair === 'تعمیرات'){
                           return (
                               <Fragment>
                                         <div className="col form-floating mb-3 ">
                                            <select className="form-select" defaultValue='' id="typeRepair"
                                            aria-label="Type Repair" name='repaired_type' onChange={formik.handleChange} required>
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
                       }else if (form.isRepair === 'ثبت اولیه'){
                           return (
                               <Fragment>
                                     <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="nameCar" name='name' onChange={formik.handleChange}
                                               placeholder="شاتر" required/>
                                            <label htmlFor="nameCar">نام خودرو</label>
                                         <div className="invalid-feedback">
                                             نام خودرو را وارد کنید.
                                         </div>
                                     </div>
                                     <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="modelCar" name='model' onChange={formik.handleChange}
                                               placeholder="x55" required/>
                                            <label htmlFor="modelCar">مدل</label>
                                         <div className="invalid-feedback">
                                             مدل را وارد کنید.
                                         </div>
                                     </div>
                                       <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="madeOf" name='year_made' onChange={formik.handleChange}
                                               placeholder="1388" required/>
                                            <label htmlFor="madeOf`">سال ساخت</label>
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
                                     <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="yearChange" name='year_changed' onChange={formik.handleChange}
                                               placeholder="1401" required/>
                                            <label htmlFor="yearChange`">سال تعویض</label>
                                         <div className="invalid-feedback">
                                             سال تعویض را وارد کنید.
                                         </div>
                                     </div>
                                     <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="kilometer" name='kilometer' onChange={formik.handleChange}
                                               placeholder="1401" required/>
                                            <label htmlFor="kilometer`">کیلومتر</label>
                                         <div className="invalid-feedback">
                                             کیلومتر را وارد کنید.
                                         </div>
                                     </div>
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
                       }else if (form.isRepair === 'ثبت اولیه') {
                           return (
                               <Fragment>
                                   <hr className='bg-primary mb-5'/>
                                    <div className='d-flex gap-2'>
                                     <div className="col  form-floating">
                                         <div className="mt-1 input-group">
                                                            <input className="form-control c-form__input c-form__car-plate-input__section4"
                                                            type="tel" name='plate4' onChange={formik.handleChange}
                                                            maxLength='2' placeholder="⚊ ⚊"
                                                            id="carPlateSection4"/>
                                                            <span className="c-form__car-plate-input__iran">ایران</span>
                                                            <input type="tel"  id="carPlateSection3" placeholder="⚊ ⚊ ⚊"
                                                            aria-label="First name" name='plate3' onChange={formik.handleChange}
                                                            maxLength='3' className="c-form__input form-control"/>
                                                            <select id="carPlateSection2" defaultValue=''
                                                            className="c-form__combo c-form__car-plate-input__section2" name='plate2' onChange={formik.handleChange}>
                                                                <option value="" disabled>انتخاب</option>
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
                                                            <input type="tel" placeholder="⚊ ⚊"  id="carPlateSection1" maxLength='2'
                                                            className="c-form__input form-control" name='plate1' onChange={formik.handleChange}/>
                                                            <span className="input-group-text c-form__car-plate-input rounded-8"></span>
                                                          </div>
                                                          </div>
                                      <div className="col-2 form-floating">
                                        <input type="text" className="form-control" id="userCar" name='user' onChange={formik.handleChange}
                                               placeholder="فرودگاه مهراباد" required/>
                                            <label htmlFor="userCar">یوزر</label>
                                         <div className="invalid-feedback">
                                             یوزر را وارد کنید.
                                         </div>
                                     </div>
                                            <div className="col-2 form-floating mb-3">
                                        <input type="text" className="form-control" id="ownerCar" name='owner' onChange={formik.handleChange}
                                               placeholder="فرودگاه مهراباد" required/>
                                            <label htmlFor="ownerCar">مالکیت</label>
                                         <div className="invalid-feedback">
                                             مالکیت را وارد کنید.
                                         </div>
                                     </div>
                                     </div>
                               </Fragment>
                           )
                       }
                     })()}
            {(() => {
              if (form.isRepair === 'ثبت اولیه'){
                  return(
                      <Fragment>
                            <hr className='bg-primary mb-5'/>
                            <div className='d-flex gap-2'>
                                <div className="col form-floating">
                                        <input type="text" className="form-control" id="motorNumber" name='motor' onChange={formik.handleChange}
                                               placeholder="IN-12345678" required/>
                                            <label htmlFor="motorNumber">شماره موتور</label>
                                         <div className="invalid-feedback">
                                             شماره موتور را وارد کنید.
                                         </div>
                                     </div>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="chassisNumber" name='chassis' onChange={formik.handleChange}
                                               placeholder="123456789052314" required/>
                                            <label htmlFor="chassisNumber">شماره شاسی</label>
                                         <div className="invalid-feedback">
                                             شماره شاسی را وارد کنید.
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