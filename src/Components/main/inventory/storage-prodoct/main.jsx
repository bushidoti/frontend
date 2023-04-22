import React, {Fragment} from "react";
import ObserveModal from "./observemodal";
import Modal from "./main_modal";
import BillCheckmodal from "./bill&checkmodal";

const WarHouse = (props) => {

    return (
        <Fragment>
        <ObserveModal setModalTitle={props.setModalTitle}/>
        <Modal modalTitle={props.modalTitle}/>
        <BillCheckmodal modalTitle={props.modalTitle}/>
        <div className= 'plater  m-2 rounded-3 shadow-lg '>
            <div className= 'd-flex justify-content-between m-4' >
                <div className='d-flex gap-2'>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="billBtn" data-bs-toggle="modal" data-bs-target="#billCheckModal" onClick={() => props.setModalTitle('factor')}>قبض انبار</button>
                        <input type="text" className="form-control" placeholder="شماره فاکتور"
                        aria-label="قبض انبار" id="billInp" aria-describedby="billBtn"/>
                    </div>
                     <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary"  type="button" id="checkBtn" data-bs-toggle="modal" data-bs-target="#billCheckModal" onClick={() => props.setModalTitle('check')}>صدور حواله</button>
                        <input type="text" className="form-control" id="checkInp" placeholder="شماره حواله"
                        aria-label="صدور حواله" aria-describedby="checkBtn"/>
                    </div>
                </div>

                <div className= 'd-flex gap-2'>
                <button className= 'btn btn-primary'  id='registrationBtnModal' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('register')}>ثبت کالا جدید</button>
                </div>
            </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text"  id='searchBox' className="form-control" placeholder='جستجو براساس کد کالا'
                    aria-label="searchBox" aria-describedby="search" />
                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                </div>
            </div>

            <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                <table className="table table-hover text-center table-striped align-middle">
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
                    <tr>
                        <th scope="row">101100</th>
                        <td>مداد</td>
                        <td>20</td>
                        <td>10</td>
                        <td>10</td>
                        <td>
                            <button id='visibilityBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#observeModal" title="کاردکس">visibility</button>
                            <button id='moveBtn' className= 'btn btn-secondary material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain" title="جا به جایی" onClick={() => props.setModalTitle('move')}>upload</button>
                            <button id='exitBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain" title="خروج" onClick={() => props.setModalTitle('remove')}>remove</button>
                            <button id='entryBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain" title="ورود" onClick={() => props.setModalTitle('entry')}>add</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </Fragment>
    )
}
export default WarHouse