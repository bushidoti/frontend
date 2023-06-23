import React, {Fragment, useContext, useEffect, useState} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import Url from "../../../../config";
import axios from "axios";
import Swal from "sweetalert2";

export const DigitalFurniture = () => {
    const form = useContext(Contextform)
    const [property, setProperty] = useState([])
    const [getName, setGetName] = useState([])
    let today = new Date().toLocaleDateString('fa-IR');
    const formik = useFormik({
        initialValues: {
              code: "",
              name: "",
              phone_feature: "",
              cpu: "",
              motherboard: "",
              ram: "",
              power: "",
              hdd: "",
              case: "",
              inventory: "",
              install_location: "",
              model: "",
              type_furniture: "",
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
        const response = await fetch(`${Url}/api/digitalfurniture/${formik.values.code}`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setGetName(data)
      }

    const fetchDataProperty = async () => {
        const response = await fetch(`${Url}/api/digitalfurniture`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setProperty(data)
      }

    const postHandler = async () => {
           await axios.post(
            `${Url}/api/digitalfurniture/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              phone_feature: formik.values.phone_feature,
              cpu: formik.values.cpu,
              motherboard: formik.values.motherboard,
              ram: formik.values.ram,
              power: formik.values.power,
              hdd: formik.values.hdd,
              case: formik.values.case,
              type_furniture: formik.values.type_furniture,
              model: form.typeDigital === 'کامپیوتر' ? formik.values.cpu : formik.values.model,
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
              digital_furniture_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.digital_furniture_01+1 : form.autoIncrement.digital_furniture_01,
              digital_furniture_02: form.message === 'چابهار' ? form.autoIncrement.digital_furniture_02+1 : form.autoIncrement.digital_furniture_02,
              digital_furniture_03: form.message === 'دزفول' ? form.autoIncrement.digital_furniture_03+1 : form.autoIncrement.digital_furniture_03,
              digital_furniture_04: form.message === 'جاسک' ? form.autoIncrement.digital_furniture_04+1 : form.autoIncrement.digital_furniture_04,
              digital_furniture_05: form.message === 'بیشه کلا' ? form.autoIncrement.digital_furniture_05+1 : form.autoIncrement.digital_furniture_05,
              digital_furniture_06: form.message === 'اورهال تهران' ? form.autoIncrement.digital_furniture_06+1 : form.autoIncrement.digital_furniture_06,
              digital_furniture_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.digital_furniture_07+1 : form.autoIncrement.digital_furniture_07,
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
            `${Url}/api/repairedigitalfurniture/`,
              {
              digital_furniture: formik.values.code,
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
            return form.autoIncrement.digital_furniture_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.digital_furniture_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.digital_furniture_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.digital_furniture_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.digital_furniture_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.digital_furniture_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.digital_furniture_07
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
        }else  if (formik.values.type_register === 'تعویض'){
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
                   <div className="col form-floating mb-3 ">
                        <select className="form-select" id="type-digital" disabled={form.viewOnly} aria-label="Type Add" value={form.editStatus ? form.formik.values.type_furniture : formik.values.type_furniture} onChange={(e) => {
                            form.setTypeDigital(e.target.value)
                            form.setIsRepair(e.target.value)
                            formik.resetForm()
                            formik.setFieldValue('type_furniture' , e.target.value)
                        }} required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="کامپیوتر">کامپیوتر</option>
                            <option value="پرینتر">پرینتر</option>
                            <option value="مانیتور">مانیتور</option>
                            <option value="لپ تاپ">لپ تاپ</option>
                            <option value="دوربین">دوربین</option>
                            <option value="تلفن , سانترال و مودم">تلفن , سانترال و مودم</option>
                        </select>
                        <label htmlFor="type-digital">نوع اثاث دیجیتال</label>
                           <div className="invalid-feedback">
                             نوع اثاث دیجیتال را انتخاب کنید.
                         </div>
                    </div>
                    {form.editStatus === false ?
                      <div className="col form-floating mb-3 ">
                        <select className="form-select" id="typeAdd" aria-label="Type Add" value={formik.values.type_register} onChange={(e) => {
                            form.setIsRepair(e.target.value)
                            formik.setFieldValue('type_register' , e.target.value)
                        }}  required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="ثبت اولیه">ثبت اولیه</option>
                            <option value="تعویض" disabled={form.typeDigital !== 'لپ تاپ' && form.typeDigital !== 'کامپیوتر' }>تعویض</option>
                        </select>
                        <label htmlFor="typeAdd">نوع ثبت</label>
                           <div className="invalid-feedback">
                             نوع ثبت را انتخاب کنید.
                         </div>
                    </div>
                 : null}
               </div>
               <hr className='bg-primary mb-5'/>
                  <div className='d-flex gap-2'>
                   {(() => {
                       if (form.isRepair === 'تعویض'){
                            if (form.typeDigital === 'کامپیوتر' || form.typeDigital === 'لپ تاپ'){
                                return (
                                   <Fragment>
                                             <div className="col form-floating mb-3">
                                                    <select className="form-select"  id="register_code" defaultValue=''
                                                        onChange={e => formik.setFieldValue('code' , e.target.value)} name='register_code' aria-label="Type Add" required>
                                                        <option value='' disabled>یک مورد انتخاب کنید</option>
                                                        {(property.filter(property => property.inventory ===  form.message && property.type_furniture ===  formik.values.type_furniture).map((data) => (
                                                            <option key={data.code} value={data.code}>{data.code} - {data.name}</option>
                                                        )))}
                                                    </select>
                                                <label htmlFor="register_code">کد</label>
                                                 <div className="invalid-feedback">
                                                     کد را وارد کنید.
                                                 </div>
                                             </div>

                                         <div className="col form-floating mb-3 ">
                                                <select className="form-select" defaultValue='' id="typeRepair"  name='repaired_type'
                                                    onChange={formik.handleChange} aria-label="Type Add" required>
                                                    <option value='' disabled>یک مورد انتخاب کنید</option>
                                                    {form.typeDigital === 'کامپیوتر'  ?
                                                        <Fragment>
                                                            <option value="سی پی یو">سی پی یو</option>
                                                            <option value="مادربرد">مادربرد</option>
                                                            <option value="پاور">پاور</option>
                                                            <option value="کیس">کیس</option>
                                                        </Fragment>
                                                        :
                                                         <option value="آداپتور">آداپتور</option>

                                                    }
                                                            <option value="رم">رم</option>
                                                            <option value="هارد">هارد</option>
                                                </select>
                                                <label htmlFor="typetools">قطعه تعویض شده</label>
                                                   <div className="invalid-feedback">
                                                     قطعه تعویض شده را انتخاب کنید.
                                                 </div>
                                         </div>
                                   </Fragment>
                           )
                        }
                       }else if (form.isRepair === 'ثبت اولیه' || form.editStatus){
                            if (form.typeDigital === 'کامپیوتر' || form.typeDigital === 'لپ تاپ'){
                               return (
                                   <Fragment>
                                       {form.typeDigital === 'لپ تاپ' ?
                                        <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="model"  name='model' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.model : formik.values.model}
                                              onChange={(e) => {
                                                  (form.editStatus ?  form.formik.setFieldValue('model' , e.target.value) : formik.setFieldValue('model' , e.target.value) )
                                                            formik.setFieldValue('name' , "لپ تاپ")
                                                        }}
                                                   placeholder="لپ تاپ" required/>
                                                <label htmlFor="model">مدل لپ تاپ</label>
                                             <div className="invalid-feedback">
                                                 مدل لپ تاپ را وارد کنید.
                                             </div>
                                        </div>
                                           : null }

                                      <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="cpu" name='cpu' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.cpu : formik.values.cpu}
                                               onChange={form.editStatus ? form.formik.handleChange :
                                                   formik.handleChange}
                                                   placeholder="لپ تاپ" required/>
                                                <label htmlFor="cpu">مدل سی پی یو</label>
                                             <div className="invalid-feedback">
                                                 مدل سی پی یو را وارد کنید.
                                             </div>
                                         </div>
                                         <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="motherboard" name='motherboard' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.motherboard : formik.values.motherboard}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                   placeholder="1400" required/>
                                                <label htmlFor="motherboard">مدل مادربرد</label>
                                             <div className="invalid-feedback">
                                                 مدل مادربرد را وارد کنید.
                                             </div>
                                         </div>
                                         <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="ram" name='ram' disabled={form.viewOnly}
                                                   value={form.editStatus ? form.formik.values.ram : formik.values.ram}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                   placeholder="1400" required/>
                                                <label htmlFor="ram">فضای رم</label>
                                             <div className="invalid-feedback">
                                                 فضای رم را وارد کنید.
                                             </div>
                                         </div>
                                       {form.typeDigital === 'کامپیوتر' ?
                                          <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="power"  name='power' disabled={form.viewOnly}
                                                       value={form.editStatus ? form.formik.values.power : formik.values.power}
                                                onChange={(e) => {
                                                    (form.editStatus ?  form.formik.setFieldValue('power' , e.target.value) : formik.setFieldValue('power' , e.target.value) )
                                                            formik.setFieldValue('name' , "کامپیوتر")
                                                        }}
                                                       placeholder="1400" required/>
                                                    <label htmlFor="power">مدل پاور</label>
                                                 <div className="invalid-feedback">
                                                     مدل پاور را وارد کنید.
                                                 </div>
                                          </div>
                                           : null }
                               </Fragment>
                               )
                           }else if (form.typeDigital === 'تلفن , سانترال و مودم'){
                                return (
                                    <Fragment>
                                           <div className="col-3 form-floating mb-3 ">
                                                    <select className="form-select"  id="typeCommunication" disabled={form.viewOnly}
                                                            value={form.editStatus ? form.formik.values.name : formik.values.name}
                                                            aria-label="Type Add" onChange={(e) => {
                                                            (form.editStatus ?  form.formik.setFieldValue('name' , e.target.value) : formik.setFieldValue('name' , e.target.value))
                                                            form.setTypeCommunication(e.target.value)
                                                        }} required>
                                                        <option value='' disabled>یک مورد انتخاب کنید</option>
                                                        <option value="تلفن">تلفن</option>
                                                        <option value="سانترال">سانترال</option>
                                                        <option value="مودم">مودم</option>
                                                    </select>
                                                    <label htmlFor="typeCommunication">نوع ابزار</label>
                                                       <div className="invalid-feedback">
                                                         نوع ابزار را انتخاب کنید.
                                                     </div>
                                           </div>
                                            {form.typeCommunication === 'تلفن' ?
                                                 <div className="col-3 form-floating mb-3 ">
                                                    <select className="form-select"  id="isSantral" disabled={form.viewOnly} name='phone_feature' value={form.editStatus ? form.formik.values.phone_feature : formik.values.phone_feature}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                            aria-label="Type Add" required>
                                                        <option value='' disabled>یک مورد انتخاب کنید</option>
                                                        <option value="با سانترال">با سانترال</option>
                                                        <option value="بدون سانترال">بدون سانترال</option>
                                                    </select>
                                                    <label htmlFor="isSantral">ویژگی</label>
                                                       <div className="invalid-feedback">
                                                         نوع ویژگی را انتخاب کنید.
                                                     </div>
                                           </div>
                                                : null }
                                           <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="model" disabled={form.viewOnly} name='model' value={form.editStatus ? form.formik.values.model : formik.values.model}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                       placeholder="لپ تاپ" required/>
                                                    <label htmlFor="model">مدل {form.typeCommunication}</label>
                                                 <div className="invalid-feedback">
                                                     مدل {form.typeCommunication} را وارد کنید.
                                                 </div>
                                             </div>
                                   </Fragment>
                                )
                            }else if (form.typeDigital === 'دوربین'){
                                return (
                                        <Fragment>
                                                   <div className="col-3 form-floating mb-3 ">
                                                            <select className="form-select"  id="typeCamera" disabled={form.viewOnly} name='phone_feature' value={form.editStatus ? form.formik.values.phone_feature : formik.values.phone_feature}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                                    aria-label="Type Add" required>
                                                                <option value='' disabled>یک مورد انتخاب کنید</option>
                                                                <option value="آنالوگ">آنالوگ</option>
                                                                <option value="تحت شبکه">تحت شبکه</option>
                                                            </select>
                                                            <label htmlFor="typeCamera">نوع دوربین</label>
                                                               <div className="invalid-feedback">
                                                                 نوع دوربین را انتخاب کنید.
                                                             </div>
                                                   </div>
                                                   <div className="col form-floating mb-3">
                                                        <input type="text" className="form-control" id="model" name='model' disabled={form.viewOnly} value={form.editStatus ? form.formik.values.model : formik.values.model}
                                                onChange={(e) => {
                                                    (form.editStatus ? form.formik.setFieldValue('model' , e.target.value) : formik.setFieldValue('model' , e.target.value) )
                                                        formik.setFieldValue('name' , "دوربین")
                                                        }}
                                                               placeholder="لپ تاپ" required/>
                                                            <label htmlFor="model">مدل دوربین</label>
                                                         <div className="invalid-feedback">
                                                             مدل دوربین را وارد کنید.
                                                         </div>
                                                     </div>
                                        </Fragment>
                                )
                            }else if (form.typeDigital === 'مانیتور'){
                                return (
                                        <Fragment>
                                                   <div className="col form-floating mb-3">
                                                        <input type="text" className="form-control" id="model" name='model' disabled={form.viewOnly} value={form.editStatus ? form.formik.values.model : formik.values.model}
                                                         onChange={(e) => {
                                                             (form.editStatus ? form.formik.setFieldValue('model' , e.target.value) : formik.setFieldValue('model' , e.target.value))
                                                            formik.setFieldValue('name' , "مانیتور")
                                                        }}
                                                               placeholder="لپ تاپ" required/>
                                                            <label htmlFor="model">مدل مانیتور</label>
                                                         <div className="invalid-feedback">
                                                             مدل مانیتور را وارد کنید.
                                                         </div>
                                                     </div>
                                        </Fragment>
                                )
                            }else if (form.typeDigital === 'پرینتر'){
                                return (
                                        <Fragment>
                                                   <div className="col-3 form-floating mb-3 ">
                                                            <select className="form-select"  id="typeCamera" name='name' disabled={form.viewOnly} value={form.editStatus ? form.formik.values.name : formik.values.name}
                                                             onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                                    aria-label="Type Add" required>
                                                                <option value='' disabled>یک مورد انتخاب کنید</option>
                                                                <option value="پرینتر لیزری">پرینتر لیزری</option>
                                                                <option value="پرینتر جامد جوهر">پرینتر جامد جوهر</option>
                                                                <option value="پرینترهای LED">پرینترهای LED</option>
                                                                <option value="پرینتر جوهر افشان">پرینتر جوهر افشان</option>
                                                                <option value="پرینتر چند کاره">پرینتر چند کاره</option>
                                                                <option value="پرینتر ضربه‌ای ماتریس نقطه‌ای">پرینتر ضربه‌ای ماتریس نقطه‌ای</option>
                                                                <option value="پرینترهای سه‌بعدی">پرینترهای سه‌بعدی</option>
                                                                <option value="پرینترهای A3">پرینترهای A3</option>
                                                            </select>
                                                            <label htmlFor="typeCamera">نوع پرینتر</label>
                                                               <div className="invalid-feedback">
                                                                 نوع پرینتر را انتخاب کنید.
                                                             </div>
                                                   </div>
                                                   <div className="col form-floating mb-3">
                                                        <input type="text" className="form-control" id="model" name='model' disabled={form.viewOnly} value={form.editStatus ? form.formik.values.model : formik.values.model}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                               placeholder="لپ تاپ" required/>
                                                            <label htmlFor="model">مدل پرینتر</label>
                                                         <div className="invalid-feedback">
                                                             مدل پرینتر را وارد کنید.
                                                         </div>
                                                     </div>
                                        </Fragment>
                                )
                            }
                       }
                   })()}
              </div>
                    {(() => {
                        if (form.isRepair === 'تعویض'){
                            if (form.typeDigital === 'کامپیوتر' || form.typeDigital === 'لپ تاپ' ){
                                return(
                                    <Fragment>
                                         <hr className='bg-primary mb-5'/>
                                         <div className='d-flex gap-2'>
                                           <div className="col form-floating">
                                                <textarea className="form-control" id="describeRepair" name='description' onChange={formik.handleChange}
                                                placeholder="...." required/>
                                                <label htmlFor="describeRepair">شرح تعویض</label>
                                                <div className="invalid-feedback">
                                                شرح تعویض را وارد کنید.
                                                </div>
                                           </div>
                                         </div>
                                    </Fragment>
                            )
                            }

                        }else if (form.isRepair === 'ثبت اولیه' || form.editStatus){
                                if (form.typeDigital === 'کامپیوتر'){
                                    return(
                                <Fragment>
                                 <hr className='bg-primary mb-5'/>
                                 <div className='d-flex gap-2'>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="hdd" name='hdd' disabled={form.viewOnly}
                                               value={form.editStatus ? form.formik.values.hdd : formik.values.hdd}
                                             onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                               placeholder="12BA" required/>
                                            <label htmlFor="hdd">فضای هارد</label>
                                         <div className="invalid-feedback">
                                             فضای هارد را وارد کنید.
                                         </div>
                                    </div>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="case" name='case'  disabled={form.viewOnly}
                                               value={form.editStatus ? form.formik.values.case : formik.values.case}
                                             onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                        placeholder="فرودگاه" required/>
                                            <label htmlFor="case">مدل کیس</label>
                                            <div className="invalid-feedback">
                                            مدل کیس را وارد کنید.
                                            </div>
                                    </div>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="install_location" name='install_location' disabled={form.viewOnly}
                                               value={form.editStatus ? form.formik.values.install_location : formik.values.install_location}
                                             onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                        placeholder="فرودگاه" required/>
                                            <label htmlFor="install_location">محل نصب</label>
                                            <div className="invalid-feedback">
                                            محل نصب را وارد کنید.
                                            </div>
                                    </div>
                                    </div>
                                </Fragment>
                            )
                                }else if (form.typeDigital === 'لپ تاپ'){
                                    return (
                                            <Fragment>
                                                 <hr className='bg-primary mb-5'/>
                                                 <div className='d-flex gap-2'>
                                                    <div className="col form-floating">
                                                        <input type="text" className="form-control" id="hdd" name='hdd' disabled={form.viewOnly}
                                                               value={form.editStatus ? form.formik.values.hdd : formik.values.hdd}
                                             onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                               placeholder="12BA" required/>
                                                            <label htmlFor="hdd">فضای هارد</label>
                                                         <div className="invalid-feedback">
                                                             فضای هارد را وارد کنید.
                                                         </div>
                                                    </div>
                                                    <div className="col form-floating">
                                                        <input type="text" className="form-control" id="install_location" disabled={form.viewOnly}
                                                               name='install_location' value={form.editStatus ? form.formik.values.install_location : formik.values.install_location}
                                             onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                                        placeholder="فرودگاه" required/>
                                                            <label htmlFor="install_location">محل نصب</label>
                                                            <div className="invalid-feedback">
                                                            محل نصب را وارد کنید.
                                                            </div>
                                                    </div>
                                                    </div>
                                                </Fragment>
                                    )
                                }
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