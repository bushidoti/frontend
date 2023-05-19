import React, {Fragment, useEffect, useRef, useState} from "react";
import Modal from "./modal";
import ObserveModal from "./uploadDocument/observemodal";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import {CustomInputDate} from "../../../App";
import {Toggler} from "./toggler";
import { useReactToPrint } from "react-to-print";


const Report = (props) => {
      const [contract, setContracts] = useState([])
      const [idNumber, setIdNumber] = useState(null)
      const conponentPDF= useRef();

    const fetchData = async () => {
        const response = await
        fetch(`http://127.0.0.1:8000/api/documents/?employer=${props.formik.values.employer}
        &typeContract=${props.formik.values.typeContract}&id=${props.formik.values.id}&contractNumber=${props.formik.values.contractNumber}
        &dateContract=${fixNumbers(props.formik.values.dateContract)}&topicContract=${props.formik.values.topicContract}&clearedStatus=${props.formik.values.clearedStatus}`)
        const data = await response.json()
        setContracts(data)
      }
      useEffect(() => {
            fetchData()
          }, [props.formik.values])


     const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };

     function handleChange(value){
            props.formik.setFieldValue('dateContract' , value.toDate().toLocaleDateString('fa-IR', options).replaceAll('/' , '-'))
        }

    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
        arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
        fixNumbers = function (str) {
            if (typeof str === 'string') {
                for (let i = 0; i < 10; i++) {
                    str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
                }
            }
            return str;
        };

     const nameFieldHandler = () => {
         if (props.search === 'شماره ثبت'){
             return 'id'
         }else if (props.search === 'شماره قرارداد'){
             return 'contractNumber'
         }else if (props.search === 'موضوع قرارداد'){
             return 'topicContract'
         }else if (props.search === 'نام کارفرما' || props.search === 'نام پیمانکار'){
             return 'employer'
         }
     }
     const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Data",
    });
    return (
        <Fragment>
            <ObserveModal/>
            <Modal editDocument={props.editDocument} docToggle={props.docToggle} idNumber={idNumber}/>

            <div className= 'plater  m-2 rounded-3 shadow-lg '>

                 <div className= 'd-flex  justify-content-between m-4' >
                                 <div className= 'd-flex gap-2'>
                                      <Toggler handleForm={props.handleForm}/>
                                      <div className="form-check ms-4">
                                      <input className="form-check-input" type="checkbox" name='clearedStatus' checked={props.formik.values.clearedStatus} onChange={e => e.target.checked ?
                                          props.formik.setFieldValue('clearedStatus' , true) : props.formik.setFieldValue('clearedStatus' , null)}
                                      id="clearedCheck"/>
                                      <label className="form-check-label" htmlFor="clearedCheck">
                                      تسویه شده
                                      </label>
                                      </div>
                                 </div>
                            <div className= 'd-flex gap-2'>
                                <button className="btn btn-danger material-symbols-outlined " type="button" id="observeDocs"  data-bs-toggle="modal"
                                data-bs-target="#observModal">description</button>
                                <button className="btn btn-outline-secondary material-symbols-outlined " type="button" id="print" onClick={generatePDF}>print</button>
                            </div>
                        </div>

                  <div className="form-floating m-4" style={{width:'10%'}}>
                        <select className="form-select" id="searchSelector"
                            aria-label="Search Select" onChange={(e) =>
                        {
                          props.formik.setFieldValue('employer' , '')
                          props.formik.setFieldValue('dateContract' , '')
                          props.formik.setFieldValue('typeContract' , '')
                          props.formik.setFieldValue('topicContract' , '')
                          props.formik.setFieldValue('id' , '')
                          props.formik.setFieldValue('contractNumber' , '')
                          props.setSearch(e.target.value)
                            if (props.search !== 'نوع قرارداد' && props.search !== 'تاریخ قرارداد' ) {
                                document.getElementById('searchBox').value = ''
                            }
                        }
                            }>
                            <option selected disabled>یک مورد انتخاب کنید</option>
                            {(() => {
                                if(props.docToggle != null){
                                    return(
                                        <Fragment>
                                                <option value={`نام ${props.docToggle ? "پیمانکار" : "کارفرما"}`}>نام {props.docToggle ? "پیمانکار" : "کارفرما"}</option>
                                                <option value="نوع قرارداد">نوع قرارداد</option>
                                                <option value="شماره ثبت">شماره ثبت</option>
                                                <option value="شماره قرارداد">شماره قرارداد</option>
                                                <option value="تاریخ قرارداد">تاریخ قرارداد</option>
                                                <option value="موضوع قرارداد">موضوع قرارداد</option>
                                        </Fragment>
                                    )
                                }

                            })()}
                        </select>
                        <label htmlFor="searchSelect">جستجو براساس</label>
                  </div>

                  <div className='m-4'>
                        {(() => {
                            if (props.search === 'تاریخ قرارداد') {
                              return (
                                <DatePicker
                                     animations={[transition()]}
                                     render={<CustomInputDate  ids={"dateContract"} names='clearedDatePicker' label='تاریخ قرارداد'/>}
                                     id="dateContract"
                                     name='dateContract'
                                     onChange={handleChange}
                                     calendar={persian}
                                     onOpenPickNewDate={false}
                                     locale={persian_fa}
                                 />
                              )
                            } else if (props.search === 'نوع قرارداد') {
                                    return (
                                        <div className="col-2 form-floating">
                                            <input className="form-control" type='search' list="typeContractList"
                                                   name='typeContract' onChange={(e) => {
                                                    props.formik.setFieldValue('typeContract' , e.target.value)
                                            }} id="typeContract" placeholder="اجاره"/>
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
                                        </div>
                                    )
                                } else {
                                    return (
                                         <div className="input-group mb-3">
                                             <input type="text" className="form-control" onChange={(e) => {
                                                    props.formik.setFieldValue(nameFieldHandler() , e.target.value)
                                            }} placeholder={`جستجو براساس ${props.search}`}
                                             aria-label="searchBox" id='searchBox' aria-describedby="searchBox"/>
                                             <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                                         </div>
                                    )
                                }
                        })()}
                  </div>
                {props.docToggle === null ? null :
                    <div className='m-4 table-responsive text-nowrap rounded-3'  style={{maxHeight: '50vh'}}>
                        <table ref={conponentPDF}
                           className="table table-hover table-fixed text-center align-middle table-striped table-bordered border-primary" style={{direction:'rtl'}}>
                            <thead className='bg-light'>
                            <tr>
                                <th scope="col">ردیف</th>
                                <th scope="col">شماره ثبت</th>
                                <th scope="col">شماره قرارداد</th>
                                <th scope="col">نام {props.docToggle ? "پیمانکار" : "کارفرما"}</th>
                                <th scope="col">موضوع قرارداد</th>
                                <th scope="col">نوع قرارداد</th>
                                <th scope="col">تایخ قرارداد</th>
                                <th scope="col">مبلغ قرارداد</th>
                                <th scope="col">مبلغ پیش پرداخت</th>
                                <th scope="col">مدت قرارداد</th>
                                <th scope="col">مبلغ حسن انجام کار</th>
                                <th scope="col">نوع ضمانت</th>
                                <th scope="col">مشخصه ضمانت</th>
                                <th scope="col">مبلغ تعهد انجام کار</th>
                                <th scope="col">نوع ضمانت</th>
                                <th scope="col">مشخصه ضمانت</th>
                                <th scope="col">نمایش</th>
                            </tr>
                            </thead>

                            <tbody>
                                    {(contract.length > 0 && contract.filter(contract => contract.type_form === props.docToggle).map((data,i) => (
                                <tr key={data.id}>
                                    <th scope="row">{i}</th>
                                    <td>{data.id}</td>
                                    <td>{data.contractNumber}</td>
                                    <td>{data.employer}</td>
                                    <td>{data.topicContract}</td>
                                    <td>{data.typeContract}</td>
                                    <td>{data.dateContract}</td>
                                    <td>{data.contractPrice}</td>
                                    <td>{data.prePaidPrice}</td>
                                    <td>{data.durationContract}</td>
                                    <td>{data.goodPrice}</td>
                                    <td>{data.typeBail1}</td>
                                    <td>{data.firstBail} _ {data.secondBail}</td>
                                    <td>{data.commitmentPrice}</td>
                                    <td>{data.typeBail2}</td>
                                    <td>{data.firstBail2} _ {data.secondBail2}</td>
                                    <td>
                                        <button className='btn btn-warning material-symbols-outlined' id='infoBtn'
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalMain" onClick={() => {
                                            props.handleEditDocument()
                                            setIdNumber(data.id)

                                        }}>info
                                        </button>
                                    </td>
                                </tr>
                            ))) || <td colSpan="17" className='h3'>داده ای یافت نشد .....</td>}

                            </tbody>
                        </table>
                    </div>
                }
            </div>


        </Fragment>

        )
}



export default Report