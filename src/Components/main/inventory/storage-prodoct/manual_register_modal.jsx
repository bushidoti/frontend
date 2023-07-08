import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useFormik} from "formik";
import Url from "../../../config";

const ManualModal = (props) => {
     const [product, setProduct] = useState([])
     const [listProduct, setListProduct] = useState([])
     const [autoIncrement, setAutoIncrement] = useState([])
     const [registerType, setRegisterType] = useState('')
     const [documents , setDocument] = useState('')

    let today = new Date().toLocaleDateString('fa-IR');
    const formik = useFormik({
    initialValues: {
      code: product.code || "",
      name: product.name || "",
      inventory: product.inventory || "",
      category: product.category || "",
      input:  "",
      output: "",
      operator:  "",
      left_stock: product.left_stock || "",
      scale:  product.scale || "",
      document_type: product.document_type ||  "",
      document_code:  product.document_code || "",
      consumable: '',
      date:  '',
      buyer: '',
      receiver:  '',
      product: null,
      amendment:  "",
      factor: '',
      inventory_dst: '',
      inventory_src: '',
      checkBill: '',
    },
    enableReinitialize: true,
    });

    const formikStatic = useFormik({
        initialValues: {
          document_type:   "",
          document_code:  "",
          consumable: '',
          buyer: '',
          receiver:  '',
        },
        enableReinitialize: true,
    });

     function reader(file, callback) {
              const fr = new FileReader();
              fr.onload = () => callback(null, fr.result);
              fr.onerror = (err) => callback(err);
              fr.readAsDataURL(file);
            }

    function factor(e) {
              reader(e.target.files[0], (err, res) => {
                formik.setFieldValue('factor' , res)
              });
            }

    function checkBill(e) {
          reader(e.target.files[0], (err, res) => {
                formik.setFieldValue('checkBill' , res)
              });
        }

     const postHandler = async () => {
           await axios.post(
            `${Url}/api/product/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              category: formik.values.category,
              input: formik.values.input,
              inventory: props.office,
              operator: 'ثبت اولیه',
              output: 0,
              date: today.replaceAll('/' , '-'),
              left_stock: formik.values.input,
              scale: formik.values.scale,
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
         await axios.post(
            `${Url}/api/allproducts/`,
              {
              input: formik.values.input,
              name: formik.values.name,
              scale: formik.values.scale,
              afterOperator: (props.products.filter(products => products.product ===  formik.values.code).reduce((a,v) =>   a + v.input , 0 ))
              - (props.products.filter(products => products.product ===  formik.values.code).reduce((a,v) =>   a + v.output , 0 )) + formik.values.input,
              date: today.replaceAll('/' , '-'),
              operator:'ثبت اولیه',
              document_type: formikStatic.values.document_type,
              document_code: formikStatic.values.document_code,
              factor: formik.values.factor,
              receiver:formikStatic.values.receiver,
              buyer:formikStatic.values.buyer,
              product: handleAutoIncrement(),
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
           
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
                  putHandlerAutoIncrement(),

                )
              }
            })
      }

    const postHandlerProductInput = async () => {
           await axios.post(
            `${Url}/api/allproducts/`,
              {
              input: formik.values.input,
              name: formik.values.name,
              scale: formik.values.scale,
              afterOperator: (props.products.filter(products => products.product ===  formik.values.code).reduce((a,v) =>   a + v.input , 0 ))
              - (props.products.filter(products => products.product ===  formik.values.code).reduce((a,v) =>   a + v.output , 0 )) + formik.values.input,
              date: today.replaceAll('/' , '-'),
              receiver:formikStatic.values.receiver,
              buyer:formikStatic.values.buyer,
              operator:'ورود',
              document_type: formikStatic.values.document_type,
              document_code: formikStatic.values.document_code,
              product: formik.values.code,
              factor: formik.values.factor,
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        }

    const postHandlerProductOutput = async () => {
           await axios.post(
            `${Url}/api/allproducts/`,
              {
              consumable: formikStatic.values.consumable,
              output: formik.values.output,
              afterOperator: (props.products.filter(products => products.product ===  formik.values.code).reduce((a,v) =>   a + v.input , 0 ))
                            - (props.products.filter(products => products.product ===  formik.values.code).reduce((a,v) =>   a + v.output , 0 )) - formik.values.output,
              name: formik.values.name,
              scale: formik.values.scale,
              date: today.replaceAll('/' , '-'),
              operator:'خروج',
              receiver:formikStatic.values.receiver,
              document_type: formikStatic.values.document_type,
              document_code: formikStatic.values.document_code,
              product: formik.values.code,
              checkBill: formik.values.checkBill,
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
           
        }

    const postAlertProductsInput = () => {
          Swal.fire({
              title: 'مطمئنید?',
              text: "آیا از ثبت ورودی این کالا مطمئنید ؟",
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
                  postHandlerProductInput(),
                )
              }
            })
      }

    const postAlertProductsOutput = () => {
          Swal.fire({
              title: 'مطمئنید?',
              text: "آیا از ثبت خروجی این کالا مطمئنید ؟",
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
                  postHandlerProductOutput(),
                )
              }
            })
      }

    const fetchData = async () => {
               const response = await fetch(`${Url}/api/product/` + formik.values.code, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
               const data = await response.json()
               setProduct(data)

      }

   const fetchDataList = async () => {
           const response = await fetch(`${Url}/api/product/`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
               const data = await response.json()
               setListProduct(data)
      }



    const fetchDataAutoIncrement = async () => {
        const response = await fetch(`${Url}/api/autoIncrement/1`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setAutoIncrement(data)
      }

    const putHandlerAutoIncrement = async () => {
           await axios.put(
            `${Url}/api/autoIncrement/1/`,
              {
              oghab101: props.office === 'دفتر مرکزی' ? autoIncrement.oghab101+1 : autoIncrement.oghab101,
              oghab102: props.office === 'چابهار' ? autoIncrement.oghab102+1 : autoIncrement.oghab102,
              oghab103: props.office === 'دزفول' ? autoIncrement.oghab103+1 : autoIncrement.oghab103,
              oghab104: props.office === 'جاسک' ? autoIncrement.oghab104+1 : autoIncrement.oghab104,
              oghab105: props.office === 'بیشه کلا' ? autoIncrement.oghab105+1 : autoIncrement.oghab105,
              oghab106: props.office === 'اورهال تهران' ? autoIncrement.oghab106+1 : autoIncrement.oghab106,
              oghab107: props.office === 'اورهال اصفهان' ? autoIncrement.oghab107+1 : autoIncrement.oghab107,
         }, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        }

    useEffect(() => {
          void fetchData()
          void fetchDataAutoIncrement()
          void fetchDataList()
          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [formik.values.code])
    const handleSubmit = (event) => {
         event.preventDefault();
        if (registerType === 'ورود'){
            return postAlertProductsInput()
        }else if (registerType === 'خروج'){
            return postAlertProductsOutput()
        }else if (registerType === 'ثبت اولیه'){
            return postAlert()
        }
    }


    const handleAutoIncrement = () => {
          if (props.office === 'دفتر مرکزی'){
              return autoIncrement.oghab101
          }else if (props.office === 'چابهار'){
              return autoIncrement.oghab102
          }else if (props.office === 'دزفول'){
              return autoIncrement.oghab103
          }else if (props.office === 'جاسک'){
              return autoIncrement.oghab104
          }else if (props.office === 'بیشه کلا'){
              return autoIncrement.oghab105
          }else if (props.office === 'اورهال تهران'){
              return autoIncrement.oghab106
          }else if (props.office === 'اورهال اصفهان'){
              return autoIncrement.oghab107
          }
    }


    function refreshPages() {
        window.location.reload()
    }
  return (
      <Fragment>
         <div className="modal fade"  id="manualModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="manualModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content" style={{backgroundColor:'hsl(105, 100%, 92%)'}}>
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        {(() => {
                                               if (registerType === 'ثبت اولیه'){
                                                    return (
                                                        'ثبت کالا جدید'
                                                    )
                                                }else if (registerType === 'خروج'){
                                                    return (
                                                        'خروج'
                                                    )
                                                }else if (registerType === 'ورود'){
                                                    return (
                                                        'ورود'
                                                    )
                                                }
                                        })()}
                                </h1>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close" onClick={refreshPages}></button>
                            </div>
                        <form className='needs-validation' noValidate onSubmit={handleSubmit}>
                            <div className=" modal-body">
                                <div className='d-flex gap-2'>
                                    <div className="form-floating justify-content-center mb-5">
                                        <input type="text" id="idNumberManualModal" className="form-control"
                                           value={registerType === 'ثبت اولیه' ? handleAutoIncrement() : formik.values.code}
                                           aria-label="idNumberManualModal"  disabled required/>
                                        <label  htmlFor="idNumberManualModal">کد کالا</label>
                                    </div>
                                         <div className="form-floating col-4">
                                            <select className="form-select" id="operator" name='operator' aria-label="Register Type" value={registerType} onChange={(e) => {
                                            setRegisterType(e.target.value)
                                            formik.setFieldValue('code' , '')
                                            formik.setFieldValue('operator' , e.target.value)}}>
                                                        <option  value='' disabled>انتخاب کنید</option>
                                                        <option value="ثبت اولیه">ثبت اولیه</option>
                                                        <option value="ورود">ورود</option>
                                                        <option value="خروج">خروج</option>
                                                    </select>
                                            <label htmlFor="operator">عملیات</label>
                                          </div>
                                </div>
                        {registerType !== '' ?
                            <Fragment>




                            <div className='d-flex gap-2 mb-3'>
                                {registerType === 'ورود' || registerType === 'خروج'?
                                         <div className="form-floating">
                                                    <input className="form-control" type='search' value={formik.values.code}
                                                    onChange={formik.handleChange} name='code' list="groupProductList" id="groupProductCode"
                                                    placeholder="اداری" required/>
                                                    <label htmlFor="groupProductCode">کالا های موجود</label>
                                                    <datalist id="groupProductList">
                                                       {(listProduct.filter(product => product.inventory ===  props.office).map((data) => (
                                                                <option key={data.code} value={data.code}>{data.name}</option>
                                                        )))}
                                                    </datalist>
                                                       <div className="invalid-feedback">
                                                     کالا  را انتخاب کنید.
                                                 </div>
                                              </div>
                                    : null}

                                        {(() => {
                                        if (registerType === 'ثبت اولیه'){
                                                        return (
                                                            <Fragment>

                                                                  <div className="col-6 form-floating">
                                                                        <input type="text" className="form-control" id="name" autoComplete='off'
                                                                       onChange={formik.handleChange}
                                                                        name='name'
                                                                        placeholder="..." required />
                                                                        <div className="invalid-feedback">
                                                                        لطفا نام کالا را وارد کنید.
                                                                        </div>
                                                                        <label htmlFor="name">نام کالا</label>
                                                                  </div>

                                                            </Fragment>
                                                        )
                                                    }
                                        })()}
                                        <div className="form-floating">
                                                    <input className="form-control" type='search' value={formik.values.category} disabled={registerType !== 'ثبت اولیه'}
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
                            </div>
                            <div className='d-flex gap-2 mb-3'>
                                  <div className="col-2 form-floating">
                                    <input type="number" className="form-control" id="count"
                                           value={registerType === 'ورود' || formik.values.operator ===  'ورود' || registerType === 'ثبت اولیه' || formik.values.operator === 'ثبت اولیه' ? formik.values.input : formik.values.output }
                                           onChange={formik.handleChange}
                                           name={registerType === 'ورود' || formik.values.operator === 'ورود' || registerType === 'ثبت اولیه' || formik.values.operator === 'ثبت اولیه'? "input" : "output"}
                                           placeholder="560" required/>
                                        <label htmlFor="count">تعداد</label>
                                     <div className="invalid-feedback">
                                         تعداد  را وارد کنید.
                                     </div>
                                   </div>
                                <div className="col-3 form-floating">
                                    <input type="text" className="form-control" id="scale" value={formik.values.scale} disabled={registerType !== 'ثبت اولیه'}
                                           onChange={formik.handleChange}
                                          name='scale'
                                           placeholder="560" required/>
                                        <label htmlFor="count">مقیاس</label>
                                     <div className="invalid-feedback">
                                         مقیاس  را انتخاب کنید.
                                     </div>
                                   </div>

                                 {(() => {
                                        if (registerType === 'خروج'){
                                                        return (
                                                            <Fragment>
                                                                   <div className="col form-floating">
                                                                        <input className="form-control" type='search' list="consumeCauseList"
                                                                       id="consumeCause" value={formikStatic.values.consumable}
                                                                       onChange={formikStatic.handleChange} name='consumable'
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
                            <hr className='bg-primary my-4'/>
                            <div className='d-flex gap-2 mb-3'>
                                        {(() => {
                                        if (registerType === 'ورود' || registerType === 'ثبت اولیه'){
                                                        return (
                                                            <Fragment>
                                                                  <div className="col form-floating">
                                                                    <input type="text" className="form-control" id="receiver" value={formikStatic.values.receiver}
                                                                   onChange={formikStatic.handleChange} name='receiver' placeholder="560" required/>
                                                                        <label htmlFor="receiver">گیرنده</label>
                                                                     <div className="invalid-feedback">
                                                                         گیرنده  را وارد کنید.
                                                                     </div>
                                                                  </div>
                                                                {documents === 'فاکتور' ?
                                                                      <div className="col form-floating">
                                                                            <input type="text" className="form-control" id="buyer" value={formikStatic.values.buyer}
                                                                               onChange={formikStatic.handleChange} name='buyer' placeholder="560" required/>
                                                                                <label htmlFor="buyer">خریدار</label>
                                                                             <div className="invalid-feedback">
                                                                                 خریدار  را وارد کنید.
                                                                             </div>
                                                                        </div>
                                                                    :  null}
                                                            </Fragment>
                                                        )
                                                    }
                                        })()}
                                {documents === 'حواله' ?
                                          <div className="col form-floating">
                                                    <input type="text" className="form-control" id="receiver"
                                                    name='receiver' value={formikStatic.values.receiver} onChange={formikStatic.handleChange}
                                                    placeholder="560" required/>
                                                        <label htmlFor="receiver">گیرنده</label>
                                                     <div className="invalid-feedback">
                                                         گیرنده  را وارد کنید.
                                                     </div>
                                          </div>
                                        :  null}
                             </div>
                              <div className='d-flex gap-2 mb-3'>
                                <div className="form-floating  col-4">
                                <select className="form-select" id="documentType" name='document_type' aria-label="Document Type" value={formikStatic.values.document_type} onChange={(e) => {
                                setDocument(e.target.value)
                                formikStatic.setFieldValue('document_type' , e.target.value)}}>
                                            <option  value='' disabled>انتخاب کنید</option>
                                             {(() => {
                                                if (registerType === 'ورود'){
                                                    return(
                                                      <Fragment>
                                                            <option value="فاکتور">فاکتور</option>
                                                            <option value="متفرقه">متفرقه</option>
                                                            <option value="انبارگردانی">انبارگردانی</option>
                                                            <option value="سند">سند</option>
                                                      </Fragment>
                                                    )
                                                }else if (registerType === 'خروج'){
                                                    return(
                                                        <Fragment>
                                                            <option value="حواله">حواله</option>
                                                            <option value="متفرقه">متفرقه</option>
                                                            <option value="سند">سند</option>
                                                            <option value="انبارگردانی">انبارگردانی</option>
                                                        </Fragment>
                                                    )
                                                }else if (registerType === 'ثبت اولیه'){
                                                    return(
                                                        <Fragment>
                                                          <option value="انبارگردانی">انبارگردانی</option>
                                                          <option value="فاکتور">فاکتور</option>
                                                          <option value="سند">سند</option>
                                                          <option value="متفرقه">متفرقه</option>
                                                        </Fragment>
                                                    )
                                                }
                                            })()}

                                        </select>
                                        <label htmlFor="documentType">مدرک</label>
                              </div>
                             <div className="col form-floating">
                                <input type="text" className="form-control" name='document_code'
                                id="documentId" value={formikStatic.values.document_code}
                                onChange={formikStatic.handleChange}
                                       placeholder="560"/>
                                    <label htmlFor="documentId">شناسه {documents}</label>
                                 <div className="invalid-feedback">
                                     شناسه {documents}  را وارد کنید.
                                 </div>
                               </div>
                          </div>
                                {(() => {
                                    if (((registerType === 'ورود' || registerType === 'ثبت اولیه') && documents === 'فاکتور') || (registerType === 'خروج' && documents === 'حواله')){
                                        return(
                                            <div className="input-group">
                                                <label className="input-group-text"
                                                       htmlFor="factor-check">فایل {documents}</label>
                                                <input type="file" className="form-control" accept="application/pdf" id="factor-check" onChange={documents === 'حواله' ? checkBill : factor}/>
                                            </div>
                                        )
                                    }
                                })()}
                                  </Fragment>
                        : null}
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn material-symbols-outlined btn-danger" data-bs-dismiss="modal" onClick={refreshPages}>close</button>
                            <button type="submit" className="btn material-symbols-outlined btn-success">done</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  </Fragment>
  );
};
export default ManualModal