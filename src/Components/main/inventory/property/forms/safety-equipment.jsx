import React, {Fragment, useContext} from "react";
import {Contextform} from "../contextform";

export const SafetyEquipment = () => {
    const form = useContext(Contextform)
    return(
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                aria-describedby="basic-addon1" value='' disabled required/>
                <label  id="idNumber">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                    <div className="col form-floating mb-3 ">
                        <select className="form-select" id="typeAdd" aria-label="Type Add" onChange={() => {
                            form.setIsRepair(!form.isRepair)
                            console.log(form.isRepair)
                        } } required>
                            <option selected disabled>یک مورد انتخاب کنید</option>
                            <option value="ثبت اولیه">ثبت اولیه</option>
                            <option value="تعمیرات">تعمیرات</option>
                        </select>
                        <label htmlFor="typeAdd">نوع ثبت</label>
                           <div className="invalid-feedback">
                             نوع ثبت را انتخاب کنید.
                         </div>
                    </div>
                    {(() => {
                            if (form.isRepair){
                                return(
                                    <Fragment>
                                        <div className="col form-floating mb-3">
                                            <input type="text" className="form-control" id="idNumber"
                                                   placeholder="103500" required/>
                                                <label htmlFor="idNumber">کد</label>
                                             <div className="invalid-feedback">
                                                 کد را وارد کنید.
                                             </div>
                                         </div>
                                    </Fragment>
                                )
                            }else {
                                return(
                                       <Fragment>
                                           <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="nameEquipment"
                                                       placeholder="کلاه ایمنی" required/>
                                                    <label htmlFor="nameEquipment">نام تجهیزات</label>
                                                 <div className="invalid-feedback">
                                                     نام تجهیزات را وارد کنید.
                                                 </div>
                                             </div>
                                             <div className="col form-floating mb-3">
                                                <input type="text" className="form-control" id="forUse"
                                                       placeholder="ساختمان" required/>
                                                    <label htmlFor="forUse">مورد استفاده</label>
                                                 <div className="invalid-feedback">
                                                     مورد استفاده را وارد کنید.
                                                 </div>
                                             </div>
                                       </Fragment>
                                )
                            }
                        })()}
                </div>
                <hr className='bg-primary mb-5'/>
                <div className='d-flex gap-2'>
                      {(() => {
                            if (form.isRepair){
                                return(
                                    <Fragment>
                                        <div className="col form-floating">
                                            <textarea className="form-control" id="describeRepair"
                                            placeholder="...." required/>
                                            <label htmlFor="describeRepair">شرح تعمیرات</label>
                                            <div className="invalid-feedback">
                                            شرح تعمیرات را وارد کنید.
                                            </div>
                                       </div>
                                    </Fragment>
                                )
                            }else {
                                return(
                                       <Fragment>
                                            <div className="col form-floating">
                                                    <input type="text" className="form-control" id="user"
                                                    placeholder="فرودگاه" required/>
                                                        <label htmlFor="user">یوزر</label>
                                                        <div className="invalid-feedback">
                                                        یوزر را وارد کنید.
                                                        </div>
                                               </div>

                                               <div className="col form-floating">
                                                    <input type="text" className="form-control" id="location"
                                                    placeholder="شرکت" required/>
                                                        <label htmlFor="location">محل نصب</label>
                                                        <div className="invalid-feedback">
                                                        محل نصب را وارد کنید.
                                                        </div>
                                            </div>
                                       </Fragment>
                                )
                            }
                        })()}
            </div>
              <div className='d-flex flex-column mt-2'>
              <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
            </div>
        </Fragment>
    )
}