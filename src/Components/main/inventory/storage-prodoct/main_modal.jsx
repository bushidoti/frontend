import React, {Fragment, useEffect, useState} from "react";
import {Required} from "../../required";
import axios from "axios";
import Swal from "sweetalert2";
import {useFormik} from "formik";

const Modal = (props) => {
     const [product, setProduct] = useState([])
     const [lastID, setLastID] = useState([])
    const [message, setMessage] = useState('');

    useEffect(() => {
            (async () => {
                const {data} = await axios.get('http://localhost:8000/home/', {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
              });
              setMessage(data.message);
        })()
    }, []);

    let today = new Date().toLocaleDateString('fa-IR');

    const formik = useFormik({
    initialValues: {
      code: product.code,
      name: product.name,
      category: product.category,
      input: product.input,
      output: product.output,
      left_stock: product.left_stock,
      scale: product.scale,
      document_type: product.document_type,
      document_code: product.document_code,

    },
    enableReinitialize: true,
    onSubmit: (values) => {
        console.log(values);
    },
    });

     const postHandler = async () => {
          const response = await axios.post(
            `http://127.0.0.1:8000/api/product/`,
              {
              code: lastID.slice(-1)[0].code + 1,
              name: formik.values.name,
              category: formik.values.category,
              input: formik.values.input,
              inventory: message,
              operator: 'ثبت اولیه',
              output: 0,
              date: today.replaceAll('/' , '-'),
              left_stock: formik.values.input,
              scale: formik.values.scale,
              document_type: formik.values.document_type,
              document_code: formik.values.document_code,
         })
           setTimeout(
                    refreshPages, 3000)
        }

    const postAlert = () => {
          Swal.fire({
              title: 'مطمئنید?',
              text: "آیا از ثبت اولیه این کالا مطمئنید ؟",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'انصراف',
              confirmButtonText: 'بله, ثبت کن!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'ثبت شد!',
                  'کالا ثبت شد.',
                  'success',
                  'ok',
                  postHandler(),

                )
              }
            })
      }

     const fetchLastData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/product`)
        const data = await response.json()
        setLastID(data)
      }

      useEffect(() => {
          fetchLastData()
          }, [props.idNumber])

    const handleSubmit = () => {
        if (props.modalTitle === 'edit'){
            return null
        }else if (props.modalTitle === 'done'){
            return null
        }else if (props.modalTitle === 'register'){
            return postAlert
        }
    }

    const Required = () => {
        return(
            <Required/>
        )
    }
    Required()
    const [document , setDocument] = useState('')

    function refreshPages() {
        window.location.reload()
    }

  return (
      <Fragment>
         <div className="modal fade "  id="modalMain" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="modalMainLabel" aria-hidden="true">
                    <div className="modal-dialog " >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        {(() => {
                                               if (props.modalTitle === 'register'){
                                                    return (
                                                        'ثبت کالا جدید'
                                                    )
                                                }else if (props.modalTitle === 'move'){
                                                    return (
                                                        'جا به جایی'
                                                    )
                                                }else if (props.modalTitle === 'remove'){
                                                    return (
                                                        'خروج'
                                                    )
                                                }else if (props.modalTitle === 'entry'){
                                                    return (
                                                        'ورود'
                                                    )
                                                }else{
                                                    return (
                                                        'ویرایش کالا'
                                                    )
                                                }
                                        })()}
                                </h1>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                        <form className='needs-validation' noValidate>
                            <div className=" modal-body">
                                <div className="form-floating justify-content-center mb-5">
                                    <input type="text" id="idNumber" className="w-25 form-control"
                                       value={props.modalTitle === 'register' ? lastID.slice(-1)[0].code + 1 : formik.values.code} aria-label="Username"
                                    aria-describedby="basic-addon1" disabled required/>
                                    <label  id="idNumber">کد کالا</label>
                                </div>
                            <div className='d-flex gap-2 mb-3'>
                                        {(() => {
                                        if (props.modalTitle === 'register'){
                                                        return (
                                                            <Fragment>
                                                                  <div className="col-6 form-floating">
                                                                        <input type="text" className="form-control" id="name" value={formik.values.name}
                                                                       onChange={formik.handleChange}
                                                                        name='name'
                                                                        placeholder="خودکار" required />
                                                                        <div className="invalid-feedback">
                                                                        لطفا نام کالا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="contractNumber">نام کالا</label>
                                                                  </div>
                                                                  <div className="form-floating">
                                                                        <input className="form-control" type='search' value={formik.values.category}
                                                                       onChange={formik.handleChange} name='category' list="groupProductList" id="groupProduct"
                                                                        placeholder="اداری" required/>
                                                                        <label htmlFor="groupProduct">گروه</label>
                                                                        <datalist id="groupProductList">
                                                                            <option value="اداری"/>
                                                                            <option value="ترابری"/>
                                                                            <option value="تاسیسات"/>
                                                                            <option value="تجهیزات"/>
                                                                            <option value="آشپزخانه"/>
                                                                            <option value="آبدارخانه"/>
                                                                            <option value="بهداشتی"/>
                                                                            <option value="پشتیبانی"/>
                                                                        </datalist>
                                                                           <div className="invalid-feedback">
                                                                         گروه  را انتخاب کنید.
                                                                     </div>
                                                                  </div>

                                                            </Fragment>
                                                        )
                                                    }else if (props.modalTitle === 'move'){
                                                    return (
                                                            <Fragment>
                                                                     <div className="col form-floating">
                                                                        <input type="text" className="form-control" id="contractNumber"
                                                                        placeholder="خودکار" value='مداد' required disabled/>
                                                                        <div className="invalid-feedback">
                                                                        لطفا نام کالا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="contractNumber">نام کالا</label>
                                                                  </div>
                                                                  <div className="col-3 form-floating">
                                                                        <input type="text" className="form-control" id="sourceStorage"
                                                                        placeholder="چابهار" required value='دزفول' disabled />
                                                                        <div className="invalid-feedback">
                                                                            لطفا انبار مبدا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="sourceStorage">انبار مبدا</label>
                                                                  </div>
                                                                  <div className="col form-floating">
                                                                        <input className="form-control" type='search' list="destinationStorageList" id="destinationStorage"
                                                                        placeholder="اداری" required/>
                                                                        <label htmlFor="destinationStorage">انبار مقصد</label>
                                                                        <datalist id="destinationStorageList">
                                                                            <option value="دفترمرکزی"/>
                                                                            <option value="چابهار"/>
                                                                            <option value="دزفول"/>
                                                                            <option value="جاسک"/>
                                                                            <option value="بیشه کلا"/>
                                                                            <option value="اورهال تهران"/>
                                                                            <option value="اورهال اصفهان"/>
                                                                        </datalist>
                                                                         <div className="invalid-feedback">
                                                                         انبار مقصد  را انتخاب کنید.
                                                                     </div>
                                                                  </div>

                                                            </Fragment>
                                                    )
                                                }else if (props.modalTitle === 'edit'){
                                                    return (
                                                            <Fragment>
                                                                   <div className="col form-floating">
                                                                        <input className="form-control" type='search' list="groupProductList" id="groupProduct"
                                                                        placeholder="اداری" required/>
                                                                        <label htmlFor="groupProduct">گروه</label>
                                                                        <datalist id="groupProductList">
                                                                            <option value="اداری"/>
                                                                            <option value="ترابری"/>
                                                                            <option value="تاسیسات"/>
                                                                            <option value="تجهیزات"/>
                                                                            <option value="آشپزخانه"/>
                                                                            <option value="آبدارخانه"/>
                                                                            <option value="بهداشتی"/>
                                                                            <option value="پشتیبانی"/>
                                                                        </datalist>
                                                                       <div className="invalid-feedback">
                                                                         گروه  را انتخاب کنید.
                                                                     </div>
                                                                   </div>

                                                                <div className="col form-floating">
                                                                        <input className="form-control" type='search' list="consumeCauseList" id="consumeCause"
                                                                        placeholder="اجاره" required/>
                                                                        <label htmlFor="consumeCause">مورد مصرف</label>
                                                                        <datalist id="consumeCauseList">
                                                                            <option value="اداری"/>
                                                                            <option value="موتور پول"/>
                                                                            <option value="مهندسی"/>
                                                                            <option value="مالی"/>
                                                                            <option value="آموزش"/>
                                                                            <option value="ایستگاه"/>
                                                                            <option value="حقوقی"/>
                                                                            <option value="بازرگانی"/>
                                                                            <option value="تدارکات"/>
                                                                            <option value="حراست"/>
                                                                            <option value="آبدارخانه"/>
                                                                            <option value="مدیریت"/>
                                                                            <option value="عملیات"/>
                                                                            <option value="خدمات فرودگاهی"/>
                                                                            <option value="پشتیبانی"/>
                                                                            <option value="ایمنی"/>
                                                                            <option value="سپاه"/>
                                                                            <option value="دیسپج"/>
                                                                            <option value="پلیس"/>
                                                                        </datalist>
                                                                         <div className="invalid-feedback">
                                                                         مورد مصرف  را انتخاب کنید.
                                                                     </div>
                                                                    </div>

                                                            </Fragment>
                                                    )
                                                }
                                        })()}

                            </div>
                            <div className='d-flex gap-2 mb-3'>

                                  <div className="col-3 form-floating">
                                    <input type="number" className="form-control" id="count" value={formik.values.input}
                                           onChange={formik.handleChange}
                                          name='input'
                                           placeholder="560" required/>
                                        <label htmlFor="count">تعداد</label>
                                     <div className="invalid-feedback">
                                         تعداد  را وارد کنید.
                                     </div>
                                   </div>
                                <div className="col-3 form-floating">
                                    <input type="text" className="form-control" id="scale" value={formik.values.scale}
                                           onChange={formik.handleChange}
                                          name='scale'
                                           placeholder="560" required/>
                                        <label htmlFor="count">مقیاس</label>
                                     <div className="invalid-feedback">
                                         مقیاس  را انتخاب کنید.
                                     </div>
                                   </div>

                                 {(() => {
                                        if (props.modalTitle === 'remove'){
                                                        return (
                                                            <Fragment>
                                                                   <div className="col form-floating">
                                                                        <input className="form-control" type='search' list="consumeCauseList" id="consumeCause"
                                                                        placeholder="اجاره" required/>
                                                                        <label htmlFor="consumeCause">مورد مصرف</label>
                                                                        <datalist id="consumeCauseList">
                                                                            <option value="اداری"/>
                                                                            <option value="موتور پول"/>
                                                                            <option value="مهندسی"/>
                                                                            <option value="مالی"/>
                                                                            <option value="آموزش"/>
                                                                            <option value="ایستگاه"/>
                                                                            <option value="حقوقی"/>
                                                                            <option value="بازرگانی"/>
                                                                            <option value="تدارکات"/>
                                                                            <option value="حراست"/>
                                                                            <option value="آبدارخانه"/>
                                                                            <option value="مدیریت"/>
                                                                            <option value="عملیات"/>
                                                                            <option value="خدمات فرودگاهی"/>
                                                                            <option value="پشتیبانی"/>
                                                                            <option value="ایمنی"/>
                                                                            <option value="سپاه"/>
                                                                            <option value="دیسپج"/>
                                                                            <option value="پلیس"/>
                                                                        </datalist>
                                                                           <div className="invalid-feedback">
                                                                         مورد مصرف  را انتخاب کنید.
                                                                     </div>
                                                                    </div>

                                                            </Fragment>
                                                        )
                                                    }else if (props.modalTitle === 'edit'){
                                            return (
                                                <Fragment>
                                                    <div className="col form-floating">
                                                        <input type="text" className="form-control" id="receiver"
                                                               placeholder="560" required/>
                                                            <label htmlFor="receiver">گیرنده</label>
                                                         <div className="invalid-feedback">
                                                             گیرنده  را وارد کنید.
                                                         </div>
                                                          </div>
                                                     <div className="col form-floating">
                                                            <input type="text" className="form-control" id="buyer"
                                                                   placeholder="560" required/>
                                                                <label htmlFor="buyer">خریدار</label>
                                                             <div className="invalid-feedback">
                                                                 خریدار  را وارد کنید.
                                                             </div>
                                                        </div>
                                                </Fragment>
                                            )
                                        }
                                        })()}


                                      </div>
                            <hr className='bg-primary my-4'/>
                            <div className='d-flex gap-2 mb-3'>
                              <div className="form-floating  col-4">
                                <select className="form-select" id="documentType"
                                        aria-label="Document Type" onChange={(e) => {
                                            setDocument(e.target.value)
                                    formik.setFieldValue('document_type' , e.target.value)
                                } } value={formik.values.document_type}
                                          name='document_type'>
                                            <option selected disabled>انتخاب کنید</option>
                                                     {(() => {
                                                if (props.modalTitle === 'entry'){
                                                    return(
                                                      <option value="فاکتور">فاکتور</option>
                                                    )
                                                }else if (props.modalTitle === 'remove'){
                                                    return(
                                                          <option value="حواله">حواله</option>
                                                    )
                                                }
                                                else if (props.modalTitle === 'move'){
                                                    return(
                                                        <Fragment>
                                                          <option value="حواله">حواله</option>
                                                          <option value="فاکتور">فاکتور</option>
                                                        </Fragment>
                                                    )
                                                }
                                            })()}
                                            <option value="انبارگردانی">انبارگردانی</option>
                                            <option value="سند">سند</option>
                                        </select>
                                        <label htmlFor="documentType">مدرک</label>
                              </div>
                                 <div className="col form-floating">
                                    <input type="text" className="form-control" id="documentId" value={formik.values.document_code}
                                           onChange={formik.handleChange}
                                          name='document_code'
                                           placeholder="560"/>
                                        <label htmlFor="documentId">شناسه {document}</label>
                                     <div className="invalid-feedback">
                                         شناسه {document}  را وارد کنید.
                                     </div>
                                   </div>
                                        {(() => {
                                        if (props.modalTitle === 'entry'){
                                                        return (
                                                            <Fragment>
                                                                  <div className="col form-floating">
                                                                    <input type="text" className="form-control" id="receiver"
                                                                           placeholder="560" required/>
                                                                        <label htmlFor="receiver">گیرنده</label>
                                                                     <div className="invalid-feedback">
                                                                         گیرنده  را وارد کنید.
                                                                     </div>
                                                                  </div>
                                                            </Fragment>
                                                        )
                                                    }else if (props.modalTitle === 'remove'){
                                                    return (
                                                            <Fragment>
                                                                       <div className="col form-floating">
                                                                            <input type="text" className="form-control" id="buyer"
                                                                                   placeholder="560" required/>
                                                                                <label htmlFor="buyer">خریدار</label>
                                                                             <div className="invalid-feedback">
                                                                                 خریدار  را وارد کنید.
                                                                             </div>
                                                                        </div>
                                                            </Fragment>
                                                    )
                                                }
                                        })()}
                             </div>
                                {(() => {
                                    if ((props.modalTitle === 'entry' && document === 'فاکتور') || (props.modalTitle === 'remove' && document === 'حواله')){
                                        return(
                                            <div className="input-group">
                                                <label className="input-group-text"
                                                       htmlFor="factor-check">فایل {document}</label>
                                                <input type="file" className="form-control" id="factor-check"/>
                                            </div>
                                        )
                                    }
                                })()}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal">close</button>
                            <button type="button" className="btn material-symbols-outlined btn-success" onClick={handleSubmit()}>done</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </Fragment>
  );
};
export default Modal