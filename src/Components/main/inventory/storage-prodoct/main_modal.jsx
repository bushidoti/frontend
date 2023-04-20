import React, {Fragment} from "react";


const Modal = (props) => {
  return (
      <Fragment>
         <div className="modal fade "  id="modalMain" tabIndex="-1" aria-labelledby="modalMainLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-xl" >
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
                                                        'نمایش اطلاعات'
                                                    )
                                                }
                                        })()}
                                </h1>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                            <div className=" modal-body">
                                <div className="form-floating justify-content-center mb-5">
                                    <input type="text" id="idNumber" className="w-25 form-control" aria-label="Username"
                                    aria-describedby="basic-addon1" value='' disabled required/>
                                    <label  id="idNumber">کد کالا</label>
                                </div>
                            <div className='d-flex gap-2'>
                                        {(() => {
                                        if (props.modalTitle === 'register'){
                                                        return (
                                                            <Fragment>
                                                                  <div className="col form-floating mb-3 ">
                                                                        <input type="text" className="form-control" id="contractNumber"
                                                                        placeholder="خودکار" required />
                                                                        <div className="invalid-feedback">
                                                                        لطفا نام کالا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="contractNumber">نام کالا</label>
                                                                  </div>
                                                                  <div className="col-2 form-floating">
                                                                        <input className="form-control" type='search' list="groupProductList" id="groupProduct" placeholder="اداری"/>
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
                                                                  </div>
                                                            </Fragment>
                                                        )
                                                    }else if (props.modalTitle === 'move'){
                                                    return (
                                                            <Fragment>
                                                                     <div className="col form-floating mb-3 ">
                                                                        <input type="text" className="form-control" id="contractNumber"
                                                                        placeholder="خودکار" value='مداد' required disabled/>
                                                                        <div className="invalid-feedback">
                                                                        لطفا نام کالا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="contractNumber">نام کالا</label>
                                                                  </div>
                                                                  <div className="col form-floating mb-3 ">
                                                                        <input type="text" className="form-control" id="sourceStorage"
                                                                        placeholder="چابهار" required value='دزفول' disabled />
                                                                        <div className="invalid-feedback">
                                                                            لطفا انبار مبدا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="sourceStorage">انبار مبدا</label>
                                                                  </div>
                                                                  <div className="col-2 form-floating">
                                                                        <input className="form-control" type='search' list="destinationStorageList" id="destinationStorage" placeholder="اداری"/>
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
                                                                  </div>
                                                            </Fragment>
                                                    )
                                                }
                                        })()}

                            </div>
                            <hr className='bg-primary my-4'/>
                            <div className='d-flex gap-2'>

                                  <div className="col form-floating mb-3">
                                    <input type="number" className="form-control" id="count"
                                           placeholder="560" required/>
                                        <label htmlFor="count">تعداد</label>
                                     <div className="invalid-feedback">
                                         تعداد  را وارد کنید.
                                     </div>
                                   </div>
                                <div className="col form-floating mb-3">
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
                                                                   <div className="col-2 form-floating">
                                                                        <input className="form-control" type='search' list="consumeCauseList" id="consumeCause" placeholder="اجاره"/>
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
                                                                    </div>
                                                            </Fragment>
                                                        )
                                                    }
                                        })()}
                                   <div className="col-2 form-floating">
                                            <input className="form-control" type='search' list="documentTypeList" id="documentType" placeholder="حواله"/>
                                            <label htmlFor="documentType">مدرک</label>
                                            <datalist id="documentTypeList">
                                                <option value="فاکتور"/>
                                                <option value="انبارگردانی"/>
                                                <option value="حواله"/>
                                                <option value="سند"/>
                                            </datalist>
                                   </div>
                                 <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="documentId"
                                           placeholder="560" required/>
                                        <label htmlFor="documentId">شناسه مدرک</label>
                                     <div className="invalid-feedback">
                                         شناسه مدرک  را وارد کنید.
                                     </div>
                                   </div>

                                      </div>
                            <hr className='bg-primary my-4'/>
                            <div className='d-flex gap-2 col-4'>
                                        {(() => {
                                        if (props.modalTitle === 'entry'){
                                                        return (
                                                            <Fragment>
                                                                  <div className="col form-floating mb-3">
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
                                                                       <div className="col form-floating mb-3">
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
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal">close</button>
                        <button type="submit" className="btn material-symbols-outlined btn-success">done</button>
                    </div>
                </div>
            </div>
        </div>
  </Fragment>
  );
};
export default Modal