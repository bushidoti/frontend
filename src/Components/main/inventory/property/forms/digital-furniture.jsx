import React, {Fragment, useContext, useState} from "react";
import {Contextform} from "../contextform";

export const DigitalFurniture = () => {
    const form = useContext(Contextform)
    const [typeDigital , setTypeDigital] = useState('')
    const [typeCommunication , setTypeCommunication] = useState('')

    return(
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                aria-describedby="basic-addon1" value='' disabled required/>
                <label  id="idNumber">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                   <div className="col form-floating mb-3 ">
                        <select className="form-select" id="type-digital" defaultValue='' aria-label="Type Add" onChange={e => setTypeDigital(e.target.value)} required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="کامپیوتر">کامپیوتر</option>
                            <option value="پرینتر">پرینتر</option>
                            <option value="مانیتور">مانیتور</option>
                            <option value="لپ تاپ">لپ تاپ</option>
                            <option value="دوربین">دوربین</option>
                            <option value="تلفن , سانترال و مودم">تلفن , سانترال و مودم</option>
                        </select>
                        <label htmlFor="typetools">نوع اثاث دیجیتال</label>
                           <div className="invalid-feedback">
                             نوع اثاث دیجیتال را انتخاب کنید.
                         </div>
                    </div>
                      <div className="col form-floating mb-3 ">
                        <select className="form-select" defaultValue='' id="typeAdd" aria-label="Type Add" onChange={(e) => form.setIsRepair(e.target.value)}  required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="ثبت اولیه">ثبت اولیه</option>
                            <option value="تعویض" disabled={typeDigital !== 'لپ تاپ' && typeDigital !== 'کامپیوتر' }>تعویض</option>
                        </select>
                        <label htmlFor="typeAdd">نوع ثبت</label>
                           <div className="invalid-feedback">
                             نوع ثبت را انتخاب کنید.
                         </div>
                    </div>
               </div>
               <hr className='bg-primary mb-5'/>
                  <div className='d-flex gap-2'>
                   {(() => {
                       if (form.isRepair === 'تعویض'){
                            if (typeDigital === 'کامپیوتر' || typeDigital === 'لپ تاپ'){
                                return (
                                   <Fragment>
                                             <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="idNumber"
                                                       placeholder="103500" required/>
                                                    <label htmlFor="idNumber">کد</label>
                                                 <div className="invalid-feedback">
                                                     کد را وارد کنید.
                                                 </div>
                                             </div>
                                         <div className="col form-floating mb-3 ">
                                                <select className="form-select" id="typeRepair" defaultValue='' aria-label="Type Add" required>
                                                    <option value='' disabled>یک مورد انتخاب کنید</option>
                                                    {typeDigital === 'کامپیوتر'  ?
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
                       }else if (form.isRepair === 'ثبت اولیه'){
                            if (typeDigital === 'کامپیوتر' || typeDigital === 'لپ تاپ'){
                               return (
                                   <Fragment>
                                       {typeDigital === 'لپ تاپ' ?
                                        <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="nameFurniture"
                                                   placeholder="لپ تاپ" required/>
                                                <label htmlFor="nameFurniture">مدل لپ تاپ</label>
                                             <div className="invalid-feedback">
                                                 مدل لپ تاپ را وارد کنید.
                                             </div>
                                        </div>
                                           : null }

                                      <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="nameFurniture"
                                                   placeholder="لپ تاپ" required/>
                                                <label htmlFor="nameFurniture">مدل سی پی یو</label>
                                             <div className="invalid-feedback">
                                                 مدل سی پی یو را وارد کنید.
                                             </div>
                                         </div>
                                         <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="year"
                                                   placeholder="1400" required/>
                                                <label htmlFor="year">مدل مادربرد</label>
                                             <div className="invalid-feedback">
                                                 مدل مادربرد را وارد کنید.
                                             </div>
                                         </div>
                                         <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="year"
                                                   placeholder="1400" required/>
                                                <label htmlFor="year">فضای رم</label>
                                             <div className="invalid-feedback">
                                                 فضای رم را وارد کنید.
                                             </div>
                                         </div>
                                       {typeDigital === 'کامپیوتر' ?
                                          <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="year"
                                                       placeholder="1400" required/>
                                                    <label htmlFor="year">مدل پاور</label>
                                                 <div className="invalid-feedback">
                                                     مدل پاور را وارد کنید.
                                                 </div>
                                          </div>
                                           : null }
                               </Fragment>
                               )
                           }else if (typeDigital === 'تلفن , سانترال و مودم'){
                                return (
                                    <Fragment>
                                           <div className="col-3 form-floating mb-3 ">
                                                    <select className="form-select" defaultValue='' id="typeCommunication"
                                                            aria-label="Type Add" onChange={e => setTypeCommunication(e.target.value)} required>
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
                                            {typeCommunication === 'تلفن' ?
                                                 <div className="col-3 form-floating mb-3 ">
                                                    <select className="form-select" defaultValue='' id="isSantral"
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
                                                <input type="text" className="form-control" id="nameFurniture"
                                                       placeholder="لپ تاپ" required/>
                                                    <label htmlFor="nameFurniture">مدل {typeCommunication}</label>
                                                 <div className="invalid-feedback">
                                                     مدل {typeCommunication} را وارد کنید.
                                                 </div>
                                             </div>
                                   </Fragment>
                                )
                            }else if (typeDigital === 'دوربین'){
                                return (
                                        <Fragment>
                                                   <div className="col-3 form-floating mb-3 ">
                                                            <select className="form-select" defaultValue='' id="typeCamera"
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
                                                        <input type="text" className="form-control" id="nameFurniture"
                                                               placeholder="لپ تاپ" required/>
                                                            <label htmlFor="nameFurniture">مدل دوربین</label>
                                                         <div className="invalid-feedback">
                                                             مدل دوربین را وارد کنید.
                                                         </div>
                                                     </div>
                                        </Fragment>
                                )
                            }else if (typeDigital === 'مانیتور'){
                                return (
                                        <Fragment>
                                                   <div className="col form-floating mb-3">
                                                        <input type="text" className="form-control" id="nameFurniture"
                                                               placeholder="لپ تاپ" required/>
                                                            <label htmlFor="nameFurniture">مدل مانیتور</label>
                                                         <div className="invalid-feedback">
                                                             مدل مانیتور را وارد کنید.
                                                         </div>
                                                     </div>
                                        </Fragment>
                                )
                            }else if (typeDigital === 'پرینتر'){
                                return (
                                        <Fragment>
                                                   <div className="col-3 form-floating mb-3 ">
                                                            <select className="form-select" defaultValue='' id="typeCamera"
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
                                                        <input type="text" className="form-control" id="nameFurniture"
                                                               placeholder="لپ تاپ" required/>
                                                            <label htmlFor="nameFurniture">مدل پرینتر</label>
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
                            if (typeDigital === 'کامپیوتر' || typeDigital === 'لپ تاپ' ){
                                return(
                                    <Fragment>
                                         <hr className='bg-primary mb-5'/>
                                         <div className='d-flex gap-2'>
                                           <div className="col form-floating">
                                                <textarea className="form-control" id="describeRepair"
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

                        }else if (form.isRepair === 'ثبت اولیه'){
                                if (typeDigital === 'کامپیوتر'){
                                    return(
                                <Fragment>
                                 <hr className='bg-primary mb-5'/>
                                 <div className='d-flex gap-2'>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="model"
                                               placeholder="12BA" required/>
                                            <label htmlFor="model">فضای هارد</label>
                                         <div className="invalid-feedback">
                                             فضای هارد را وارد کنید.
                                         </div>
                                    </div>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="user"
                                        placeholder="فرودگاه" required/>
                                            <label htmlFor="user">مدل کیس</label>
                                            <div className="invalid-feedback">
                                            مدل کیس را وارد کنید.
                                            </div>
                                    </div>
                                    <div className="col form-floating">
                                        <input type="text" className="form-control" id="user"
                                        placeholder="فرودگاه" required/>
                                            <label htmlFor="user">محل نصب</label>
                                            <div className="invalid-feedback">
                                            محل نصب را وارد کنید.
                                            </div>
                                    </div>
                                    </div>
                                </Fragment>
                            )
                                }else if (typeDigital === 'لپ تاپ'){
                                    return (
                                            <Fragment>
                                                 <hr className='bg-primary mb-5'/>
                                                 <div className='d-flex gap-2'>
                                                    <div className="col form-floating">
                                                        <input type="text" className="form-control" id="model"
                                                               placeholder="12BA" required/>
                                                            <label htmlFor="model">فضای هارد</label>
                                                         <div className="invalid-feedback">
                                                             فضای هارد را وارد کنید.
                                                         </div>
                                                    </div>
                                                    <div className="col form-floating">
                                                        <input type="text" className="form-control" id="user"
                                                        placeholder="فرودگاه" required/>
                                                            <label htmlFor="user">محل نصب</label>
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
        </Fragment>
    )
}