import React, {Fragment, useEffect, useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import {Link} from "react-router-dom";

const BillCheckModal = (props) => {
  const [product, setProduct] = useState([])
  const [file, setFile] = useState([])



  const conponentPDF= useRef();

  const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Data",
    });

  const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/allproducts`)
        const data = await response.json()
        setProduct(data)
      }

  const fetchDataSpecific = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/allproducts/?document_code=${props.modalTitle === 'factor' ? props.factor : props.billCheck }
        &document_type=${props.modalTitle === 'factor' ? 'فاکتور' : 'حواله' }`)
        const data = await response.json()
        setFile(data)
      }
   useEffect(() => {
            fetchData()
            fetchDataSpecific()
          }, [props.modalTitle])

   const handleOpenFile = () => {
       if (props.modalTitle === 'factor') {
           return file[0].factor
       } else if (props.modalTitle === 'check') {
           return file[0].checkBill
       }
   }

  return (
      <Fragment>
         <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="billCheckModal" tabIndex="-1" aria-labelledby="billCheckModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-xl" >
                        <div className="modal-content">
                            <div className="modal-header mx-4">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{(() => {
                                    if (props.modalTitle === 'factor'){
                                        return  `شماره فاکتور ${props.factor}`
                                    }else if (props.modalTitle === 'check') {
                                        return `شماره حواله ${props.billCheck}`
                                    }
                                })()}</h1>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close" onClick={() => {
                                    props.setBillCheck('')
                                    props.setFactor('')
                                }}></button>
                            </div>
                            <div className="modal-body">
                                 <div className= 'd-flex mx-4 my-2 gap-2'>
                                <button className= 'btn btn-primary material-symbols-outlined'  id='export&print' onClick={generatePDF}>print</button>
                                <Link className='text-decoration-none link-dark' download='document.pdf'
                                rel="noreferrer" to={handleOpenFile()} ><button className= 'btn btn-warning material-symbols-outlined'  id='export&print'>download</button></Link>
                                </div>
                                <hr className='bg-primary mx-4'/>
                                  <div className= 'mx-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                                    <table ref={conponentPDF} className="table table-hover text-center table-striped align-middle table-bordered border-primary" style={{direction:'rtl'}}>
                                        <thead className= 'bg-light'>
                                        <tr>
                                            <th scope="col">ردیف</th>
                                            <th scope="col">کد کالا</th>
                                            <th scope="col">نام کالا</th>
                                            <th scope="col">تعداد</th>
                                            <th scope="col">
                                            {(() => {
                                                if (props.modalTitle === 'factor'){
                                                    return  'گیرنده'
                                                }else if (props.modalTitle === 'check') {
                                                    return 'خریدار'
                                                }
                                            })()}
                                            </th>
                                            <th scope="col">تاریخ</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                    {(product.length > 0 &&
                                    product.filter(product =>
                                    (product.document_code === props.factor && product.document_type === 'فاکتور')
                                    || (product.document_code === props.billCheck && product.document_type === 'حواله') ).map((data , i) => (
                                        <tr key={data.id}>
                                            <th scope="row">{i}</th>
                                            <td>{data.product}</td>
                                            <td>{data.name}</td>
                                            <td>{data.document_type === 'حواله' ? data.output : data.input}</td>
                                            <td>{data.document_type === 'حواله' ? data.buyer : data.receiver}</td>
                                            <td>{data.date}</td>
                                        </tr>
                                        ))) || <td colSpan="6" className='h3'>داده ای یافت نشد .....</td>
                                    }
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <div className="modal-footer mx-4">
                        <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal">close</button>
                        <button type="submit" className="btn material-symbols-outlined btn-success">done</button>
                    </div>
                </div>
            </div>
        </div>
  </Fragment>
  );
};

export default BillCheckModal