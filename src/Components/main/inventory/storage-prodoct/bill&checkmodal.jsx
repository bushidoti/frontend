import React, {Fragment, useContext, useEffect, useRef, useState} from "react";
import {useReactToPrint} from "react-to-print";
import {Link} from "react-router-dom";
import Url from "../../../config";
import {Context} from "../../../../context";

const BillCheckModal = () => {
  const [product, setProduct] = useState([])
  const context = useContext(Context)



  const componentPDF= useRef();

  const generatePDF= useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle:"Data",
    });

  const fetchData = async () => {
        const response = await fetch(`${Url}/api/allproducts/?fields=document_code,document_type,factor,checkBill,product,name,scale,input,output,consumable,receiver,buyer,id,date&document_code=${filterDocument()}&document_type=${filterDocumentType()}`, {
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
       [])


   const handleOpenFile = () => {
       if (context.modalTitle === 'factor') {
           return product.filter(product => product.document_code === context.factor && product.document_type === 'فاکتور')[0].factor || ''
       } else if (context.modalTitle === 'check') {
           return product.filter(product => product.document_code === context.billCheck && product.document_type === 'حواله')[0].checkBill || ''
       }
   }

     const onButtonClick = () => {
        fetch(`${handleOpenFile()}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = FileNameHandler();
                alink.click();
            })
        })
    }
  const FileNameHandler = () => {
           if (context.modalTitle === 'factor'){
                return  `فایل فاکتور ${context.factor}`
            }else if (context.modalTitle === 'check') {
                return `فایل حواله ${context.billCheck}`
            }else if (context.modalTitle === 'handling') {
                    return `فایل انبارگردانی ${context.handling}`
                }
  }
  return (
      <Fragment>
                <div className="plater m-2 rounded-3 shadow-lg" >
                        <div className="modal-content" style={{backgroundColor:'hsl(105, 100%, 92%)'}}>
                            <div className="modal-header mx-4">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">{(() => {
                                    if (context.modalTitle === 'factor'){
                                        return  `شماره فاکتور ${context.factor}`
                                    }else if (context.modalTitle === 'check') {
                                        return `شماره حواله ${context.billCheck}`
                                    }else if (context.modalTitle === 'handling') {
                                            return `شناسه انبارگردانی ${context.handling}`
                                        }
                                })()}</h1>
                                <Link to= '/warehouse'>
                                <button type="button" className="btn-close "
                                aria-label="Close" onClick={() => {
                                    context.setBillCheck('')
                                    context.setModalTitle('')
                                    context.setFactor('')
                                    context.setHandling('')
                                }}></button></Link>
                            </div>
                            <div className="modal-body">
                                 <div className= 'd-flex mx-4 my-2 gap-2'>
                                <button className= 'btn btn-primary material-symbols-outlined'  id='export&print' onClick={generatePDF}>print</button>
                                     {context.modalTitle === 'handling' ? '' : <button className= 'btn btn-warning material-symbols-outlined' id='export&print' onClick={onButtonClick}>download</button> }
                                </div>
                                <hr className='bg-primary mx-4'/>
                                  <div className= 'mx-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                                    <table ref={componentPDF} className="table table-hover text-center table-striped align-middle table-bordered border-primary" style={{direction:'rtl' , fontSize:'1vw'}}>
                                        <thead className= 'bg-light'>
                                        <tr>
                                            <td colSpan='8'>
                                                {(() => {
                                                    if (context.modalTitle === 'factor'){
                                                        return  `شماره فاکتور ${context.factor}`
                                                    }else if (context.modalTitle === 'check') {
                                                        return `شماره حواله ${context.billCheck}`
                                                    }else if (context.modalTitle === 'handling') {
                                                        return `شناسه انبارگردانی ${context.handling}`
                                                    }
                                                })()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="col">ردیف</th>
                                            <th scope="col">کد کالا</th>
                                            <th scope="col">نام کالا</th>
                                            <th scope="col">مقیاس</th>
                                            <th scope="col">تعداد</th>
                                            {context.modalTitle === 'handling' ?  null :
                                               <th scope="col">
                                                    {(() => {
                                                        if (context.modalTitle === 'factor'){
                                                            return  'گیرنده'
                                                        }else if (context.modalTitle === 'check') {
                                                            return 'مورد مصرف'
                                                        }
                                                    })()}
                                            </th>
                                            }
                                            {context.modalTitle === 'factor' ? <th>خریدار</th> : ''}
                                            {context.modalTitle === 'check' ? <th>گیرنده</th> : ''}
                                            <th scope="col">تاریخ</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                    {(product.length > 0 &&
                                    product.map((data , i) => (
                                        <tr key={data.id}>
                                                <th scope="row">{i}</th>
                                                <td>{data.product}</td>
                                                <td>{data.name}</td>
                                                <td>{data.scale}</td>
                                                <td>{data.document_type === 'حواله' ? data.output : data.input}</td>
                                            {context.modalTitle === 'handling' ?  null :
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
                                    <tr className='bg-light'>
                                         {context.modalTitle === 'factor' ?
                                             <Fragment>
                                                   <td colSpan="4">مهر و امضای خریدار</td>
                                                   <td colSpan="4">مهر و امضای گیرنده</td>
                                             </Fragment>
                                             :
                                             null
                                         }
                                          {context.modalTitle === 'check' ?
                                             <Fragment>
                                                   <td colSpan="4">مهر و امضای تحویل دهنده</td>
                                                   <td colSpan="4">مهر و امضای گیرنده</td>
                                             </Fragment>
                                             :
                                             null
                                         }
                                          {context.modalTitle === 'handling' ?
                                             <Fragment>
                                                   <td colSpan="2">مهر و امضای انباردار</td>
                                                   <td colSpan="3">مهر و امضای حسابرس</td>
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
                </div>
            </div>
  </Fragment>
  );

    function filterDocument() {
        if (context.modalTitle === 'factor') {
            return context.factor
        } else if (context.modalTitle === 'check') {
            return context.billCheck
        } else if (context.modalTitle === 'handling') {
            return context.handling
        }
    }

        function filterDocumentType() {
        if (context.modalTitle === 'factor') {
            return 'فاکتور'
        } else if (context.modalTitle === 'check') {
            return 'حواله'
        } else if (context.modalTitle === 'handling') {
            return 'انبارگردانی'
        }
    }
};

export default BillCheckModal