import React, {Fragment, useEffect, useState} from "react";
import ObserveModal from "./observemodal";
import Modal from "./main_modal";
import BillCheckmodal from "./bill&checkmodal";
import axios from "axios";
import Swal from "sweetalert2";

const WarHouse = (props) => {
    const [product, setProduct] = useState([])
    const [idNumber, setIdNumber] = useState(null)

    const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/product/?code=${props.formik.values.code}`)
        const data = await response.json()
        setProduct(data)
      }

    useEffect(() => {
            fetchData()
          }, [props.formik.values.code])

    return (
        <Fragment>
        <ObserveModal setModalTitle={props.setModalTitle} idNumber={idNumber}/>
        <Modal modalTitle={props.modalTitle} idNumber={idNumber}/>
        <BillCheckmodal modalTitle={props.modalTitle}/>
        <div className= 'plater  m-2 rounded-3 shadow-lg '>
            <div className= 'd-flex justify-content-between m-4' >
                <div className='d-flex gap-2'>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="billBtn" data-bs-toggle="modal"
                        data-bs-target="#billCheckModal" onClick={() => props.setModalTitle('factor')}>قبض انبار</button>
                        <input type="text" className="form-control" placeholder="شماره فاکتور"
                        aria-label="قبض انبار" id="billInp" aria-describedby="billBtn"/>
                    </div>
                     <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary"  type="button" id="checkBtn"
                        data-bs-toggle="modal" data-bs-target="#billCheckModal" onClick={() => props.setModalTitle('check')}>صدور حواله</button>
                        <input type="text" className="form-control" id="checkInp" placeholder="شماره حواله"
                        aria-label="صدور حواله" aria-describedby="checkBtn"/>
                    </div>
                </div>

                <div className= 'd-flex gap-2'>
                <button className= 'btn btn-primary'  id='registrationBtnModal' data-bs-toggle="modal"
                data-bs-target="#modalMain" onClick={() => props.setModalTitle('register')}>ثبت کالا جدید</button>
                </div>
            </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text"  id='searchBox' className="form-control" value={props.formik.values.code}
                    onChange={e => props.formik.setFieldValue('code' , e.target.value)} placeholder='جستجو براساس کد کالا'
                    aria-label="searchBox" aria-describedby="search" />
                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                </div>
            </div>

            <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                <table className="table table-hover text-center table-striped align-middle table-bordered border-primary">
                    <thead className= 'bg-light'>
                    <tr>
                        <th scope="col">کد</th>
                        <th scope="col">نام</th>
                        <th scope="col">ورود</th>
                        <th scope="col">خروج</th>
                        <th scope="col">مانده</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {(product.length > 0 && product.map((data) => (
                    <tr key={data.code}>
                        <th scope="row">{data.code}</th>
                        <td>{data.name}</td>
                        <td>{data.input}</td>
                        <td>{data.output}</td>
                        <td>{data.left_stock}</td>
                        <td>
                            <button id='visibilityBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#observeModal" title="کاردکس">visibility</button>
                            <button id='moveBtn' className= 'btn btn-secondary material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain"
                            title="جا به جایی" onClick={() => {
                                setIdNumber(data.code)
                                props.setModalTitle('move')
                            }}>upload</button>
                            <button id='exitBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain"
                            title="خروج" onClick={() => {
                                setIdNumber(data.code)
                                props.setModalTitle('remove')
                            }}>remove</button>
                            <button id='entryBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain"
                            title="ورود" onClick={() => {
                                setIdNumber(data.code)
                                props.setModalTitle('entry')
                            }}>add</button>
                        </td>
                    </tr>
                         ))) || <td colSpan="6" className='h3'>داده ای یافت نشد .....</td>
                    }
                    </tbody>
                </table>
            </div>
        </div>
        </Fragment>
    )
}
export default WarHouse