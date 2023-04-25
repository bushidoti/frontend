import React, {Fragment} from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import {CustomInputDate} from "../../../../App";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export const Forms =  (props) => {
    return (
        <Fragment>
            <div className= 'd-flex justify-content-around m-4' style={{height:'400px'}} >
                    <div className="collapse collapse-horizontal" id="collapseSafetyEquipment">
                        <div className="card card-body gap-2" style={{width:'1500px'}}>
                            <div className='d-flex'>
                                <form className='needs-validation m-4' noValidate>
                                     <div className="form-floating justify-content-center mb-5">
                                            <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                                            aria-describedby="basic-addon1" value='' disabled required/>
                                            <label  id="idNumber">شماره ثبت</label>
                                        </div>
                                    <div className='d-flex gap-2'>
                                        <div className="col form-floating mb-3 ">
                                            <select className="form-select" id="typeAdd" aria-label="Type Add">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="ثبت اولیه">ثبت اولیه</option>
                                                <option value="تعمیرات">تعمیرات</option>
                                            </select>
                                            <label htmlFor="typeAdd">نوع ثبت</label>
                                        </div>

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
                                                <input type="text" className="form-control" id="location"
                                                placeholder="شرکت" required/>
                                                    <label htmlFor="location">محل نصب</label>
                                                    <div className="invalid-feedback">
                                                    محل نصب را وارد کنید.
                                                    </div>
                                           </div>
                                </div>
                          </form>
                                <div className='m-4'>
                                    eq
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}