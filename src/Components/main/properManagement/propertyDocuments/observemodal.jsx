import React, {Fragment, useEffect, useState} from "react";
import {Link} from "react-router-dom";
const ObserveModal = () => {
    const [search , setSearch] = useState('')
    const [allContract, setAllContract] = useState([])
    const [property, setProperties] = useState([])
    const [contractId, setContractId] = useState('')
    const [selectedFile, setSelectedFile] = useState('')
    const [partitionSelect , setPartitionSelect] = useState('')

    const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/properties")
        const data = await response.json()
        setAllContract(data)
      }

     const fetchDataSpecific = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/properties/${contractId}/`)
        const data = await response.json()
        setProperties(data)
      }

     const handleId = (e) => {
            allContract.filter(contract => contract.docNumber === e.target.value).map((data) => (
                setContractId(data.id)
            ))
      }

     const handleOpenFile = () => {
        if (selectedFile === 'saleFactorFile'){
            return property.saleFactorFile
        }else if (selectedFile === 'insurancePaperFile'){
            return property.insurancePaperFile
        }else if (selectedFile === 'carCardFile'){
            return property.carCardFile
        }else if (selectedFile === 'greenCardFile'){
            return property.greenCardFile
        }else if (selectedFile === 'gasCardFile'){
            return property.gasCardFile
        }
    }

    useEffect(() => {
            fetchData()
            fetchDataSpecific()

          }, [contractId])

       function refreshPage() {
            window.location.reload();
      }
  return (
      <Fragment>
        <div className="modal fade " data-bs-backdrop="static" data-bs-keyboard="false" id="observModal" tabIndex="-1" aria-labelledby="observModalLabel"
        aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">نمایش مدارک</h1>
                            <button type="button" className="btn-close " data-bs-dismiss="modal"
                            aria-label="Close" onClick={refreshPage}></button>
                        </div>

                        <div className="container modal-body">
                            <div className="input-group mb-3">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" value={search} onChange={e => {
                                    setSearch(e.target.value)
                                     handleId(e)
                                }} placeholder="شماره سند"
                                aria-label="searchBox" aria-describedby="searchDocuments"/>
                                <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                            </div>
                            </div>
                              {allContract.filter(contract => contract.docNumber === search).map((data) => (
                                    <div className="alert alert-success" role="alert">
                                        سند با شماره ثبت {data.id} یافت شد.
                                    </div>
                             ))}
                            <hr className='bg-primary my-5'/>
                            <div className='row'>
                                <div className="input-group mb-3">
                                    <Link className='text-decoration-none link-dark' download='document.pdf'
                                                  rel="noreferrer" to={handleOpenFile()} >
                                            <button className="btn btn-outline-success"  type="button">
                                            نمایش</button></Link>
                                    <select className="form-select" id="checkFileSelector" onChange={e => setSelectedFile(e.target.value)}
                                    aria-label="checkFileBtn">
                                        <option selected>فایل مورد نظر را انتخاب کنید</option>
                                        <option value="greenCardFile">کارت سبز</option>
                                        <option value="carCardFile">کارت ماشین</option>
                                        <option value="gasCardFile">کارت سوخت</option>
                                        <option value="insurancePaperFile">بیمه نامه</option>
                                        <option value="saleFactorFile">فاکتور فروش</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal" onClick={refreshPage}>close</button>
                        </div>
            </div>
        </div>
    </div>
</Fragment>
  );
};
export default ObserveModal