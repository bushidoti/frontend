import React, {Fragment, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Modal from "./modal";
import axios from "axios";
import Swal from "sweetalert2";

const AddIndividualsDoc = (props) => {
    const [contract, setContracts] = useState([])
    const [idNumber, setIdNumber] = useState(null)

    const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/persons/?full_name=${props.formik.values.full_name}`)
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
            `http://127.0.0.1:8000/api/persons/${id}`
          )
            fetchData()
       }

       useEffect(() => {
            fetchData()
          }, [props.formik.values.full_name])
    return (
     <Fragment>
            <Modal ModalTitle={props.modalTitle} editDocumentIndividuals={props.editDocumentIndividuals} idNumber={idNumber}/>

             <div className= 'plater  m-2 rounded-3 shadow-lg '>

                <div className= 'd-flex justify-content-end m-4' >
                    <div className= 'd-flex gap-2'>
                      <Link to= '/reportindividualsdoc'><button className= 'btn btn-secondary'>گزارش</button></Link>
                      <button className= 'btn btn-primary' id='modalAddBtn' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => props.setModalTitle('add')}>ثبت قرارداد جدید</button>
                    </div>
                </div>

             <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text" id='searchBox' className="form-control" placeholder="جستجو براساس نام و نشان"
                    aria-label="searchBox" aria-describedby="search" value={props.formik.values.full_name}
                    onChange={e => props.formik.setFieldValue('full_name' , e.target.value)}/>
                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                </div>
             </div>

            <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                <table className="table table-hover text-center table-striped align-middle table-bordered border-primary">
                    <thead className= 'bg-light'>
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
                    {(contract.length > 0 && contract.map((data) => (
                        <tr key={data.id}>
                            <th scope="row">{data.id}</th>
                            <td>{data.type}</td>
                            <td>{data.full_name}</td>
                            <td>{data.job}</td>
                            <td>{data.office}</td>
                            <td>
                                <button id='editBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                    setIdNumber(data.id)
                                    props.setModalTitle('edit')
                                }}>edit</button>
                                <button id='deleteBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' onClick={() =>
                                deleteAlert(data.id)}>delete</button>
                                <button id='doneBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                    setIdNumber(data.id)
                                    props.setModalTitle('done')
                                    props.handleEditDocumentIndividuals()
                                }}>done</button>
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

export default AddIndividualsDoc