import React, {Fragment, useCallback, useEffect, useRef, useState} from "react";
import Modal from "./modal";
import {Link} from "react-router-dom";
import {Toggler} from "./toggler";
import axios from "axios";
import Swal from "sweetalert2";

const Main = (props) => {
    const [contract, setContracts] = useState([])
    const [idNumber, setIdNumber] = useState(null)

    const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/documents")
        const data = await response.json()
        setContracts(data)
      }

      const deleteAlert = (id) => {
          Swal.fire({
              title: 'مطمئنید?',
              text: `امکان بازگشت داده با شماره ثبت ${id} وجود نخواهد داشت`,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'انصراف',
              confirmButtonText: 'بله, پاکش کن!'
            }).then((result) => {
              if (result.isConfirmed) {

                Swal.fire(
                  'حذف شد!',
                  'قرارداد حذف شد.',
                  'success',
                  deleteHandler(id),
                )
              }
            })
      }

      const deleteHandler = async (id) => {
          const response = await axios.delete(
            `http://127.0.0.1:8000/api/documents/${id}`
          )
            fetchData()
        }

      useEffect(() => {
            fetchData()

          }, [])

    return (
        <Fragment>
                 <Modal docToggle={props.docToggle}  modalTitle={props.modalTitle} idNumber={idNumber}/>
        <div className= 'plater  m-2 rounded-3 shadow-lg '>
            <div className= 'd-flex justify-content-between m-4' >
                <Toggler handleForm={props.handleForm}/>
                <div className= 'd-flex gap-2'>
                <Link to= '/report'><button id='reportBtn' className= 'btn btn-secondary'>گزارش</button></Link>
                <button className= 'btn btn-primary' id='registrationBtnModal' disabled={props.docToggle === null} data-bs-toggle="modal" data-bs-target="#modalMain"
                        onClick={() => props.setModalTitle('add')}>ثبت قرارداد جدید</button>
                </div>
            </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text"  id='searchBox' className="form-control" placeholder={`جستجو براساس نام ${props.docToggle ? "پیمانکار" : "کارفرما"}`}
                    aria-label="searchBox" aria-describedby="search" />
                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                </div>
            </div>
            {props.docToggle === null ?  null :
                <Fragment>
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
                                    {contract.filter(contract => contract.type_form === props.docToggle).map((data) => (
                                        <tr key={data.id}>
                                            <th scope="row">{data.id}</th>
                                            <td>{data.employer}</td>
                                            <td>{data.topicContract}</td>
                                            <td>{data.contractPrice}</td>
                                            <td>{data.dateContract}</td>
                                            <td>
                                                <button id='editBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={(e) => {
                                                    props.setModalTitle('edit')
                                                    setIdNumber(data.id)

                                                }}>edit</button>
                                                <button id='deleteBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' onClick={() =>
                                                  deleteAlert(data.id)
                                                }>delete</button>
                                                <button id='doneBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('done')}>done</button>
                                            </td>
                                        </tr>

                                        ))}
                                </tbody>
                            </table>
                        </div>
                </Fragment>
            }

        </div>
        </Fragment>

    )
}

export default Main