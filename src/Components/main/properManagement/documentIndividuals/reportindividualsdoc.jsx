import React, {Fragment, useEffect, useRef, useState} from "react";
import Modal from "./modal";
import ObserveModal from "./observemodal";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {CustomInputDate} from "../../../../App";
import {useReactToPrint} from "react-to-print";

const ReportIndividualsDoc = (props) => {
    const [search , setSearch] = useState('')
    const [contract, setContracts] = useState([])
    const [idNumber, setIdNumber] = useState(null)
    const conponentPDF= useRef();

    const fetchData = async () => {
        const response = await
        fetch(`http://127.0.0.1:8000/api/persons/?full_name=${props.formik.values.full_name}
        &sex=${props.formik.values.sex}&id=${props.formik.values.id}&office=${props.formik.values.office}
        &date=${fixNumbers(props.formik.values.date)}&national_id=${props.formik.values.national_id}
        &clearedStatus=${props.formik.values.clearedStatus}&type=${props.formik.values.type}&job=${props.formik.values.job}`)
        const data = await response.json()
        setContracts(data)
      }
      useEffect(() => {
            fetchData()
          }, [props.formik.values])
      const options = {  year: 'numeric', month: 'numeric', day: 'numeric' };

      function handleChange(value){
            props.formik.setFieldValue('date' , value.toDate().toLocaleDateString('fa-IR', options).replaceAll('/' , '-'))
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
         if (search === 'شماره ثبت'){
             return 'id'
         }else if (search === 'نام و نشان'){
             return 'full_name'
         }else if (search === 'وضعیت'){
             return 'type'
         }else if (search === 'جنسیت'){
             return 'sex'
         }else if (search === 'کد ملی'){
             return 'national_id'
         }else if (search === 'محل کار'){
             return 'office'
         }else if (search === 'شغل'){
             return 'job'
         }else if (search === 'تاریخ استخدام'){
             return 'date'
         }
     }

     const generatePDF= useReactToPrint({

        content: ()=>conponentPDF.current,
        documentTitle:"Data",
     });

    return (
        <Fragment>
            <ObserveModal/>
            <Modal  editDocumentIndividuals={props.editDocumentIndividuals} idNumber={idNumber}/>

            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                 <div className= 'd-flex  justify-content-end m-4' >
                    <div className= 'd-flex gap-2'>
                        <button className="btn btn-danger material-symbols-outlined " type="button" id="observeDocModal"
                        data-bs-toggle="modal" data-bs-target="#observModal">description</button>
                        <button className="btn btn-outline-secondary material-symbols-outlined " type="button" id="print" onClick={generatePDF}>print</button>
                    </div>
                 </div>

                <div className='d-flex gap-2 align-items-center'>
                  <div className="form-floating m-4" style={{width:'10%'}}>
                    <select className="form-select" id="searchSelect"
                        aria-label="Floating label select example"  onChange={(e) =>
                        {
                          props.formik.setFieldValue('full_name' , '')
                          props.formik.setFieldValue('date' , '')
                          props.formik.setFieldValue('id' , '')
                          props.formik.setFieldValue('national_id' , '')
                          props.formik.setFieldValue('job' , '')
                          props.formik.setFieldValue('sex' , '')
                          props.formik.setFieldValue('type' , '')
                          props.formik.setFieldValue('office' , '')

                          setSearch(e.target.value)
                            if (search !== 'جنسیت' && search !== 'وضعیت' && search !== 'تاریخ استخدام' && search !== 'محل کار') {
                                document.getElementById('searchBoxPersonal').value = ''
                            }
                        }
                            }>
                        <option selected disabled>یک مورد انتخاب کنید</option>
                        <option value="نام و نشان">نام و نشان</option>
                        <option value="شماره ثبت">شماره ثبت</option>
                        <option value="وضعیت">وضعیت</option>
                        <option value="جنسیت">جنسیت</option>
                        <option value="کد ملی">کد ملی</option>
                        <option value="محل کار">محل کار</option>
                        <option value="شغل">شغل</option>
                        <option value="تاریخ استخدام">تاریخ استخدام</option>
                    </select>
                    <label htmlFor="searchSelect">جستجو براساس</label>
                  </div>
                  <div className="form-check ms-4">
                    <input className="form-check-input" type="checkbox" name='clearedStatus' checked={props.formik.values.clearedStatus} onChange={e => e.target.checked ?
                      props.formik.setFieldValue('clearedStatus' , true) : props.formik.setFieldValue('clearedStatus' , null)}
                    id="clearedCheck"/>
                    <label className="form-check-label" htmlFor="clearedCheck">
                    تسویه شده
                    </label>
                  </div>
                </div>

                <div className='m-4'>
                       {(() => {
                                 if (search === 'تاریخ استخدام') {
                                     return (
                                         <div>
                                             <DatePicker
                                                 animations={[transition()]}
                                                 render={<CustomInputDate ids={"clearedDatePicker"} names='date' label='تاریخ استخدام' />}
                                                 id="clearedDatePicker"
                                                 name='date'
                                                 onChange={handleChange}
                                                 onOpenPickNewDate={false}
                                                 calendar={persian}
                                                 locale={persian_fa}
                                             />
                                        </div>
                                     )
                                 }else if (search === 'جنسیت'){
                                     return (
                                            <div className="form-floating  col-2">
                                                <select className="form-select" id="sexSelector" onChange={(e) => {
                                                    props.formik.setFieldValue('sex' , e.target.value)
                                            }} name='sex' aria-label="Floating label select example">
                                                    <option selected disabled>یک مورد انتخاب کنید</option>
                                                    <option value="مونث">مونث</option>
                                                    <option value="مذکر">مذکر</option>
                                                </select>
                                                <label htmlFor="sexSelector">جنسیت</label>
                                            </div>

                                     )

                                 }else if (search === 'محل کار'){
                                     return (
                                            <div className="col-2 form-floating">
                                                    <input className="form-control" type='search' list="workLocationList" id="workLocation"
                                                    onChange={(e) => {
                                                    props.formik.setFieldValue('office' , e.target.value)
                                                    }} name='office' placeholder="جاسک" required/>
                                                    <label htmlFor="workLocation">محل کار</label>
                                                    <datalist id="workLocationList">
                                                                <option value="جاسک"/>
                                                                <option value="اورهال تهران"/>
                                                                <option value="اورهال اصفهان"/>
                                                                <option value="دفتر مرکزی"/>
                                                                <option value="دزفول"/>
                                                                <option value="بیشه کلا"/>
                                                                <option value="چابهار"/>
                                                    </datalist>
                                            </div>
                                     )}else if (search === 'وضعیت'){
                                         return (
                                              <div className="form-floating  col-2">
                                                    <select className="form-select" id="typeSelector" onChange={(e) => {
                                                    props.formik.setFieldValue('type' , e.target.value)
                                                    }} name='type' aria-label="Floating label select example">
                                                        <option selected disabled>یک مورد انتخاب کنید</option>
                                                        <option value="قراردادی">قراردادی</option>
                                                        <option value="بیمه ای">بیمه ای</option>
                                                    </select>
                                                    <label htmlFor="typeSelector">وضعیت</label>
                                                </div>
                                         )}else {
                                                return (
                                                  <div className="input-group mb-3">
                                                    <input type="text" id='searchBoxPersonal' className="form-control" onChange={(e) => {
                                                    props.formik.setFieldValue(nameFieldHandler() , e.target.value)
                                                   }} placeholder={`جستجو براساس ${search}`} aria-label="searchBox" aria-describedby="searchBox"/>
                                                    <button className="btn btn-outline-success material-symbols-outlined"  type="button" id="searchBtn">search</button>
                                                  </div>
                                                 )
                                             }
                                  })()}
                </div>

                <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                    <table className="table table-hover table-fixed text-center align-middle table-striped table-bordered border-primary" ref={conponentPDF} style={{direction:'rtl'}}>
                         <thead className= 'bg-light'>
                            <tr>
                                <th scope="col">ردیف</th>
                                <th scope="col">شماره ثبت</th>
                                <th scope="col">وضعیت</th>
                                <th scope="col">نام و نشان</th>
                                <th scope="col">جنسیت</th>
                                <th scope="col">تاریخ استخدام</th>
                                <th scope="col">کد ملی</th>
                                <th scope="col">محل کار</th>
                                <th scope="col">شغل</th>
                                <th scope="col">تضمین مصوب</th>
                                <th scope="col">مبلغ تضمین</th>
                                <th scope="col">وثیقه تضمین</th>
                                <th scope="col">مشخصه وثیقه</th>
                                <th scope="col">وضعیت تسویه</th>
                                <th scope="col">تاریخ تسویه</th>
                                <th scope="col">وضعیت مدرک</th>
                                <th scope="col">نمایش</th>
                            </tr>
                         </thead>

                        <tbody>
                            {(contract.length > 0 && contract.map((data,i) => (
                                <tr key={data.id}>
                                    <th scope="row">{i}</th>
                                    <td>{data.id}</td>
                                    <td>{data.type}</td>
                                    <td>{data.full_name}</td>
                                    <td>{data.sex}</td>
                                    <td>{data.date}</td>
                                    <td>{data.national_id}</td>
                                    <td>{data.office}</td>
                                    <td>{data.job}</td>
                                    <td>{data.approvedPrice}</td>
                                    <td>{data.commitmentPrice}</td>
                                    <td>{data.typeBail}</td>
                                    <td>{data.firstBail} _ {data.secondBail}</td>
                                    <td>{data.clearedStatus ? 'تسویه شده' : 'تسویه نشده'}</td>
                                    <td>{data.clearedDate}</td>
                                    <td>{data.receivedDocument ? 'تحویل داده شده' : 'تحویل داده نشده'}</td>
                                    <td>
                                        <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" id='infoModalBtn' data-bs-target="#modalMain"
                                        onClick={() => {
                                            props.handleEditDocumentIndividuals()
                                            setIdNumber(data.id)
                                        }}>info</button>
                                    </td>
                                </tr>
                                ))) ||
                                <tr>
                                     <td colSpan="17" className='h3'>داده ای یافت نشد .....</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </Fragment>

        )
}

export default ReportIndividualsDoc