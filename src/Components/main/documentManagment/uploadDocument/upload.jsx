import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {useFormik} from "formik";

const UploadDocuments = () => {
    const [partitionSelect , setPartitionSelect] = useState('')
    const [search , setSearch] = useState('')
    const [contract, setContracts] = useState([])
    const [allContract, setAllContract] = useState([])
    const [contractId, setContractId] = useState('')
    const formik = useFormik({
    initialValues: {
      id: contract.id,
      contractNumber: contract.contractNumber,
      employer: contract.employer,
      dateContract: contract.dateContract,
      contractPrice: contract.contractPrice,
      durationContract: contract.durationContract,
      prePaidPrice: contract.prePaidPrice,
      goodPrice: contract.goodPrice,
      typeBail1: contract.typeBail1,
      firstBail: contract.firstBail,
      secondBail: contract.secondBail,
      commitmentPrice: contract.commitmentPrice,
      typeBail2: contract.typeBail2,
      firstBail2: contract.firstBail2,
      secondBail2: contract.secondBail2,
      topicContract: contract.topicContract,
      typeContract: contract.typeContract,
      doc_1: contract.doc_1,
      doc_2: contract.doc_2,
      doc_3: contract.doc_3,
      doc_4: contract.doc_4,
      doc_bail_1: contract.doc_bail_1,
      doc_bail_2: contract.doc_bail_2,

    },
    enableReinitialize: true,
    onSubmit: (values) => {
        console.log(values);
    },
    });

     const fetchDataSpecific = async () => {
         if (contractId !== ''){
                const response = await fetch(`http://127.0.0.1:8000/api/documents/${contractId}/`)
                const data = await response.json()
                setContracts(data)
         }

      }

      const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/documents")
        const data = await response.json()
        setAllContract(data)
      }

      const handleId = (e) => {
            allContract.filter(contract => contract.contractNumber === e.target.value).map((data) => (
                setContractId(data.id)
            ))
      }

          useEffect(() => {
            void fetchData()
            void fetchDataSpecific()

          },
            // eslint-disable-next-line react-hooks/exhaustive-deps
          [contractId])

        const putHandler = async () => {
            await axios.put(
                `http://127.0.0.1:8000/api/documents/${contractId}/`,
                  {
                      contractNumber: formik.values.contractNumber,
                      employer: formik.values.employer,
                      dateContract: formik.values.dateContract,
                      contractPrice: formik.values.contractPrice,
                      durationContract: formik.values.durationContract,
                      prePaidPrice: formik.values.prePaidPrice,
                      goodPrice: formik.values.goodPrice,
                      typeBail1: formik.values.typeBail1,
                      firstBail: formik.values.firstBail,
                      secondBail: formik.values.secondBail,
                      commitmentPrice: formik.values.commitmentPrice,
                      typeBail2: formik.values.typeBail2,
                      firstBail2: formik.values.firstBail2,
                      secondBail2: formik.values.secondBail2,
                      topicContract: formik.values.topicContract,
                      typeContract: formik.values.typeContract,
                      doc_1: formik.values.doc_1,
                      doc_2: formik.values.doc_2,
                      doc_3: formik.values.doc_3,
                      doc_4: formik.values.doc_4,
                      doc_bail_1: formik.values.doc_bail_1,
                      doc_bail_2: formik.values.doc_bail_2,
             })
        }

       function reader(file, callback) {
              const fr = new FileReader();
              fr.onload = () => callback(null, fr.result);
              fr.onerror = (err) => callback(err);
              fr.readAsDataURL(file);
            }

        function doc_1(e) {
              reader(e.target.files[0], (err, res) => {
                formik.setFieldValue('doc_1' , res)
              });
            }

        function doc_2(e) {
              reader(e.target.files[0], (err, res) => {
                formik.setFieldValue('doc_2' , res)
              });
            }

        function doc_3(e) {
              reader(e.target.files[0], (err, res) => {
                formik.setFieldValue('doc_3' , res)
              });
            }

        function doc_4(e) {
          reader(e.target.files[0], (err, res) => {
            formik.setFieldValue('doc_4' , res)
          });
        }

        function doc_bail_1(e) {
          reader(e.target.files[0], (err, res) => {
            formik.setFieldValue('doc_bail_1' , res)
          });
        }

        function doc_bail_2(e) {
          reader(e.target.files[0], (err, res) => {
            formik.setFieldValue('doc_bail_2' , res)
          });
        }
    return (
        <Fragment>
            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                     <div className="form-floating m-4 col-1">
                        <select className="form-select" defaultValue='' id="partitionSelect"
                        aria-label="partitionSelect" onChange={(e) => setPartitionSelect(e.target.value)}>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="قرارداد">قرارداد</option>
                            <option value="تضامین">تضامین</option>
                        </select>
                        <label htmlFor="partitionSelect">بارگذاری بخش</label>
                     </div>

                     <div className='m-4'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" value={search} onChange={e => {
                                    setSearch(e.target.value)
                                     handleId(e)
                                }} placeholder="شماره قرارداد"
                                aria-label="searchBox" aria-describedby="searchDocuments"/>
                                <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                            </div>
                            {allContract.filter(contract => contract.contractNumber === search).map((data) => (
                                <div className="alert alert-success" role="alert" key={data.id}>
                                    قرارداد با شماره ثبت {data.id} یافت شد.
                                </div>
                            ))}
                         {(() => {
                            if (allContract.filter(contract => contract.contractNumber === search).length !== 0){
                                return (
                                    <div className= 'mt-5'>
                                    {(() => {
                                        if (partitionSelect === 'قرارداد'){
                                            return (
                                                <Fragment>
                                                  <div className="input-group mb-3 align-items-center">
                                                        <label className='me-2'>صفحه 1</label>
                                                        <button className="btn btn-outline-secondary" type="button" id="firstPageBtn" onClick={putHandler}>بارگذاری</button>
                                                        <input type="file" name='doc_1'  accept="application/pdf" onChange={doc_1} className="form-control" id="firstPageInp"
                                                        aria-describedby="firstPageBtn" aria-label="firstPageInp"/>
                                                  </div>
                                                  <div className="input-group mb-3 align-items-center">
                                                         <label className='me-2'>صفحه 2</label>
                                                         <button className="btn btn-outline-secondary" type="button" id="secondPageBtn" onClick={putHandler}>بارگذاری</button>
                                                         <input type="file" name='doc_2' accept="application/pdf" className="form-control" id="secondPageInp"
                                                         aria-describedby="secondPageBtn" aria-label="secondPageInp" onChange={doc_2}/>
                                                  </div>

                                                  <div className="input-group mb-3 align-items-center">
                                                         <label className='me-2'>صفحه 3</label>
                                                         <button className="btn btn-outline-secondary" type="button" id="thirdPageBtn" onClick={putHandler}>بارگذاری</button>
                                                         <input type="file" className="form-control" accept="application/pdf" name='doc_3' id="thirdPageInp"
                                                         aria-describedby="thirdPageBtn" aria-label="thirdPageInp" onChange={doc_3}/>
                                                  </div>

                                                  <div className="input-group mb-3 align-items-center">
                                                          <label className='me-2'>صفحه 4</label>
                                                          <button className="btn btn-outline-secondary" type="button" id="forthPageBtn" onClick={putHandler}>بارگذاری</button>
                                                          <input type="file" className="form-control" accept="application/pdf" name='doc_4' id="forthPageInp"
                                                          aria-describedby="forthPageBtn" aria-label="forthPageInp" onChange={doc_4}/>
                                                  </div>
                                                </Fragment>
                                            )
                                        } else if (partitionSelect === 'تضامین'){
                                            return (
                                                <Fragment>
                                                          <div className="input-group mb-3 align-items-center">
                                                              <label className='me-2'>ضمانت اول</label>
                                                              <button className="btn btn-outline-secondary" type="button" id="firstBailBtn" onClick={putHandler}>بارگذاری</button>
                                                              <input type="file" className="form-control" accept="application/pdf" name='doc_bail_1' onChange={doc_bail_1} id="firstBailInp"
                                                              aria-describedby="firstBailBtn" aria-label="firstBailInp"/>
                                                          </div>
                                                          <div className="input-group mb-3 align-items-center">
                                                              <label className='me-2'>ضمانت دوم</label>
                                                              <button className="btn btn-outline-secondary" type="button" id="secondBailBtn" onClick={putHandler}>بارگذاری</button>
                                                              <input type="file" className="form-control" accept="application/pdf" name='doc_bail_2' onChange={doc_bail_2} id="secondBailInp"
                                                              aria-describedby="secondBailBtn" aria-label="secondBailInp"/>
                                                          </div>
                                                </Fragment>
                                            )
                                        }

                                    })()}
                        </div>
                                )
                            }
                         })()}


                    </div>
                 </div>
        </Fragment>
    )
}
export default  UploadDocuments