import React, {Fragment, useState} from "react";
import Modal from "./modal";
import ObserveModal from "./observemodal";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {CustomInputDate} from "../../../../App";

const ReportIndividualsDoc = (props) => {
    const [search , setSearch] = useState('')
    return (
        <Fragment>
            <ObserveModal/>
            <Modal  editDocumentIndividuals={props.editDocumentIndividuals}/>

            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                 <div className= 'd-flex  justify-content-end m-4' >
                    <div className= 'd-flex gap-2'>
                        <button className="btn btn-danger material-symbols-outlined " type="button" id="observeDocModal"
                        data-bs-toggle="modal" data-bs-target="#observModal">description</button>
                        <button className="btn btn-outline-secondary material-symbols-outlined " type="button" id="print">print</button>
                    </div>
                 </div>

                <div className='d-flex gap-2 align-items-center'>
                  <div className="form-floating m-4 col-1">
                    <select className="form-select" id="searchSelect"
                        aria-label="Floating label select example" onChange={(e) =>
                        setSearch(e.target.value)}>
                        <option selected disabled>یک مورد انتخاب کنید</option>
                        <option value="نام و نشان">نام و نشان</option>
                        <option value="شماره ثبت">شماره ثبت</option>
                        <option value="وضعیت">وضعیت</option>
                        <option value="جنسیت">جنسیت</option>
                        <option value="کد ملی">کد ملی</option>
                        <option value="محل کار">محل کار</option>
                        <option value="شغل">شغل</option>
                        <option value="تاریخ استخدام">تاریخ استخدام</option>
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
                       {(() => {
                                 if (search === 'تاریخ استخدام') {
                                     return (
                                         <div>
                                             <DatePicker
                                                 animations={[transition()]}
                                                 render={<CustomInputDate label='تاریخ استخدام' />}
                                                 id="clearedDatePicker"
                                                 calendar={persian}
                                                 locale={persian_fa}
                                             />
                                        </div>
                                     )
                                 }else if (search === 'جنسیت'){
                                     return (
                                            <div className="form-floating  col-2">
                                                <select className="form-select" id="sexSelector"
                                                aria-label="Floating label select example">
                                                    <option selected disabled>یک مورد انتخاب کنید</option>
                                                    <option value="مونث">مونث</option>
                                                    <option value="مذکر">مذکر</option>
                                                </select>
                                                <label htmlFor="sexSelector">جنسیت</label>
                                            </div>

                                     )

                                 }else if (search === 'محل کار'){
                                     return (
                                            <div className="col-2 form-floating">
                                                    <input className="form-control" list="workLocationList" id="workLocation" placeholder="جاسک" required/>
                                                    <label htmlFor="workLocation">محل کار</label>
                                                    <datalist id="workLocationList">
                                                                <option value="جاسک"/>
                                                                <option value="اورهال تهران"/>
                                                                <option value="اورهال اصفهان"/>
                                                                <option value="دفتر مرکزی"/>
                                                                <option value="دزفول"/>
                                                                <option value="بیشه کلا"/>
                                                                <option value="چابهار"/>
                                                    </datalist>
                                            </div>
                                     )}else if (search === 'وضعیت'){
                                         return (
                                              <div className="form-floating  col-2">
                                                    <select className="form-select" id="situationSelector"
                                                            aria-label="Floating label select example">
                                                        <option selected disabled>یک مورد انتخاب کنید</option>
                                                        <option value="قراردادی">قراردادی</option>
                                                        <option value="بیمه ای">بیمه ای</option>
                                                    </select>
                                                    <label htmlFor="situationSelector">وضعیت</label>
                                                </div>
                                         )}else {
                                                return (
                                                  <div className="input-group mb-3">
                                                    <input type="text" id='searchBox' className="form-control" placeholder={`جستجو براساس ${search}`}
                                                    aria-label="searchBox" aria-describedby="search"/>
                                                    <button className="btn btn-outline-success material-symbols-outlined"  type="button" id="searchBtn">search</button>
                                                  </div>
                                                 )
                                             }
                                  })()}
                </div>

                <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                    <table className="table table-hover text-center align-middle table-striped">
                         <thead className= 'bg-light'>
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
                                        <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" id='infoModalBtn' data-bs-target="#modalMain"
                                        onClick={props.handleEditDocumentIndividuals}>info</button>
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