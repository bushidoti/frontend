import React, {Fragment, useState} from "react";
import Modal from "./modal";
import ObserveModal from "./observemodal";

const ReportPropertyDoc = (props) => {
    const [search , setSearch] = useState('')

    return (
        <Fragment>
            <ObserveModal/>
            <Modal editProperty={props.editProperty} propToggle={props.propToggle} />

            <div className= 'plater  m-2 rounded-3 shadow-lg '>

                 <div className= 'd-flex  justify-content-between m-4' >
                                <div className= 'd-flex gap-2'>

                                    <div className='d-flex gap-2'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='منقول' onChange={props.handleFormProp}/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    منقول
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value='غیر منقول' onChange={props.handleFormProp}/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    غیر منقول
                                                </label>
                                        </div>
                                        <div className="form-check ms-4">
                                            <input className="form-check-input" type="checkbox" value="" id="clearedCheck" />
                                                <label className="form-check-label" htmlFor="clearedCheck">
                                                    فروخته شده
                                                </label>
                                        </div>


                                    </div>
                                </div>

                            <div className= 'd-flex gap-2'>
                                <button className="btn btn-danger material-symbols-outlined " type="button" id="observeDocs"  data-bs-toggle="modal" data-bs-target="#observModal">description</button>
                                <button className="btn btn-outline-secondary material-symbols-outlined " type="button" id="print">print</button>
                            </div>

                        </div>
                  <div className="form-floating m-4 col-1">
                                            <select className="form-select" id="searchSelect"
                                                    aria-label="Floating label select example" onChange={(e) => {
                                                        setSearch(e.target.value)
                                            }}>
                                               <option selected disabled>یک مورد انتخاب کنید</option>

                                                    {props.propToggle ?

                                                        <Fragment>

                                                                <option value="نام">نام</option>
                                                                <option value="شماره سند">شماره سند</option>
                                                                <option value="نوع ملک">نوع ملک</option>
                                                                <option value="نام مالک">نام مالک</option>
                                                                <option value="شماره ثبت">شماره ثبت</option>
                                                                <option value="سال ساخت">سال ساخت</option>
                                                                <option value="پلاک">پلاک</option>

                                                        </Fragment>

                                                        :

                                                        <Fragment>

                                                                <option value="سیستم">سیستم</option>
                                                                <option value="شماره سند">شماره سند</option>
                                                                <option value="نوع خودرو">نوع خودرو</option>
                                                                <option value="نام مالک">نام مالک</option>
                                                                <option value="شماره ثبت">شماره ثبت</option>
                                                                <option value="محل استقرار">محل استقرار</option>
                                                                <option value="پلاک">پلاک</option>
                                                                <option value="شماره شاسی">شماره شاسی</option>
                                                                <option value="شماره موتور">شماره موتور</option>

                                                        </Fragment>

                                                    }


                                            </select>
                                            <label htmlFor="searchSelect">جستجو براساس</label>
                                        </div>
                   <div className='m-4'>
                                {(() => {

                                    if(search === 'نوع خودرو'){
                                        return (

                                                 <div className="col-2 form-floating">
                                                    <input className="form-control" list="typeCarList" id="typeCar" placeholder="name@example.com" required/>
                                                    <label htmlFor="typeCar">نوع خودرو</label>
                                                    <datalist id="typeCarList">
                                                        <option value="خودرو سواری"/>
                                                        <option value="خودرو قرودگاهی"/>
                                                    </datalist>
                                                    <div className="invalid-feedback">
                                                        نوع خودرو را انتخاب کنید.
                                                    </div>
                                                </div>

                                        )
                                    }else if (search === 'نوع ملک'){

                                        return (

                                              <div className="col-2 form-floating">
                                                    <input className="form-control" list="typeEstateList" id="typeEstate" placeholder="name@example.com" required/>
                                                    <label htmlFor="typeEstate">نوع ملک</label>
                                                    <datalist id="typeEstateList">
                                                        <option value="ملک غیرتجاری"/>
                                                        <option value="ملک تجاری"/>
                                                    </datalist>
                                                    <div className="invalid-feedback">
                                                        نوع ملک را انتخاب کنید.
                                                    </div>
                                                </div>

                                        )

                                    } else {
                                        return (

                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder={`جستوجو براساس ${search}`}
                                                       aria-label="searchBox" aria-describedby="search"/>
                                                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="search">search</button>

                                            </div>

                                        )
                                    }

                                })()}


            </div>

                <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                    <table className="table table-hover text-center align-middle table-striped">
                         <thead className= 'bg-light sticky-top'>
                            <tr>
                                {props.propToggle ?

                                    <Fragment>

                                        <th scope="col">ردیف</th>
                                        <th scope="col">شماره ثبت</th>
                                        <th scope="col">نوع</th>
                                        <th scope="col">نام</th>
                                        <th scope="col">شماره سند</th>
                                        <th scope="col">پلاک</th>
                                        <th scope="col">آدرس</th>
                                        <th scope="col">مالک</th>
                                        <th scope="col">متراژ</th>
                                        <th scope="col">سال ساخت</th>
                                        <th scope="col">وضعیت</th>
                                        <th scope="col">تاریخ فروش</th>
                                        <th scope="col">خریدار</th>
                                        <th scope="col">توضیحات</th>

                                    </Fragment>

                                    :

                                    <Fragment>

                                        <th scope="col">ردیف</th>
                                        <th scope="col">شماره ثبت</th>
                                        <th scope="col">نوع</th>
                                        <th scope="col">سیستم</th>
                                        <th scope="col">شماره سند</th>
                                        <th scope="col">شماره موتور</th>
                                        <th scope="col">شماره شاسی</th>
                                        <th scope="col">مالک</th>
                                        <th scope="col">مدل</th>
                                        <th scope="col">پلاک</th>
                                        <th scope="col">محل استقرار</th>
                                        <th scope="col">برگ سند</th>
                                        <th scope="col">بیمه نامه</th>
                                        <th scope="col">کارت سوخت</th>
                                        <th scope="col">کارت ماشین</th>
                                        <th scope="col">توضیحات</th>
                                        <th scope="col">وضعیت</th>
                                        <th scope="col">تاریخ فروش</th>
                                        <th scope="col">خریدار</th>
                                        <th scope="col">نمایش</th>

                                    </Fragment>

                                }

                            </tr>
                         </thead>

                        <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    {props.propToggle ?

                                        <Fragment>

                                             <td>ب/12/3</td>
                                            <td>13/2ث</td>
                                            <td>سجاد</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
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

                                        :

                                        <Fragment>

                                            <td>ب/12/3</td>
                                            <td>13/2ث</td>
                                            <td>سجاد</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>1401/12/1</td>
                                            <td>
                                                <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={props.handleEditProperty}>info</button>

                                    </td>


                                        </Fragment>

                                    }

                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </Fragment>

        )
}

export default ReportPropertyDoc