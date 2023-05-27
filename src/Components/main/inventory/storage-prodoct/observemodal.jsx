import React, {Fragment, useEffect, useRef, useState} from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import {CustomInputDate} from "../../../../App";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {useReactToPrint} from "react-to-print";

const ObserveModal = (props) => {
  const [search , setSearch] = useState('')
  const [product, setProduct] = useState([])
  const [products, setProducts] = useState([])
  const conponentPDF= useRef();


  const fetchData = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/product/`+ props.idNumber)
        const data = await response.json()
        setProduct(data)
      }

  const fetchDataProducts = async () => {
        const response = await fetch(`http://127.0.0.1:8000/api/allproducts/?date=${fixNumbers(props.formik.values.date)}&consumable=${props.formik.values.consumable}`)
        const data = await response.json()
        setProducts(data)
      }

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

  useEffect(() => {
          fetchData()
          fetchDataProducts()
          }, [props.idNumber , props.formik.values])

   const generatePDF= useReactToPrint({
        content: ()=>conponentPDF.current,
        documentTitle:"Data",
    });
  return (
      <Fragment>
         <div className="modal fade"  data-bs-backdrop="static" data-bs-keyboard="false" id="observeModal" tabIndex="-1" aria-labelledby="observeModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-fullscreen" >
                        <div className="modal-content">
                            <div className="modal-header mx-4">
                                <div className="modal-title fs-5 h1 d-flex gap-2" id="exampleModalLabel"><span>{product.name}</span><span class="text-danger">{props.idNumber}</span></div>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close" onClick={() => {
                                    props.handleProduct()
                                    setSearch('')
                                }}></button>
                            </div>
                            <div className="modal-body">
                                <div className='d-flex justify-content-between'>
                                      <div className="form-floating m-4 col-1">
                                            <select className="form-select" id="searchSelector"
                                                aria-label="Search Select" onChange={(e) => {
                                                    props.formik.setFieldValue('consumable' , '')
                                                    props.formik.setFieldValue('date' , '')
                                                    setSearch(e.target.value)
                                            }}>
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="تاریخ ثبت">تاریخ ثبت</option>
                                                <option value="مورد مصرف">مورد مصرف</option>
                                            </select>
                                            <label htmlFor="searchSelect">جستجو براساس</label>
                                      </div>
                                   <div className= 'd-flex gap-2 m-4'>
                                        <button className="btn btn-outline-secondary material-symbols-outlined h-75" type="button" id="print" onClick={generatePDF}>print</button>
                                   </div>
                                </div>

                    <div className='m-4'>
                        {(() => {
                            if (search === 'تاریخ ثبت') {
                              return (
                                <DatePicker
                                 animations={[transition()]}
                                 render={<CustomInputDate  ids={"date"} names='date' label='تاریخ ثبت'  />}
                                 id="date"
                                 name='date'
                                 onChange={handleChange}
                                 calendar={persian}
                                 onOpenPickNewDate={false}
                                 locale={persian_fa}
                             />
                              )
                            } else if (search === 'گروه') {
                                    return (
                                        <div className="col-2 form-floating">
                                            <input className="form-control" type='search' list="groupProductList" id="groupProduct" placeholder="اجاره"/>
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
                                    )
                                }else if (search === 'مورد مصرف') {
                                    return (
                                        <div className="col-2 form-floating">
                                            <input className="form-control" type='search' value={props.formik.values.consumable}
                                            onChange={e => props.formik.setFieldValue('consumable' , e.target.value)} list="consumeCauseList" id="consumeCause" placeholder="اجاره"/>
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
                                    )
                                }
                        })()}
                  </div>
                  <hr className='bg-primary m-4'/>
                  <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                    <table ref={conponentPDF} className="table table-hover text-center table-striped align-middle table-bordered border-primary" style={{direction:'rtl'}}>
                        <thead className= 'bg-light'>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">سند</th>
                            <th scope="col">شناسه سند</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col">عملیات</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">مورد مصرف</th>
                            <th scope="col">خریدار</th>
                            <th scope="col">گیرنده</th>
                            <th scope="col">اصلاحیه</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>

                    {(products.length > 0 && products.filter(products => products.product ===  props.idNumber).map((data , i) => (
                        <tr key={data.id}>
                            <th scope="row">{i}</th>
                            <td>{data.document_type}</td>
                            <td>{data.document_code}</td>
                            <td>{data.date}</td>
                            <td>{data.operator}</td>
                            <td>{data.operator === 'خروج' ? data.output : data.input }</td>
                            <td>{data.consumable}</td>
                            <td>{data.buyer}</td>
                            <td>{data.receiver}</td>
                            <td>...</td>
                            <td>
                                <button id='editBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" title="ویرایش" onClick={() => props.setModalTitle('edit')}>edit</button>
                                <button id='deleteBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' title="حذف" hidden={true}>delete</button>
                            </td>
                        </tr>
                               ))) || <td colSpan="12" className='h3'>داده ای یافت نشد .....</td>
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
export default ObserveModal