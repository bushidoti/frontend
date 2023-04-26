import React, {Fragment} from "react";
export const AirportCar = () => {
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
                        <input type="text" className="form-control" id="nameCar"
                               placeholder="شاتر" required/>
                            <label htmlFor="nameCar">نام خودرو</label>
                         <div className="invalid-feedback">
                             نام خودرو را وارد کنید.
                         </div>
                     </div>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="modelCar"
                               placeholder="x55" required/>
                            <label htmlFor="modelCar">مدل</label>
                         <div className="invalid-feedback">
                             مدل را وارد کنید.
                         </div>
                     </div>
                       <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="madeOf"
                               placeholder="1388" required/>
                            <label htmlFor="madeOf`">سال ساخت</label>
                         <div className="invalid-feedback">
                             سال ساخت را وارد کنید.
                         </div>
                     </div>
                </div>
                <hr className='bg-primary mb-5'/>
                <div className='d-flex gap-2'>
                     <div className="col  form-floating">
                         <div className="mt-1 input-group">
                                            <input className="form-control c-form__input c-form__car-plate-input__section4" type="tel" maxLength='2' placeholder="⚊ ⚊"
                                            id="carPlateSection4"/>
                                            <span className="c-form__car-plate-input__iran">ایران</span>
                                            <input type="tel"  id="carPlateSection3" placeholder="⚊ ⚊ ⚊" aria-label="First name"
                                            maxLength='3' className="c-form__input form-control"/>
                                            <select id="carPlateSection2" className="c-form__combo c-form__car-plate-input__section2">
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
                                            <input type="tel" placeholder="⚊ ⚊"  id="carPlateSection1" maxLength='2' className="c-form__input form-control"/>
                                            <span className="input-group-text c-form__car-plate-input rounded-8"></span>
                                          </div>
                                          </div>
                      <div className="col-2 form-floating">
                        <input type="text" className="form-control" id="userCar"
                               placeholder="فرودگاه مهراباد" required/>
                            <label htmlFor="userCar">یوزر</label>
                         <div className="invalid-feedback">
                             یوزر را وارد کنید.
                         </div>
                     </div>
                            <div className="col-2 form-floating mb-3">
                        <input type="text" className="form-control" id="ownerCar"
                               placeholder="فرودگاه مهراباد" required/>
                            <label htmlFor="ownerCar">مالکیت</label>
                         <div className="invalid-feedback">
                             مالکیت را وارد کنید.
                         </div>
                     </div>
            </div>
            <hr className='bg-primary mb-5'/>
            <div className='d-flex gap-2'>
                <div className="col form-floating">
                        <input type="text" className="form-control" id="motorNumber"
                               placeholder="IN-12345678" required/>
                            <label htmlFor="motorNumber">شماره موتور</label>
                         <div className="invalid-feedback">
                             شماره موتور را وارد کنید.
                         </div>
                     </div>
                    <div className="col form-floating">
                        <input type="text" className="form-control" id="chassisNumber"
                               placeholder="123456789052314" required/>
                            <label htmlFor="chassisNumber">شماره شاسی</label>
                         <div className="invalid-feedback">
                             شماره شاسی را وارد کنید.
                         </div>
                     </div>
            </div>

              <div className='d-flex flex-column mt-2'>
              <button type="submit" className="btn material-symbols-outlined btn-success align-self-end">done</button>
            </div>
        </Fragment>
    )
}