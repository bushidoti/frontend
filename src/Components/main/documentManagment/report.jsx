import React, {Fragment} from "react";
import Modal from "./modal";
import ObserveModal from "./uploadDocument/observemodal";

const Report = () => {
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
                                                    کارفرما
                                                </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                                   checked/>
                                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                    پیمانکار
                                                </label>
                                        </div>
                                        <div className="form-check ms-4">
                                            <input className="form-check-input" type="checkbox" value=""
                                                   id="clearedCheck"/>
                                                <label className="form-check-label" htmlFor="clearedCheck">
                                                    تسویه شده
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
                                                <option value="نام پیمانکار">نام پیمانکار</option>
                                                <option value="نام کارفرما">نام کارفرما</option>
                                                <option value="نوع قرارداد<">نوع قرارداد</option>
                                                <option value="شماره ثبت">شماره ثبت</option>
                                                <option value="شماره قرارداد">شماره قرارداد</option>
                                                <option value="تاریخ قرارداد">تاریخ قرارداد</option>
                                                <option value="موضوع قرارداد">موضوع قرارداد</option>
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
                                <th scope="col">شماره قرارداد</th>
                                <th scope="col">نام کارفرما</th>
                                <th scope="col">موضوع قرارداد</th>
                                <th scope="col">نوع قرارداد</th>
                                <th scope="col">تایخ قرارداد</th>
                                <th scope="col">مبلغ قرارداد</th>
                                <th scope="col">مدت قرارداد</th>
                                <th scope="col">مبلغ حسن انجام کار</th>
                                <th scope="col">نوع ضمانت</th>
                                <th scope="col">مشخصه ضمانت</th>
                                <th scope="col">مبلغ تعهد انجام کار</th>
                                <th scope="col">نوع ضمانت</th>
                                <th scope="col">مشخصه صمانت</th>
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

export default Report