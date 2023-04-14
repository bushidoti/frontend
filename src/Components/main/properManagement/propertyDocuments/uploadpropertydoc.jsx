import React, {Fragment} from "react";
const UploadPropertyDoc = () => {
    return (
        <Fragment>
            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                     <div className="form-floating m-4 col-2">
                            <select className="form-select" id="partitionSelect"
                            aria-label="Partition Select">
                                <option selected disabled>یک مورد انتخاب کنید</option>
                                <option value="منقول">منقول</option>
                                <option value="غیر منقول">غیر منقول</option>
                            </select>
                            <label htmlFor="partitionSelect">بارگذاری اسناد بخش</label>
                     </div>
                     <div className='m-4'>
                     <div className="mt-2 input-group">
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
                            <button className="input-group-text c-form__car-plate-input rounded-8"></button>
                     </div>
                            <div className= 'mt-5'>
                               <div className="input-group mb-3">
                                   <label className='me-4'>فاکتور فروش</label>
                                   <button className="btn btn-outline-secondary" type="button"
                                   id="saleFactorBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="saleFactorInp"
                                   aria-describedby="saleFactorBtn" aria-label="Upload"/>
                               </div>
                               <div className="input-group mb-3 align-items-center">
                                   <label className='me-5'>بیمه نامه</label>
                                   <button className="btn btn-outline-secondary" type="button"
                                   id="insurancePaperBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="insurancePaperInp"
                                   aria-describedby="insurancePaperBtn" aria-label="Upload"/>
                               </div>
                               <div className="input-group mb-3 align-items-center">
                                   <label className='me-4'>کارت ماشین</label>
                                   <button className="btn btn-outline-secondary" type="button" id="carCardBtn">بارگذاری</button>
                                   <input type="file" className="form-control" id="carCardInp"
                                   aria-describedby="carCardBtn" aria-label="Upload"/>
                               </div>
                               <div className="input-group mb-3 align-items-center">
                                   <label className='me-5'>کارت سبز</label>
                                   <button className="btn btn-outline-secondary" type="button"
                                   id="greenCardBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="greenCardInp"
                                   aria-describedby="greenCardBtn" aria-label="Upload"/>
                               </div>
                               <div className="input-group mb-3 align-items-center">
                                   <label className='me-4'>کارت سوخت</label>
                                   <button className="btn btn-outline-secondary" type="button" id="gasCardBtn">بارگذاری</button>
                                   <input type="file" className="form-control" id="gasCardInp"
                                   aria-describedby="gasCardBtn" aria-label="Upload"/>
                               </div>
                            </div>
                      </div>
                 </div>
        </Fragment>
    )
}
export default  UploadPropertyDoc