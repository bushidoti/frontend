import React, {Fragment, useEffect, useState} from "react";
import ObserveModal from "./observemodal";
import Modal from "./main_modal";
import BillCheckmodal from "./bill&checkmodal";
import axios from "axios";
import { memo } from "react";
import Url from "../../../config";

const WarHouse = (props) => {
    const [product, setProduct] = useState([])
    const [idNumber, setIdNumber] = useState(null)
    const [idNumberProduct, setIdNumberProduct] = useState(null)
    const [factorBtn, setFactorBtn] = useState(true)
    const [checkBtn, setCheckBtn] = useState(true)
    const [message, setMessage] = useState('');
    const [factor, setFactor] = useState('');
    const [billCheck, setBillCheck] = useState('');
    const [products, setProducts] = useState([])


    useEffect(() => {
            (async () => {
                const {data} = await axios.get(`${Url}/home/`, {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
              });
              setMessage(data.message);
        })()
    }, []);


    const fetchData = async () => {
        const response = await fetch(`${Url}/api/product/?code=${props.formik.values.code}`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setProduct(data)
      }

    const fetchDataProducts = async () => {
        const response = await fetch(`${Url}/api/allproducts`, {
                 headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
            })
        const data = await response.json()
        setProducts(data)
      }


    useEffect(() => {
            void fetchData()
            void fetchDataProducts()
                 handleCheckFactor()
                 handleCheckCheck()
          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [props.formik.values.code, idNumberProduct , factor , billCheck])


    const handleCheckFactor = () => {
        if (products.filter(product => product.document_code === factor && product.document_code !== '' && product.document_type === 'فاکتور')[0]){
            return setFactorBtn(false)
        }else return setFactorBtn(true)
    }
      const handleCheckCheck = () => {
        if (products.filter(product => product.document_code === billCheck && product.document_code !== '' && product.document_type === 'حواله')[0]){
            return setCheckBtn(false)
        }else return setCheckBtn(true)
    }

    return (
        <Fragment>
        <ObserveModal setModalTitle={props.setModalTitle} handleProduct={props.handleProduct} idNumber={idNumber}
        setIdNumberProduct={setIdNumberProduct} setIdNumber={setIdNumber} formik={props.formik} />
        <Modal modalTitle={props.modalTitle} idNumber={idNumber} message={message} setIdNumber={setIdNumber}
        products={products} setIdNumberProduct={setIdNumberProduct} idNumberProduct={idNumberProduct}/>
        <BillCheckmodal modalTitle={props.modalTitle} factor={factor} billCheck={billCheck} setBillCheck={setBillCheck} setFactor={setFactor}/>
        <div className= 'plater  m-2 rounded-3 shadow-lg '>
            <div className= 'd-flex justify-content-between m-4' >
                <div className='d-flex gap-2'>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="billBtn" data-bs-toggle="modal"
                        data-bs-target="#billCheckModal" onClick={() => props.setModalTitle('factor')}  disabled={factorBtn}>قبض انبار</button>
                        <input type="text" className="form-control" onChange={e => {
                                 setFactor(e.target.value)

                        }} placeholder="شماره فاکتور" value={factor}
                        aria-label="قبض انبار" id="billInp" aria-describedby="billBtn"/>
                    </div>
                     <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="checkBtn"
                                data-bs-toggle="modal" data-bs-target="#billCheckModal"  disabled={checkBtn} onClick={() => props.setModalTitle('check')}>صدور حواله</button>
                        <input type="text" className="form-control" id="checkInp" onChange={e => setBillCheck(e.target.value)} value={billCheck} placeholder="شماره حواله"
                        aria-label="صدور حواله" aria-describedby="checkBtn"/>
                    </div>
                </div>
                <div className= 'd-flex gap-2'>
                <button className= 'btn btn-primary'  id='registrationBtnModal' data-bs-toggle="modal"
                data-bs-target="#modalMain" onClick={() =>  props.setModalTitle('register')}>ثبت کالا جدید</button>
                </div>
            </div>

            <div className='m-4'>
                <div className="input-group mb-3">
                    <input type="text"  id='searchBox' className="form-control" value={props.formik.values.code}
                    onChange={e => props.formik.setFieldValue('code' , e.target.value)} placeholder='جستجو براساس کد کالا'
                    aria-label="searchBox" aria-describedby="search" />
                    <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                </div>
            </div>

            <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
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
                    {(product.length > 0 && product.filter(product => product.inventory ===  message).map((data) => (
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
                            <button id='exitBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain"
                            title="خروج" onClick={() => {
                                setIdNumber(data.code)
                                props.setModalTitle('remove')
                            }}>remove</button>
                            <button id='entryBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain"
                            title="ورود" onClick={() => {
                                setIdNumber(data.code)
                                props.setModalTitle('entry')
                            }}>add</button>
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

export default memo(WarHouse)