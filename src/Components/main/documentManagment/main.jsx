import React, {Fragment, useEffect, useState} from "react";
import Modal from "./modal";
import {Link} from "react-router-dom";
import {Toggler} from "./toggler";

const Main = (props) => {
    const [contract, setContracts] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/documents")
        const data = await response.json()
        setContracts(data)
      }
      useEffect(() => {
            fetchData()
          }, [])

    return (
        <Fragment>

            <Modal docToggle={props.docToggle} modalTitle={props.modalTitle}/>

        <div className= 'plater  m-2 rounded-3 shadow-lg '>
            <div className= 'd-flex justify-content-between m-4' >
                <Toggler handleForm={props.handleForm}/>
                <div className= 'd-flex gap-2'>
                <Link to= '/report'><button id='reportBtn' className= 'btn btn-secondary'>گزارش</button></Link>
                <button className= 'btn btn-primary'  id='registrationBtnModal' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('add')}>ثبت قرارداد جدید</button>
                </div>
            </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text"  id='searchBox' className="form-control" placeholder={`جستجو براساس نام ${props.docToggle ? "پیمانکار" : "کارفرما"}`}
                    aria-label="searchBox" aria-describedby="search" />
                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
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
                    {contract.map(contract => (
                    <tr key={contract.id}>
                        <th scope="row">{contract.id}</th>
                        <td>{contract.employer}</td>
                        <td>{contract.topicContract}</td>
                        <td>{contract.contractPrice}</td>
                        <td>{contract.dateContract}</td>
                        <td>
                            <button id='editBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('edit')}>edit</button>
                            <button id='deleteBtn' className= 'btn btn-danger   material-symbols-outlined ms-2'>delete</button>
                            <button id='doneBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('done')}>done</button>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
        </Fragment>

    )
}

export default Main