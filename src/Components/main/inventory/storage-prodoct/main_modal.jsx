import React, {Fragment, useState} from "react";
import {Required} from "../../required";

const Modal = (props) => {
    const Required = () => {
        return(
            <Required/>
        )
    }
    Required()
    const [document , setDocument] = useState('')
      function refreshPage() {
        if (props.modalTitle !== 'edit'){
            window.location.reload();
        }
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
                                    <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                                    aria-describedby="basic-addon1" value='' disabled required/>
                                    <label  id="idNumber">کد کالا</label>
                                </div>
                            <div className='d-flex gap-2 mb-3'>
                                        {(() => {
                                        if (props.modalTitle === 'register'){
                                                        return (
                                                            <Fragment>
                                                                  <div className="col-6 form-floating">
                                                                        <input type="text" className="form-control" id="contractNumber"
                                                                        placeholder="خودکار" required />
                                                                        <div className="invalid-feedback">
                                                                        لطفا نام کالا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="contractNumber">نام کالا</label>
                                                                  </div>
                                                                  <div className="form-floating">
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
                                    <input type="number" className="form-control" id="count"
                                           placeholder="560" required/>
                                        <label htmlFor="count">تعداد</label>
                                     <div className="invalid-feedback">
                                         تعداد  را وارد کنید.
                                     </div>
                                   </div>
                                <div className="col-3 form-floating">
                                    <input type="text" className="form-control" id="count"
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
                                        aria-label="Document Type" onChange={(e) => setDocument(e.target.value)} required>
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
                                    <input type="text" className="form-control" id="documentId"
                                           placeholder="560" required/>
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
                                    if (props.modalTitle === 'entry' && document === 'فاکتور' || props.modalTitle === 'remove' && document === 'حواله' ){
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
                            <button type="submit" className="btn material-symbols-outlined btn-success">done</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </Fragment>
  );
};
export default Modal