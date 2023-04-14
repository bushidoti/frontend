import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Modal from "./modal";

const AddPropertyDoc = (props) => {
    return (
        <Fragment>
            <Modal propToggle={props.propToggle} ModalTitle={props.modalTitle}/>

        <div className= 'plater  m-2 rounded-3 shadow-lg '>
                    <div className= 'd-flex justify-content-between m-4' >
                        <div className= 'd-flex gap-2'>
                            <div className='d-flex gap-2'>
                                <div className="form-check">
                                    <input className="form-check-input" value='منقول' type="radio"
                                    name="flexRadioDefault" id="manghol" onChange={props.handleFormProp}/>
                                    <label className="form-check-label" htmlFor="manghol">
                                    منقول
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" value='غیر منقول' type="radio"
                                    name="flexRadioDefault" id="gheirManghol" onChange={props.handleFormProp} />
                                    <label className="form-check-label" htmlFor="gheirManghol">
                                    غیر منقول
                                    </label>
                                </div>
                        </div>
                    </div>

                        <div className= 'd-flex gap-2'>
                          <Link to= '/reportpropertydoc'><button className= 'btn btn-secondary'>گزارش</button></Link>
                          <button className= 'btn btn-primary' id='addDocument' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('add')}>ثبت سند جدید</button>
                        </div>

                    </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text" id='searchBox' className="form-control" placeholder="جستجو براساس شماره ثبت"
                    aria-label="searchBox" aria-describedby="search"/>
                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                </div>
            </div>
            <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                <table className="table table-hover text-center table-striped align-middle">
                    <thead className= 'bg-light'>
                    <tr>
                        <th scope="col">شماره ثبت</th>
                        <th scope="col">اموال</th>
                        <th scope="col">نوع</th>
                        {props.propToggle ?
                                 <Fragment>
                                    <th scope="col">نام</th>
                                    <th scope="col">آدرس</th>
                                 </Fragment>
                            :
                                 <Fragment>
                                    <th scope="col">سیستم</th>
                                    <th scope="col">محل استقرار</th>
                                 </Fragment>
                        }
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
                            <button id='editBtn' className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('edit')}>edit</button>
                            <button id='deleteBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' >delete</button>
                            <button id='sellBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('done')}>done</button>
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