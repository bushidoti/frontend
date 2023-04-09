import React, {Fragment} from "react";
import Modal from "./modal";
import {Link} from "react-router-dom";

const Main = (props) => {

    return (
        <Fragment>
            <Modal docToggle={props.docToggle}/>

        <div className= 'plater  m-2 rounded-3 shadow-lg '>

            <div className= 'd-flex justify-content-between m-4' >
                <div className= 'd-flex gap-2'>

                    <div className='d-flex gap-2'>
                        <div className="form-check">
                            <input className="form-check-input"  type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='کارفرما' onChange={props.handleForm}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    کارفرما
                                </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" value='پیمانکار' type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                   onChange={props.handleForm}/>
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    پیمانکار
                                </label>
                        </div>
                    </div>
                </div>

            <div className= 'd-flex gap-2'>
              <Link to= '/report'><button className= 'btn btn-secondary'>گزارش</button></Link>
              <button className= 'btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalMain">ثبت قرارداد جدید</button>
            </div>

        </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder={`جستوجو براساس نام ${props.docToggle ? "پیمانکار" : "کارفرما"}`} aria-label="searchBox" aria-describedby="search" />
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="search"  >search</button>
                </div>
            </div>

            <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                <table className="table table-hover text-center table-striped align-middle">
                    <thead className= 'bg-light'>
                    <tr>
                        <th scope="col">شماره ثبت</th>
                        <th scope="col">نام {props.docToggle ? "پیمانکار" : "کارفرما"}</th>
                        <th scope="col">موضوع قرارداد</th>
                        <th scope="col">مبلغ قرارداد</th>
                        <th scope="col">تاریخ</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>حسین شاه محمدلو</td>
                        <td>حسابداری</td>
                        <td>2000000</td>
                        <td>1401/12/1</td>
                        <td>
                            <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain">edit</button>
                            <button className= 'btn btn-danger   material-symbols-outlined ms-2' >delete</button>
                            <button className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain">done</button>


                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>حسین شاه محمدلو</td>
                        <td>حسابداری</td>
                        <td>2000000</td>
                        <td>1401/12/1</td>
                        <td>
                            <button className= 'btn btn-warning material-symbols-outlined'>edit</button>
                            <button className= 'btn btn-danger   material-symbols-outlined ms-2'>delete</button>
                            <button className= 'btn btn-success   material-symbols-outlined ms-2'>done</button>

                        </td>
                    </tr>
                    <tr>
                        <th scope="row">1</th>
                        <td>حسین شاه محمدلو</td>
                        <td>حسابداری</td>
                        <td>2000000</td>
                        <td>1401/12/1</td>
                        <td>
                            <button className= 'btn btn-warning material-symbols-outlined'>edit</button>
                            <button className= 'btn btn-danger   material-symbols-outlined ms-2'>delete</button>
                            <button className= 'btn btn-success   material-symbols-outlined ms-2'>done</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </Fragment>

    )
}

export default Main