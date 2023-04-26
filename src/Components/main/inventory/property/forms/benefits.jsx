import React, {Fragment} from "react";

export const Benefits = () => {
    return(
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                aria-describedby="basic-addon1" value='' disabled required/>
                <label  id="idNumber">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                       <div className="col form-floating">
                        <select className="form-select" id="typeLine" aria-label="Type Add" required>
                            <option selected disabled>یک مورد انتخاب کنید</option>
                            <option value="ثبت اولیه">سیم کارت</option>
                            <option value="تعمیرات">ثابت</option>
                        </select>
                        <label htmlFor="typeLine">نوع خط</label>
                           <div className="invalid-feedback">
                             نوع خط را انتخاب کنید.
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
                        <input type="text" className="form-control" id="number"
                               placeholder="تاسیسات" required/>
                            <label htmlFor="number">شماره</label>
                         <div className="invalid-feedback">
                             شماره را وارد کنید.
                         </div>
                     </div>
                </div>
              <div className='d-flex flex-column mt-2'>
              <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
            </div>
        </Fragment>
    )
}