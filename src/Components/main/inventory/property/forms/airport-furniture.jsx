import React, {Fragment} from "react";

export const AirportFurniture = () => {
    return(
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                aria-describedby="basic-addon1" value='' disabled required/>
                <label  id="idNumber">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                    <div className="col form-floating mb-3 ">
                        <select className="form-select" id="typeAdd" aria-label="Type Add" required>
                            <option selected disabled>یک مورد انتخاب کنید</option>
                            <option value="ثبت اولیه">ثبت اولیه</option>
                            <option value="تعمیرات">تعمیرات</option>
                        </select>
                        <label htmlFor="typeAdd">نوع ثبت</label>
                           <div className="invalid-feedback">
                             نوع ثبت را انتخاب کنید.
                         </div>
                    </div>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="nameFurniture"
                               placeholder="لپ تاپ" required/>
                            <label htmlFor="nameFurniture">نام اثاث</label>
                         <div className="invalid-feedback">
                             نام اثاث را وارد کنید.
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
                            <input type="text" className="form-control" id="location"
                            placeholder="شرکت" required/>
                                <label htmlFor="location">محل نصب</label>
                                <div className="invalid-feedback">
                                محل نصب را وارد کنید.
                                </div>
                       </div>
            </div>
              <div className='d-flex flex-column mt-2'>
              <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
            </div>
        </Fragment>
    )
}