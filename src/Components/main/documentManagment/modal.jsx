import React, {Fragment, useEffect, useState} from "react";
import CurrencyInput from 'react-currency-input-field';
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"
import {CustomInputDate} from "../../../App";
import {Required} from "../required";
import {useFormik} from "formik";

const Modal = (props) => {
    const [contract, setContracts] = useState([])
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
      clearedDate: contract.clearedDate,
      receivedDocument: contract.receivedDocument,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
        console.log(values);
    },
});

    const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/documents/`+ props.idNumber)
        const data = await response.json()
        setContracts(data)
      }

      useEffect(() => {
            fetchData()
          }, [props.idNumber])
            Required()
         function refreshPage() {
                window.location.reload();
      }
    const [isGoodPriceEmpty , setIsGoodPriceEmpty] = useState('')
    const [isCommitmentPriceEmpty , setIsCommitmentPriceEmpty] = useState('')
    const [isTypeBail1Empty , setIsTypeBail1Empty] = useState('')
    const [isTypeBail2Empty , setIsTypeBail2Empty] = useState('')

    let firstBail1 = ''
    let secondBail1 = ''

    let firstBail2 = ''
    let secondBail2 = ''

    const handleLabelBails1 = () => {
        if (isTypeBail1Empty === 'چک'){
            firstBail1 = 'شماره چک'
            secondBail1 = 'بانک'
        } else if (isTypeBail1Empty === 'نقد'){
            firstBail1 = 'واریز به حساب'
            secondBail1 = 'شماره حساب'
        }else if (isTypeBail1Empty === 'سفته'){
            firstBail1 = 'تعداد سفته'
            secondBail1 = 'مبلغ سفته'
        }else if (isTypeBail1Empty === 'بانک'){
            firstBail1 = 'ضمانت'
            secondBail1 = 'شماره تضمین'
        }

    }

       const handleLabelBails2 = () => {
        if (isTypeBail2Empty === 'چک'){
            firstBail2 = 'شماره چک'
            secondBail2 = 'بانک'
        } else if (isTypeBail2Empty === 'نقد'){
            firstBail2 = 'واریز به حساب'
            secondBail2 = 'شماره حساب'
        }else if (isTypeBail2Empty === 'سفته'){
            firstBail2 = 'تعداد سفته'
            secondBail2 = 'مبلغ سفته'
        }else if (isTypeBail2Empty === 'بانک'){
            firstBail2 = 'ضمانت'
            secondBail2 = 'شماره تضمین'
        }

    }
    handleLabelBails2()
    handleLabelBails1()


  return (
      <Fragment>
     <div className="modal fade " data-bs-backdrop="static" data-bs-keyboard="false" id="modalMain" tabIndex="-1" aria-labelledby="modalMainLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg " >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                                                {(() => {
                                                                   if (props.modalTitle === 'edit'){
                                                                        return (
                                                                            'ویرایش قرارداد'
                                                                        )
                                                                    }else if (props.modalTitle === 'done'){
                                                                        return (
                                                                            'تسویه قرارداد'
                                                                        )
                                                                    }else if (props.modalTitle === 'add'){
                                                                        return (
                                                                            'ثبت قرارداد'
                                                                        )
                                                                    }else{
                                                                        return (
                                                                            'نمایش اطلاعات'
                                                                        )
                                                                    }

                                                                })()}
                            </h1>
                            <button type="button" id='closeBtn' className="btn-close " data-bs-dismiss="modal"
                                    aria-label="Close" onClick={refreshPage}></button>
                        </div>
                    <form className='needs-validation' noValidate>
                        <div className="container modal-body">
                            <div className="form-floating justify-content-center mb-5">
                                <input type="text" id="idNumber" value={formik.values.id} className="w-25 form-control" aria-label="idNumber"
                                aria-describedby="basic-addon1" disabled required/>
                                <label  id="idNumber">شماره ثبت</label>
                            </div>
                            <div className='d-flex gap-2'>
                                <div className="col form-floating mb-3 ">
                                    <input type="text" className="form-control" id="contractNumber"
                                    placeholder="35 / پ - 7552"
                                   value={formik.values.contractNumber}
                                   onChange={formik.setValues}
                                    name='contractNumber'
                                   required disabled={props.editDocument} />
                                    <div className="invalid-feedback">
                                        لطفا شماره قرارداد را وارد کنید.
                                    </div>
                                    <label htmlFor="contractNumber">شماره قرارداد</label>
                                </div>

                                 <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="name"
                                           name='employer'
                                             value={formik.values.employer}
                                             onChange={formik.setValues}
                                           placeholder="رضا محمدی" required disabled={props.editDocument}/>
                                        <label htmlFor="name">نام {props.docToggle ? "پیمانکار" : "کارفرما"}</label>
                                     <div className="invalid-feedback">
                                         نام {props.docToggle ? "پیمانکار" : "کارفرما"} را وارد کنید.
                                     </div>
                                 </div>

                                     <div className="col-3">
                                         <DatePicker
                                             animations={[transition()]}
                                             render={<CustomInputDate disabled={props.editDocument} label='تاریخ ثبت قرارداد' />}
                                             id="dateContract"
                                             value={formik.values.dateContract}
                                             onChange={formik.setValues}
                                             name='dateContractPicker'
                                             calendar={persian}
                                             locale={persian_fa}
                                             required
                                         />
                                    </div>

                            </div>


                            <div className='d-flex gap-2 mb-5'>

                                <div className="col form-floating ">
                                    {props.editDocument ?
                                           <input
                                          className='form-control'
                                          id="contractPrice"
                                          name="contractPrice"
                                          disabled={props.editDocument}
                                        />
                                        :
                                           <CurrencyInput
                                          className='form-control'
                                          id="contractPrice"
                                          prefix="ریال "
                                          value={formik.values.contractPrice}
                                          onChange={formik.setValues}
                                          name="contractPrice"
                                          placeholder="ریال 10,000,000"
                                          required
                                        />
                                    }

                                        <label htmlFor="contractPrice">مبلغ قرارداد</label>
                                        <div className="invalid-feedback">
                                            مبلغ قرارداد را وارد کنید.
                                        </div>
                                </div>


                                <div className="col  form-floating">
                                        <input type="text" className="form-control"  id="durationContract"
                                        placeholder="12 ماه" required
                                        value={formik.values.durationContract}
                                       onChange={formik.setValues}
                                        disabled={props.editDocument}/>
                                        <label htmlFor="durationContract">مدت قرارداد</label>
                                        <div className="invalid-feedback">
                                            مدت قرارداد را وارد کنید.
                                        </div>
                                </div>

                                <div className="col form-floating">
                                    {props.editDocument ?
                                                 <input
                                      className='form-control'
                                      id="prePaidPrice"
                                      name="prePaid"
                                      placeholder="ریال 2,500,000"
                                      disabled={props.editDocument}/>
                                        :
                                     <CurrencyInput
                                      className='form-control'
                                      id="prePaidPrice"
                                      prefix="ریال "
                                      value={formik.values.prePaidPrice}
                                       onChange={formik.setValues}
                                      name="prePaidPrice"
                                      placeholder="ریال 2,500,000"
                                      required/>
                                    }
                                      <label htmlFor="prePaidPrice">مبلغ پیش پرداخت</label>
                                      <div className="invalid-feedback">
                                        مبلغ پیش پرداخت را وارد کنید.
                                      </div>
                                </div>

                            </div>

                            <hr className='bg-primary mb-5'/>

                            <div className='d-flex gap-2'>

                                 <div className="col-3 form-floating mb-3">
                                     {props.editDocument ?
                                         <input
                                          className='form-control'
                                          id="goodPrice"
                                          prefix="ریال "
                                          name="goodPrice"
                                          placeholder="ریال 50,000,000"
                                          required
                                          disabled={props.editDocument}
                                          onChange={(e) => setIsGoodPriceEmpty(e.target.value)}/>
                                         :
                                         <CurrencyInput
                                          className='form-control'
                                          id="goodPrice"
                                          prefix="ریال "
                                          name="goodPrice"
                                          value={formik.values.goodPrice}
                                          placeholder="ریال 50,000,000"
                                          required
                                          onChange={(e) => {
                                              setIsGoodPriceEmpty(e.target.value)
                                          }}/>
                                     }
                                      <label htmlFor="goodPrice">مبلغ حسن انجام کار</label>
                                      <div className="invalid-feedback">
                                      مبلغ حسن انجام کار وارد کنید.
                                      </div>
                                 </div>

                                {(() => {

                                    if (isGoodPriceEmpty.length !== 0 || props.editDocument || props.modalTitle === 'edit') {
                                      return (
                                          <Fragment>
                                                 <div className="col-2 form-floating">
                                                        <input className="form-control" list="typeBailList" type='search'
                                                                    value={formik.values.typeBail1}
                                                               id="typeBail1" placeholder="چک"
                                                               required disabled={props.editDocument}
                                                        onChange={(e) => setIsTypeBail1Empty(e.target.value)}
                                                        />
                                                        <label htmlFor="typeBail1">نوع ضمانت</label>
                                                        <datalist id="typeBailList" >
                                                            <option value="چک"/>
                                                            <option value="نقد"/>
                                                            <option value="سفته"/>
                                                            <option value="بانک"/>
                                                        </datalist>
                                                        <div className="invalid-feedback">
                                                        نوع ضمانت را انتخاب کنید.
                                                        </div>
                                                 </div>
                                          </Fragment>
                                      )
                                    }

                                })()}

                                {(() => {

                                      if (isTypeBail1Empty.length !== 0 || props.editDocument || props.modalTitle === 'edit') {
                                      return (
                                          <Fragment>
                                              <div className="col form-floating ">
                                                    <input type="text" placeholder='ضمانت اول' aria-label="firstBail" id='firstBail' className="form-control"
                                                     value={formik.values.firstBail}
                                                     onChange={formik.setValues}
                                                    required disabled={props.editDocument}
                                                    />
                                                    <label htmlFor="firstBail">{firstBail1}</label>
                                                    <div className="invalid-feedback">
                                                    {firstBail1} را وارد کنید.
                                                    </div>
                                                    </div>
                                                    <div className="col form-floating mb-3">
                                                    <input type="text" placeholder='ضمانت دوم' id='secondBail' aria-label="secondBail" className="form-control"
                                                   value={formik.values.secondBail}
                                                     onChange={formik.setValues}
                                                    required disabled={props.editDocument}
                                                />
                                                    <label htmlFor="secondBail">{secondBail1}</label>
                                                    <div className="invalid-feedback">
                                                    {secondBail1} را وارد کنید.
                                                    </div>
                                              </div>
                                          </Fragment>
                                      )
                                    }
                                })()}

                            </div>

                            <div className='d-flex gap-2 mb-2'>

                                 <div className="col-3 form-floating mb-3">
                                      {props.editDocument ?
                                          <input
                                           className='form-control'
                                           id="commitmentPrice"
                                           name="commitmentPrice"
                                           required
                                           disabled={props.editDocument}
                                           onChange={(e) => setIsCommitmentPriceEmpty(e.target.value)}
                                           />
                                          :
                                          <CurrencyInput
                                           className='form-control'
                                           id="commitmentPrice"
                                           prefix="ریال "
                                           name="commitmentPrice"
                                           value={formik.values.commitmentPrice}
                                           placeholder="ریال 200,000,000"
                                           required
                                           onChange={(e) => setIsCommitmentPriceEmpty(e.target.value)}
                                           />
                                      }


                                       <label htmlFor="commitmentPrice">مبلغ تعهد انجام کار</label>
                                       <div className="invalid-feedback">
                                       مبلغ تعهد انجام کار وارد کنید.
                                       </div>
                                 </div>

                                 {(() => {
                                    if (isCommitmentPriceEmpty.length !== 0 || props.editDocument || props.modalTitle === 'edit') {
                                      return (
                                                 <div className="col-2 form-floating">
                                                        <input className="form-control" type='search' list="typeBailList" id="typeBail2" placeholder="نقد"
                                                        required disabled={props.editDocument}
                                                        value={formik.values.typeBail2}
                                                        onChange={(e) => setIsTypeBail2Empty(e.target.value)}
                                                        />
                                                        <label htmlFor="typeBail2">نوع ضمانت</label>
                                                        <datalist id="typeBailList">
                                                            <option value="چک"/>
                                                            <option value="نقد"/>
                                                            <option value="سفته"/>
                                                            <option value="بانک"/>
                                                        </datalist>
                                                        <div className="invalid-feedback">
                                                            نوع ضمانت را انتخاب کنید.
                                                        </div>
                                                 </div>
                                      )
                                    }
                                 })()}

                                 {(() => {
                                      if (isTypeBail2Empty.length !==0 || props.editDocument || props.modalTitle === 'edit') {
                                          return (
                                              <Fragment>
                                                    <div className="col form-floating ">
                                                        <input type="text" placeholder='ضمانت اول' aria-label="firstBail" id='firstBail2' className="form-control"
                                                        required disabled={props.editDocument}
                                                         value={formik.values.firstBail2}
                                                        onChange={formik.setValues}
                                                        />
                                                        <label htmlFor="firstBail">{firstBail2}</label>
                                                        <div className="invalid-feedback">
                                                        {firstBail2} را وارد کنید.
                                                        </div>
                                                    </div>
                                                    <div className="col form-floating mb-3">
                                                        <input type="text" placeholder='ضمانت دوم' id='secondBail' aria-label="secondBail2" className="form-control"
                                                        required disabled={props.editDocument}
                                                        value={formik.values.secondBail2}
                                                        onChange={formik.setValues}
                                                        />
                                                        <label htmlFor="secondBail">{secondBail2}</label>
                                                        <div className="invalid-feedback">
                                                        {secondBail2} را وارد کنید.
                                                        </div>
                                                    </div>
                                              </Fragment>
                                      )
                                    }
                                 })()}
                            </div>

                            <hr className='bg-primary mb-5'/>

                            <div className='d-flex gap-2'>
                                    <div className="col form-floating mb-3">
                                        <input type="text" className="form-control" id="topicContract"
                                        placeholder="حسابداری" required disabled={props.editDocument}
                                       value={formik.values.topicContract}
                                            onChange={formik.setValues}
                                        />
                                        <label htmlFor="topicContract">موضوع قرارداد</label>
                                        <div className="invalid-feedback">
                                        موضوع قرارداد را وارد کنید.
                                        </div>
                                    </div>

                                <div className="col form-floating">
                                    <input className="form-control" type='search' list="typeContractList" id="typeContract" placeholder="هندلینگ"
                                   required disabled={props.editDocument}
                                       value={formik.values.typeContract}
                                            onChange={formik.setValues}/>
                                    <label htmlFor="typeContract">نوع قرارداد</label>
                                    <datalist id="typeContractList">
                                        <option value="خرید قطعات نظامی"/>
                                        <option value="اجاره"/>
                                        <option value="هندلینگ"/>
                                        <option value="آموزش"/>
                                        <option value="عمرانی"/>
                                        <option value="پلیس"/>
                                        <option value="سپاه"/>
                                        <option value="بیمه"/>
                                    </datalist>
                                    <div className="invalid-feedback">
                                    نوع قرارداد را انتخاب کنید.
                                    </div>
                                </div>
                        </div>

                        <hr className='bg-primary mb-4'/>

                            <div className='d-flex gap-2  mb-2 align-items-center '>
                                        <div className='d-flex col align-items-center'>
                                        <p className='me-2'>در</p>
                                        <div>
                                          <DatePicker
                                          animations={[transition()]}
                                          render={<CustomInputDate disabled={props.editDocument} label='تاریخ'/>}
                                          id="clearedDatePicker"
                                           value={formik.values.clearedDate}
                                            onChange={formik.setValues}
                                          calendar={persian}
                                          locale={persian_fa}
                                          />
                                        </div>
                                        <p className='ms-2'>تسویه شده</p>
                                        </div>

                                        <div className="form-check col ms-4">
                                            <input className="form-check-input" type="checkbox" value="مدارک تحویل داده شده"
                                            id="receivedDocument" disabled={props.editDocument}
                                            checked={formik.values.receivedDocument}
                                            onChange={formik.setValues}
                                        />
                                            <label className="form-check-label" htmlFor="receivedDocument">
                                            مدارک تحویل داده شده
                                            </label>
                                        </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn material-symbols-outlined btn-danger" onClick={refreshPage} data-bs-dismiss="modal">close</button>
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