import React, {Fragment} from "react";
import Modal from "./modal";
import ObserveModal from "./observemodal";

const ReportPropertyDoc = () => {
    return (
        <Fragment>
            <ObserveModal/>
            <Modal/>

            <div className= 'plater  m-2 rounded-3 shadow-lg '>

                 <div className= 'd-flex  justify-content-between m-4' >
                                <div className= 'd-flex gap-2'>

                                    <div className='d-flex gap-2'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    منقول
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                   checked/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    غیر منقول
                                                </label>
                                        </div>
                                        <div className="form-check ms-4">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="clearedCheck"/>
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
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="سیستم">سیستم</option>
                                                <option value="شماره سند">شماره سند</option>
                                                <option value="نوع<">نوع</option>
                                                <option value="نام مالک">نام مالک</option>
                                                <option value="شماره ثبت">شماره ثبت</option>
                                                <option value="محل استقرار">محل استقرار</option>
                                                <option value="پلاک">پلاک</option>
                                                <option value="شماره شاسی">شماره شاسی</option>
                                                <option value="شماره شاسی">شماره موتور</option>
                                            </select>
                                            <label htmlFor="searchSelect">جستجو براساس</label>
                                        </div>
                   <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="جستجو براساس ele"
                           aria-label="searchBox" aria-describedby="search"/>
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="search">search</button>
                </div>
            </div>

                <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                    <table className="table table-hover text-center align-middle table-striped">
                         <thead className= 'bg-light sticky-top'>
                            <tr>
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
                            </tr>
                         </thead>

                        <tbody>
                                <tr>
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
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </Fragment>

        )
}

export default ReportPropertyDoc