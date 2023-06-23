import React, {Fragment, useEffect, useState} from "react";
import Url from "../../../../config";
import ObserveModal from "../observemodal";
import {useFormik} from "formik";
import axios from "axios";
import Swal from "sweetalert2";

export const Product = (props) => {
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [idNumber, setIdNumber] = useState(null)
    const [code, setCode] = useState('')
    const [idNumberProduct, setIdNumberProduct] = useState(null)
    const [count, setCount] = useState({})
    let today = new Date().toLocaleDateString('fa-IR');
   const options = {
              year: "numeric",
            };
    const formik = useFormik({
    initialValues: {
      result: "",
      code: "",
    },
    enableReinitialize: true,
    });

    const fetchData = async () => {
        const response = await fetch(`${Url}/api/product/?code=${formik.values.code}`)
        const data = await response.json()
        setProduct(data)
        const quantities = data.reduce((a, b) => ({ ...a, [b.code]: b.count}), {})
        setCount(quantities)

      }

    const fetchDataProducts = async () => {
        const response = await fetch(`${Url}/api/allproducts`)
        const data = await response.json()
        setProducts(data)
      }

    useEffect(() => {
            void fetchData()
            void fetchDataProducts()

          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [formik.values.code])

    const postHandler = async (id) => {
         await axios.post(
            `${Url}/api/handling-product/`,
              {
              product: id,
              date: today.replaceAll('/' , '-'),
              result: formik.values.result,
         })
        }

       const putHandler = async (id) => {
         await axios.put(
            `${Url}/api/product/${id}/`,
              {
              code: id,
              yearly_handling: new Date().toLocaleDateString('fa-IR' , options ),
         })
          await fetchData()
        }

    const closeAlert = (id) => {
          Swal.fire({
              title: 'مطمئنید?',
              text: `آیا از ثبت نتیجه انبارگردانی این کالا مطمئنید ؟`,
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
                  'نتیجه ثبت و در بازه یک ساله در قسمت انبارگردانی قفل شد.',
                  'success',
                  'ok',
                  postHandler(id),
                  putHandler(id),
                )
              }
            })
      }

    const prom = async  (id) => {
     return  closeAlert(id)

    }
    const func = async (id) => {
         await prom(id).then(res => {
             setCode(id)
         });
    }


    return (
           <Fragment>
            <ObserveModal setModalTitle={props.setModalTitle} handleProduct={props.handleProduct} idNumber={idNumber}
            setIdNumberProduct={setIdNumberProduct} setIdNumber={setIdNumber} formik={props.formik} />
                 <div className='m-4'>
                    <div className="input-group mb-3">
                        <input type="text"  id='searchBox' className="form-control" value={formik.values.code}
                    onChange={e => formik.setFieldValue('code' , e.target.value)} placeholder='جستجو براساس کد کالا'
                        aria-label="searchBox" aria-describedby="search" />
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                    </div>
                </div>
                   <div className='m-4'>
                        <span className="dot bg-warning ms-4"></span><span> به معنی یک بار انبارگردانی شده و به مدت یک سال در این بخش قفل شده.</span>
                   </div>
                <div className='d-flex'>
                    <div className= 'm-4 table-responsive rounded-3 col' style={{maxHeight : '40vh'}}>
                          <table className="table table-hover text-center align-middle table-bordered border-primary">
                                <thead className= 'bg-light sticky-top'>
                                <tr>
                                    <th scope="col">کد</th>
                                    <th scope="col">نام</th>
                                    <th scope="col">ورود</th>
                                    <th scope="col">خروج</th>
                                    <th scope="col"></th>
                                    <th scope="col">مانده</th>
                                    <th scope="col">شمارش</th>
                                    <th scope="col">کسری/اضافه</th>
                                    <th scope="col">نتیجه</th>

                                </tr>
                                </thead>
                                <tbody>
                                {(product.length > 0 && product.filter(product => product.inventory ===  props.inventory).map((data , i) => (
                                    <tr key={data.code}
                                    style={{backgroundColor:`${(data.yearly_handling === new Date().toLocaleDateString('fa-IR' , options) ? 'hsl(60, 100%, 90%)' : null)}`}}>
                                        <th scope="row">{data.code}</th>
                                        <td>{data.name}</td>
                                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))}</td>
                                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 ))}</td>
                                        <td>
                                             <button id='visibilityBtn' className= 'btn btn-warning material-symbols-outlined'
                                             data-bs-toggle="modal" disabled={data.yearly_handling === new Date().toLocaleDateString('fa-IR' , options)} data-bs-target="#observeModal"
                                                title="کاردکس" onClick={() => {
                                                    setIdNumber(data.code)
                                                }}>visibility</button>
                                        </td>
                                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))
                                                - (products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 ))
                                        }</td>

                                        <td><input type="number"  id={`count${i}`} name={`count`}
                                       onChange={e => setCount({...count, [data.code]: e.target.value})} disabled={data.yearly_handling === new Date().toLocaleDateString('fa-IR' , options)}
                                        value={count[data.code] || ''} className="form-control" placeholder='تعداد شمارش شده را وارد کنید'
                                        aria-label="count" aria-describedby="count" /></td>

                                        <td style={{direction:'ltr'}}>{count[data.code] - ((products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))
                                                - (products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 )))}</td>
                                        <td>
                                            <div className="input-group">
                                                <input type="text"  id={`resultInp${i}`} disabled={data.yearly_handling === new Date().toLocaleDateString('fa-IR' , options)}
                                                onChange={e => formik.setFieldValue('result' , e.target.value)} className="form-control" placeholder='نتیجه را بنویسید'
                                                aria-label="result" aria-describedby="result"/>
                                                <button className="btn btn-outline-success material-symbols-outlined"
                                                disabled={data.yearly_handling === new Date().toLocaleDateString('fa-IR' , options)} type="button" id="resultBtn" onClick={async () => {
                                                    await func(data.code)
                                                }}>done</button>
                                            </div>
                                        </td>
                                    </tr>
                                         ))) ||
                                         <tr>
                                            <td colSpan="9" className='h3'>داده ای یافت نشد .....</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                     </div>
                </div>

            </Fragment>
    )
}