import React, {Fragment, useEffect, useState} from "react";
import Url from "../../../../config";
import ObserveModal from "../observemodal";

export const Product = (props) => {
    const [product, setProduct] = useState([])
    const [products, setProducts] = useState([])
    const [idNumber, setIdNumber] = useState(null)
    const [idNumberProduct, setIdNumberProduct] = useState(null)

    const fetchData = async () => {
        const response = await fetch(`${Url}/api/product/`)
        const data = await response.json()
        setProduct(data)
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
        [])

    return (
           <Fragment>
            <ObserveModal setModalTitle={props.setModalTitle} handleProduct={props.handleProduct} idNumber={idNumber}
            setIdNumberProduct={setIdNumberProduct} setIdNumber={setIdNumber} formik={props.formik} />
                 <div className='m-4'>
                    <div className="input-group mb-3">
                        <input type="text"  id='searchBox' className="form-control" placeholder='جستجو براساس کد کالا'
                        aria-label="searchBox" aria-describedby="search" />
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className= 'm-4 table-responsive rounded-3 col' style={{maxHeight : '50vh'}}>
                          <table className="table table-hover text-center table-striped align-middle table-bordered border-primary">
                                <thead className= 'bg-light'>
                                <tr>
                                    <th scope="col">کد</th>
                                    <th scope="col">نام</th>
                                    <th scope="col">ورود</th>
                                    <th scope="col">خروج</th>
                                    <th scope="col">مانده</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                {(product.length > 0 && product.filter(product => product.inventory ===  props.inventory).map((data) => (
                                    <tr key={data.code}>
                                        <th scope="row">{data.code}</th>
                                        <td>{data.name}</td>
                                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))}</td>
                                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 ))}</td>
                                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))
                                            - (products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 ))}</td>
                                        <td>
                                             <button id='visibilityBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#observeModal"
                                                title="کاردکس" onClick={() => {
                                                    setIdNumber(data.code)
                                                }}>visibility</button>
                                        </td>
                                    </tr>
                                         ))) ||
                                         <tr>
                                            <td colSpan="6" className='h3'>داده ای یافت نشد .....</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                     </div>
                    <div className= 'm-4 table-responsive rounded-3 col' style={{maxHeight : '50vh'}}>
                          <table className="table table-hover text-center table-striped align-middle table-bordered border-primary">
                                <thead className= 'bg-light'>
                                <tr>
                                    <th scope="col">مانده</th>
                                    <th scope="col">شمارش</th>
                                    <th scope="col">کسری/اضافه</th>
                                </tr>
                                </thead>
                                <tbody>
                                {(product.length > 0 && product.filter(product => product.inventory ===  props.inventory).map((data) => (
                                <tr key={data.code}>
                                    <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))
                                            - (products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 ))}</td>
                                    <td><input type="text"  id='searchBox' className="form-control" placeholder='تعداد شمارش شده را وارد کنید'
                                    aria-label="searchBox" aria-describedby="search" /></td>
                                    <td>0</td>
                                </tr>
                                        ))) ||
                                         <tr>
                                            <td colSpan="6" className='h3'>داده ای یافت نشد .....</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                     </div>

                    <div className= 'm-4 table-responsive rounded-3 col' style={{maxHeight : '50vh'}}>
                          <table className="table table-hover text-center table-striped align-middle table-bordered border-primary">
                                <thead className= 'bg-light'>
                                <tr>
                                    <th scope="col">نتیجه</th>
                                </tr>
                                </thead>
                                <tbody>
                                {(product.length > 0 && product.filter(product => product.inventory ===  props.inventory).map((data) => (
                                    <tr key={data.code}>
                                        <td>
                                            <div className="input-group">
                                                <input type="text"  id='resultInp' className="form-control" placeholder='نتیجه را بنویسید'
                                                aria-label="result" aria-describedby="result"/>
                                                <button className="btn btn-outline-success material-symbols-outlined" type="button" id="resultBtn">done</button>
                                            </div>
                                        </td>
                                    </tr>
                                         ))) ||
                                         <tr>
                                            <td colSpan="6" className='h3'>داده ای یافت نشد .....</td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                     </div>

                </div>

            </Fragment>
    )
}