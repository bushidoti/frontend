import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Modal from "./modal";

const AddPropertyDoc = () => {
    return (
        <Fragment>
            <Modal/>

             <div className= 'plater  m-2 rounded-3 shadow-lg '>

            <div className= 'd-flex justify-content-end m-4' >

            <div className= 'd-flex gap-2'>
              <Link to= '/reportindividualsdoc'><button className= 'btn btn-secondary'>گزارش</button></Link>
              <button className= 'btn btn-primary' data-bs-toggle="modal" data-bs-target="#modalMain">ثبت قرارداد جدید</button>
            </div>

        </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="جستجو براساس شماره ثبت"
                           aria-label="searchBox" aria-describedby="search"/>
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="search">search</button>
                </div>
            </div>

            <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                <table className="table table-hover text-center table-striped align-middle">
                    <thead className= 'bg-light sticky-top'>
                    <tr>
                        <th scope="col">شماره ثبت</th>
                        <th scope="col">وضعیت</th>
                        <th scope="col">نام و نشانی</th>
                        <th scope="col">شغل</th>
                        <th scope="col">محل کار</th>
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

export default AddPropertyDoc