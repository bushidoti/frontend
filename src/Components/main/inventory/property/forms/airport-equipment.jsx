import React, {Fragment} from "react";

export const AirportEquipment = () => {
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
                       <div className="col-2 form-floating">
                            <input className="form-control" list="nameEquipmentList" type='search' id="nameEquipment" placeholder="نقاله" required/>
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
                        <input type="text" className="form-control" id="model"
                               placeholder="12BA" required/>
                            <label htmlFor="model">مدل</label>
                         <div className="invalid-feedback">
                             مدل را وارد کنید.
                         </div>
                     </div>

                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="MadeOf"
                               placeholder="2020" required/>
                            <label htmlFor="MadeOf">سال ساخت</label>
                         <div className="invalid-feedback">
                             سال ساخت را وارد کنید.
                         </div>
                     </div>
                </div>

                <hr className='bg-primary mb-5'/>

                <div className='d-flex gap-2'>
                       <div className="col form-floating mb-3">
                            <input type="text" className="form-control" id="user"
                            placeholder="فرودگاه" required/>
                                <label htmlFor="user">یوزر</label>
                                <div className="invalid-feedback">
                                یوزر را وارد کنید.
                                </div>
                       </div>
                       <div className="col form-floating mb-3">
                            <input type="text" className="form-control" id="owner"
                            placeholder="فرودگاه" required/>
                                <label htmlFor="owner">مالکیت</label>
                                <div className="invalid-feedback">
                                مالکیت را وارد کنید.
                                </div>
                       </div>
                       <div className="col form-floating mb-3">
                            <input type="text" className="form-control" id="location"
                            placeholder="شرکت" required/>
                                <label htmlFor="location">محل نصب</label>
                                <div className="invalid-feedback">
                                محل نصب را وارد کنید.
                                </div>
                       </div>
            </div>
              <div className='d-flex flex-column '>
              <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
            </div>
        </Fragment>
    )
}