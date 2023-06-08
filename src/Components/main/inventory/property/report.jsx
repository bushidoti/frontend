import React, {Fragment, useState} from "react";
import Modal from "./modal";

const ReportProperty = () => {
    const [typeProperty , setTypeProperty] = useState('')
    const [searchFor , setSearchFor] = useState('')
    return (
        <Fragment>
            <Modal typeProperty={typeProperty}/>
            <div className= 'plater  m-2 rounded-3 shadow-lg mb-4'>
                 <div className= 'd-flex  justify-content-between m-4' >
                        <div className= 'd-flex gap-2  align-items-center'>
                        <div className="form-floating">
                                <select className="form-select" id="typeProperty" defaultValue=''
                                aria-label="Type Property" onChange={(e) => {
                                  setTypeProperty(e.target.value)
                                  document.getElementById("searchList").selectedIndex = "0";
                                  setSearchFor('')
                                } }>
                                                <option value='' disabled>یک مورد انتخاب کنید</option>
                                                <option value="تجهیزات ایمنی">تجهیزات ایمنی</option>
                                                <option value="تجهیزات فرودگاهی">تجهیزات فرودگاهی</option>
                                                <option value="اثاثه الکترونیکی">اثاثه الکترونیکی</option>
                                                <option value="اثاثه اداری">اثاثه اداری</option>
                                                <option value="اثاثه تاسیساتی">اثاثه تاسیساتی</option>
                                                <option value="اثاثه فرودگاهی">اثاثه فرودگاهی</option>
                                                <option value="اثاثه دیجیتالی">اثاثه دیجیتالی</option>
                                                <option value="خودرو فرودگاهی">خودرو فرودگاهی</option>
                                                <option value="خودرو اداری">خودرو اداری</option>
                                                <option value="ابزار آلات غیر صنعتی">ابزار آلات غیر صنعتی</option>
                                                <option value="ابزار آلات صنعتی">ابزار آلات صنعتی</option>
                                                <option value="اقلام پشتیبانی">اقلام پشتیبانی</option>
                                                <option value="امتیازات">امتیازات</option>
                                </select>
                                <label htmlFor="typeProperty">نوع اموال</label>
                        </div>
                         <div className="form-check ms-4">
                                <input className="form-check-input" type="checkbox" value="تعمیر شده" id="repaired" />
                                <label className="form-check-label" htmlFor="repaired">
                                تعمیر شده
                                </label>
                        </div>
                    </div>
                    <div className= 'd-flex gap-2'>
                        <button className="btn btn-outline-secondary material-symbols-outlined h-75" type="button" id="print">print</button>
                    </div>
                        </div>
                    <hr className='bg-primary mb-5'/>

                        <div className="form-floating m-4 col-1">
                                <select className="form-select" id="searchList" defaultValue=''
                                aria-label="Search List" onChange={(e) => setSearchFor(e.target.value)}>
                                    <option value='' disabled>یک مورد انتخاب کنید</option>
                                    {(() => {
                                        if (typeProperty === 'تجهیزات ایمنی'){
                                            return(
                                                <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام تجهیزات">نام تجهیزات</option>
                                                    <option value="مورد استفاده">مورد استفاده</option>
                                                    <option value="یوزر">یوزر</option>
                                                    <option value="محل نصب">محل نصب</option>
                                                </Fragment>
                                            )
                                        }else if (typeProperty === 'تجهیزات فرودگاهی'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام تجهیزات">نام تجهیزات</option>
                                                    <option value="مدل">مدل</option>
                                                    <option value="سال ساخت">سال ساخت</option>
                                                    <option value="یوزر">یوزر</option>
                                                    <option value="مالکیت">مالکیت</option>
                                                    <option value="محل نصب">محل نصب</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'اثاثه الکترونیکی'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام اثاث">نام اثاث</option>
                                                    <option value="مدل">مدل</option>
                                                    <option value="سال">سال</option>
                                                    <option value="یوزر">یوزر</option>
                                                    <option value="محل نصب">محل نصب</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'اثاثه اداری'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام اثاث">نام اثاث</option>
                                                    <option value="سال">سال</option>
                                                    <option value="یوزر">یوزر</option>
                                                    <option value="محل نصب">محل استفاده</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'اثاثه تاسیساتی'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام اثاث">نام اثاث</option>
                                                    <option value="مدل">مدل</option>
                                                    <option value="سال">سال</option>
                                                    <option value="یوزر">یوزر</option>
                                                    <option value="محل نصب">محل نصب</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'اثاثه فرودگاهی'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام اثاث">نام اثاث</option>
                                                    <option value="سال">سال</option>
                                                    <option value="محل نصب">محل نصب</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'خودرو فرودگاهی' || typeProperty === 'خودرو اداری' ){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام خودرو">نام خودرو</option>
                                                    <option value="مدل">مدل</option>
                                                    <option value="پلاک">پلاک</option>
                                                    <option value="یوزر">یوزر</option>
                                                    <option value="شماره موتور">شماره موتور</option>
                                                    <option value="شماره شاسی">شماره شاسی</option>
                                                    <option value="سال ساخت">سال ساخت</option>
                                                    <option value="مالکیت">مالکیت</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'ابزار آلات غیر صنعتی'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام ابزار">نام ابزار</option>
                                                    <option value="یوزر">یوزر</option>
                                                    <option value="سال">سال</option>
                                                    <option value="مکان استفاده">مکان استفاده</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'ابزار آلات صنعتی'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام ابزار">نام ابزار</option>
                                                    <option value="مدل">مدل</option>
                                                    <option value="سال">سال</option>
                                                    <option value="مکان استفاده">مکان استفاده</option>
                                                    <option value="یوزر">یوزر</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'اقلام پشتیبانی'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نام اقلام">نام اقلام</option>
                                                    <option value="مدل">مدل</option>
                                                    <option value="مکان استفاده">مکان استفاده</option>
                                                    <option value="یوزر">یوزر</option>
                                                  </Fragment>
                                            )
                                        }else if (typeProperty === 'امتیازات'){
                                            return(
                                                  <Fragment>
                                                    <option value="کد ثبت">کد ثبت</option>
                                                    <option value="نوع خط">نوع خط</option>
                                                    <option value="مکان استفاده">مکان استفاده</option>
                                                    <option value="شماره">شماره</option>
                                                  </Fragment>
                                            )
                                        }
                                    })()}
                                </select>
                                <label htmlFor="searchList">جستجو براساس</label>
                        </div>
                        <div className='col-4 m-4'>
                                {(() => {
                                    if(searchFor === 'نام تجهیزات'){
                                        return (
                                             <div className="col-3 form-floating">
                                                <input className="form-control" type='search' list="nameEquipmentList" id="nameEquipment" placeholder="نقاله" required/>
                                                <label htmlFor="nameEquipment">نام تجهیزات</label>
                                                <datalist id="nameEquipmentList">
                                                    <option value="X RAY"/>
                                                    <option value="نقاله"/>
                                                    <option value="کانتر"/>
                                                    <option value="ایرکاندیشن"/>
                                                </datalist>
                                                <div className="invalid-feedback">
                                                نام تجهیزات را وارد کنید.
                                                </div>
                                             </div>
                                        )
                                    }else if (searchFor === 'نوع خط'){
                                        return (
                                              <div className="col-3 form-floating">
                                                    <input className="form-control" type='search' list="typeLineList" id="typeLine" placeholder="02133229964" required/>
                                                    <label htmlFor="typeLine">نوع خط</label>
                                                    <datalist id="typeLineList">
                                                        <option value="سیم کارت"/>
                                                        <option value="ثابت"/>
                                                    </datalist>
                                                    <div className="invalid-feedback">
                                                    نوع خط را انتخاب کنید.
                                                    </div>
                                                </div>
                                        )
                                    }else if (searchFor === 'پلاک'){
                                        return (
                                              <div className="mt-2 input-group">
                                                <input className="form-control c-form__input c-form__car-plate-input__section4" type="tel" maxLength='2' placeholder="⚊ ⚊"
                                                id="carPlateSection4"/>
                                                <span className="c-form__car-plate-input__iran">ایران</span>
                                                <input type="tel"  id="carPlateSection3" placeholder="⚊ ⚊ ⚊" aria-label="First name"
                                                maxLength='3' className="c-form__input form-control"/>
                                                <select id="carPlateSection2" defaultValue='' className="c-form__combo c-form__car-plate-input__section2">
                                                    <option value="">انتخاب</option>
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
                                                <button className="btn input-group-text c-form__car-plate-input rounded-8"></button>
                                          </div>
                                        )
                                    } else {
                                        return (
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={`جستوجو براساس ${searchFor}`}
                                                aria-label="searchBox" aria-describedby="search"/>
                                                <button className="btn btn-outline-success material-symbols-outlined" type="button" id="search">search</button>
                                            </div>
                                        )
                                    }
                            })()}
            </div>
                <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '37vh'}}>
                    <table className="table table-hover table-fixed text-center align-middle table-striped table-bordered border-primary" style={{direction:'rtl'}}>
                         <thead className= 'bg-light sticky-top'>
                            <tr>
                                {(() => {
                                    if (typeProperty === 'تجهیزات فرودگاهی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام تجهیزات</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال ساخت</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">مالکیت</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'تجهیزات ایمنی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام تجهیزات</th>
                                                <th scope="col">مورد استفاده</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه الکترونیکی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه اداری'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل استفاده</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه تاسیساتی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه فرودگاهی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'خودرو فرودگاهی' || typeProperty === 'خودرو اداری' ){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام خودرو</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">پلاک</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">شماره موتور</th>
                                                <th scope="col">شماره شاسی</th>
                                                <th scope="col">سال ساخت</th>
                                                <th scope="col">مالکیت</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'ابزار آلات غیر صنعتی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام ابزار</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'ابزار آلات صنعتی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام ابزار</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اقلام پشتیبانی'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اقلام</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'امتیازات'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نوع خط</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col">شماره</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }
                                })()}

                            </tr>
                         </thead>
                        <tbody>
                                <tr>
                                         {(() => {
                                    if (typeProperty === 'تجهیزات فرودگاهی'){
                                        return (
                                           <Fragment>
                                            <th scope="row">1</th>
                                            <td>ب/12/3</td>
                                            <td>13/2ث</td>
                                            <td>سجاد</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>
                                                <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                            </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'تجهیزات ایمنی'){
                                        return (
                                            <Fragment>
                                            <th scope="row">1</th>
                                            <td>ب/12/3</td>
                                            <td>13/2ث</td>
                                            <td>سجاد</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>
                                                <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                            </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه الکترونیکی'){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه اداری'){
                                        return (
                                           <Fragment>
                                                 <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه تاسیساتی'){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اثاثه فرودگاهی'){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'خودرو فرودگاهی' || typeProperty === 'خودرو اداری' ){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'ابزار آلات غیر صنعتی'){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'ابزار آلات صنعتی'){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'اقلام پشتیبانی'){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'امتیازات'){
                                        return (
                                           <Fragment>
                                                <th scope="row">1</th>
                                                <td>ب/12/3</td>
                                                <td>13/2ث</td>
                                                <td>سجاد</td>
                                                <td>1401/12/1</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">info</button>
                                                </td>
                                           </Fragment>
                                        )
                                    }
                                })()}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </Fragment>
    )
}
export default ReportProperty;