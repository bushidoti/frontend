import React, {Fragment} from "react";

export const IndustrialEquipment = () => {
    return(
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                aria-describedby="basic-addon1" value='' disabled required/>
                <label  id="idNumber">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="nameTools"
                               placeholder="پیچ گوشتی" required/>
                            <label htmlFor="nameTools">نام ابزار</label>
                         <div className="invalid-feedback">
                             نام ابزار را وارد کنید.
                         </div>
                     </div>
                      <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="user"
                               placeholder="تاسیسات" required/>
                            <label htmlFor="user">یوزر</label>
                         <div className="invalid-feedback">
                             یوزر را وارد کنید.
                         </div>
                     </div>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="year"
                               placeholder="1400" required/>
                            <label htmlFor="year">سال</label>
                         <div className="invalid-feedback">
                             سال را وارد کنید.
                         </div>
                     </div>
                </div>
                <hr className='bg-primary mb-5'/>
                <div className='d-flex gap-2'>
                        <div className="col-4 form-floating">
                            <input type="text" className="form-control" id="locationUse"
                            placeholder="شرکت" required/>
                                <label htmlFor="locationUse">محل استفاده</label>
                                <div className="invalid-feedback">
                                محل استفاده را وارد کنید.
                                </div>
                       </div>
            </div>
              <div className='d-flex flex-column mt-2'>
              <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
            </div>
        </Fragment>
    )
}