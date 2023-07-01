import React, {Fragment, useEffect, useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import {Link} from "react-router-dom";
import Url from "../../../config";

const BillCheckModal = (props) => {
  const [product, setProduct] = useState([])



  const componentPDF= useRef();

  const generatePDF= useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle:"Data",
    });

  const fetchData = async () => {
        const response = await fetch(`${Url}/api/allproducts`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setProduct(data)
      }

   useEffect(() => {
            void fetchData()
          },
        // eslint-disable-next-line react-hooks/exhaustive-deps
       [props.modalTitle])

   const handleOpenFile = () => {
       if (props.modalTitle === 'factor') {
           return product.filter(product => product.document_code === props.factor && product.document_type === 'فاکتور')[0].factor || ''
       } else if (props.modalTitle === 'check') {
           return product.filter(product => product.document_code === props.billCheck && product.document_type === 'حواله')[0].checkBill || ''
       }
   }

  return (
      <Fragment>
         <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false"  id="billCheckModal" tabIndex="-1" aria-labelledby="billCheckModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-xl" >
                        <div className="modal-content" style={{backgroundColor:'hsl(105, 100%, 92%)'}}>
                            <div className="modal-header mx-4">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{(() => {
                                    if (props.modalTitle === 'factor'){
                                        return  `شماره فاکتور ${props.factor}`
                                    }else if (props.modalTitle === 'check') {
                                        return `شماره حواله ${props.billCheck}`
                                    }else if (props.modalTitle === 'handling') {
                                            return `شناسه انبارگردانی ${props.handling}`
                                        }
                                })()}</h1>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close" onClick={() => {
                                    props.setBillCheck('')
                                    props.setModalTitle('')
                                    props.setFactor('')
                                    props.setHandling('')
                                }}></button>
                            </div>
                            <div className="modal-body">
                                 <div className= 'd-flex mx-4 my-2 gap-2'>
                                <button className= 'btn btn-primary material-symbols-outlined'  id='export&print' onClick={generatePDF}>print</button>
                                     {props.modalTitle === 'handling' ? '' :  <Link className='text-decoration-none link-dark' download='document.pdf'
                                rel="noreferrer"  to={handleOpenFile()}><button className= 'btn btn-warning material-symbols-outlined' id='export&print'>download</button></Link> }
                                </div>
                                <hr className='bg-primary mx-4'/>
                                  <div className= 'mx-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                                    <table ref={componentPDF} className="table table-hover text-center table-striped align-middle table-bordered border-primary" style={{direction:'rtl' , fontSize:'1vw'}}>
                                        <thead className= 'bg-light'>
                                        <tr>
                                            <td colSpan='7'>
                                                {(() => {
                                                    if (props.modalTitle === 'factor'){
                                                        return  `شماره فاکتور ${props.factor}`
                                                    }else if (props.modalTitle === 'check') {
                                                        return `شماره حواله ${props.billCheck}`
                                                    }else if (props.modalTitle === 'handling') {
                                                        return `شناسه انبارگردانی ${props.handling}`
                                                    }
                                                })()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="col">ردیف</th>
                                            <th scope="col">کد کالا</th>
                                            <th scope="col">نام کالا</th>
                                            <th scope="col">تعداد</th>
                                            {props.modalTitle === 'handling' ?  null :
                                               <th scope="col">
                                                    {(() => {
                                                        if (props.modalTitle === 'factor'){
                                                            return  'گیرنده'
                                                        }else if (props.modalTitle === 'check') {
                                                            return 'مورد مصرف'
                                                        }
                                                    })()}
                                            </th>
                                            }
                                            {props.modalTitle === 'factor' ? <th>خریدار</th> : ''}
                                            {props.modalTitle === 'check' ? <th>گیرنده</th> : ''}
                                            <th scope="col">تاریخ</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                    {(product.length > 0 &&
                                    product.filter(product => {if (props.modalTitle === 'factor'){
                                        return product.document_code === props.factor && product.document_type === 'فاکتور'
                                    }else if (props.modalTitle === 'check'){
                                        return product.document_code === props.billCheck && product.document_type === 'حواله'
                                    }else if (props.modalTitle === 'handling'){
                                        return product.document_code === props.handling && product.document_type === 'انبارگردانی'
                                    }}).map((data , i) => (
                                        <tr key={data.id}>
                                                <th scope="row">{i}</th>
                                                <td>{data.product}</td>
                                                <td>{data.name}</td>
                                                <td>{data.document_type === 'حواله' ? data.output : data.input}</td>
                                            {props.modalTitle === 'handling' ?  null :
                                                 <td>{data.document_type === 'حواله' ? data.consumable : data.receiver}</td>
                                            }
                                            {data.document_type === 'فاکتور' ? <td>{data.buyer}</td> : ''}
                                            {data.document_type === 'حواله' ? <td>{data.receiver}</td> : ''}
                                            <td>{data.date}</td>
                                        </tr>
                                        ))) ||

                                       <tr>
                                          <td colSpan="6" className='h3'>داده ای یافت نشد .....</td>
                                       </tr>
                                    }
                                    <tr>
                                         {props.modalTitle === 'factor' ?
                                             <Fragment>
                                                   <td colSpan="3">مهر و امضای خریدار</td>
                                                   <td colSpan="4">مهر و امضای گیرنده</td>
                                             </Fragment>
                                             :
                                             null
                                         }
                                          {props.modalTitle === 'check' ?
                                             <Fragment>
                                                   <td colSpan="4">مهر و امضای تحویل دهنده</td>
                                                   <td colSpan="3">مهر و امضای گیرنده</td>
                                             </Fragment>
                                             :
                                             null
                                         }
                                          {props.modalTitle === 'handling' ?
                                             <Fragment>
                                                   <td colSpan="2">مهر و امضای انباردار</td>
                                                   <td colSpan="2">مهر و امضای حسابرس</td>
                                                   <td colSpan="3">مهر و امضای مدیر</td>
                                             </Fragment>
                                             :
                                             null
                                         }

                                    </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    <div className="modal-footer mx-4">
                        <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal" onClick={() => {
                                    props.setBillCheck('')
                                    props.setModalTitle('')
                                    props.setFactor('')
                        }}>close</button>
                    </div>
                </div>
            </div>
        </div>
  </Fragment>
  );
};

export default BillCheckModal