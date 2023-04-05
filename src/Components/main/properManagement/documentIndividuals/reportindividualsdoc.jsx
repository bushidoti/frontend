
import React, {Fragment} from "react";
import Modal from "./modal";
import ObserveModal from "./observemodal";

const ReportIndividualsDoc = () => {
    return (
        <Fragment>
            <ObserveModal/>
            <Modal/>

            <div className= 'plater  m-2 rounded-3 shadow-lg '>

                 <div className= 'd-flex  justify-content-end m-4' >


                            <div className= 'd-flex gap-2'>
                                <button className="btn btn-danger material-symbols-outlined " type="button" id="observeDocs"  data-bs-toggle="modal" data-bs-target="#observModal">description</button>
                                <button className="btn btn-outline-secondary material-symbols-outlined " type="button" id="print">print</button>
                            </div>

                        </div>

                <div className='d-flex gap-2 align-items-center'>

                  <div className="form-floating m-4 col-1">

                                            <select className="form-select" id="searchSelect"
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="سیستم">نام و نشان</option>
                                                <option value="شماره سند">شماره ثبت</option>
                                                <option value="نوع<">وضعیت</option>
                                                <option value="نام مالک">جنسیت</option>
                                                <option value="شماره ثبت">کد ملی</option>
                                                <option value="محل استقرار">محل کار</option>
                                                <option value="پلاک">شغل</option>
                                                <option value="شماره شاسی">تاریخ اسخدام</option>
                                            </select>
                                            <label htmlFor="searchSelect">جستجو براساس</label>
                                        </div>
                        <div className="form-check ms-4">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="clearedCheck"/>
                                                <label className="form-check-label" htmlFor="clearedCheck">
                                                    تسویه شده
                                                </label>
                                        </div>
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
                                <th scope="col">وضعیت</th>
                                <th scope="col">نام و نشان</th>
                                <th scope="col">جنسیت</th>
                                <th scope="col">تاریخ استخدام</th>
                                <th scope="col">کد ملی</th>
                                <th scope="col">محل کار</th>
                                <th scope="col">شغل</th>
                                <th scope="col">تضمین مصوب</th>
                                <th scope="col">مبلغ تضمین</th>
                                <th scope="col">وثیقه تضمین</th>
                                <th scope="col">مشخصه وثیقه</th>
                                <th scope="col">وضعیت تسویه</th>
                                <th scope="col">تاریخ تسویه</th>
                                <th scope="col">وضعیت مدرک</th>
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

export default ReportIndividualsDoc