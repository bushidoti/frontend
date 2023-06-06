import React, {Fragment} from "react";

export const SupportItems = () => {
    return(
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                aria-describedby="basic-addon1" value='' disabled required/>
                <label  id="idNumber">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                      <div className="col form-floating mb-3 ">
                        <select className="form-select" id="typetools" defaultValue='' aria-label="Type Add" required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="اداری">اداری</option>
                            <option value="تاسیسات">تاسیسات</option>
                            <option value="الکترونیک">الکترونیک</option>
                            <option value="آشپزخانه">آشپزخانه</option>
                            <option value="تجهیزاتی">تجهیزاتی</option>
                            <option value="ابزارآلات">ابزارآلات</option>
                            <option value="متفرقه">متفرقه</option>
                        </select>
                        <label htmlFor="typetools">نوع قلم</label>
                           <div className="invalid-feedback">
                             نوع قلم را انتخاب کنید.
                         </div>
                    </div>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="nameTools"
                               placeholder="فلش درایو" required/>
                            <label htmlFor="nameTools">نام اقلام</label>
                         <div className="invalid-feedback">
                             نام اقلام را وارد کنید.
                         </div>
                     </div>
                      <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="model"
                               placeholder="تاسیسات" required/>
                            <label htmlFor="model">مدل</label>
                         <div className="invalid-feedback">
                             مدل را وارد کنید.
                         </div>
                     </div>
                </div>
                <hr className='bg-primary mb-5'/>
                <div className='d-flex col gap-2'>
                      <div className="col-2 form-floating mb-3">
                        <input type="text" className="form-control" id="user"
                               placeholder="شرکت عقاب عسلویه" required/>
                            <label htmlFor="user">یوزر</label>
                         <div className="invalid-feedback">
                             یوزر را وارد کنید.
                         </div>
                     </div>
                        <div className="col-4 form-floating">
                            <input type="text" className="form-control" id="locationUse"
                            placeholder="شرکت" required/>
                                <label htmlFor="locationUse">محل استفاده</label>
                                <div className="invalid-feedback">
                                محل استفاده را وارد کنید.
                                </div>
                       </div>
                             <div className="col form-floating">
                                    <textarea className="form-control" id="describeRepair"
                                    placeholder="...." required/>
                                    <label htmlFor="describeRepair">شرح</label>
                                    <div className="invalid-feedback">
                                    شرح را وارد کنید.
                                    </div>
                       </div>
            </div>
        </Fragment>
    )
}