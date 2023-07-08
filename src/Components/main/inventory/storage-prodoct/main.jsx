import React, {Fragment, useContext, useEffect, useRef, useState} from "react";
import ObserveModal from "./observemodal";
import Modal from "./main_modal";
import BillCheckmodal from "./bill&checkmodal";
import { memo } from "react";
import Url from "../../../config";
import {useReactToPrint} from "react-to-print";
import {Permission} from "../permission";
import {Context} from "../../../../context";
import ManualModal from "./manual_register_modal";

const WarHouse = () => {
    const [product, setProduct] = useState([])
    const [idNumber, setIdNumber] = useState(null)
    const [idNumberProduct, setIdNumberProduct] = useState(null)
    const [factorBtn, setFactorBtn] = useState(true)
    const [checkBtn, setCheckBtn] = useState(true)
    const [handleBtn, setHandleBtn] = useState(true)
    const [rank, setRank] = useState('');
    const [office, setOffice] = useState('');
    const [factor, setFactor] = useState('');
    const [billCheck, setBillCheck] = useState('');
    const [handling, setHandling] = useState('');
    const [products, setProducts] = useState([])
    const [search , setSearch] = useState('')

    const componentPDF= useRef();
    const generatePDF= useReactToPrint({
        content: ()=>componentPDF.current,
        documentTitle:"Data",
    });
    const context = useContext(Context)




    const fetchData = async () => {
        const response = await fetch(`${Url}/api/product/?name=${context.formikProductSearch.values.name}&code=${context.formikProductSearch.values.code}`, {
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
                 handleHandling()
                 handleCheck()
          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [context.formikProductSearch.values.code, idNumberProduct , factor , billCheck , context.formikProductSearch.values.name , handling])


    const handleCheckFactor = () => {
        if (products.filter(product => product.document_code === factor && product.document_code !== '' && product.document_type === 'فاکتور')[0]){
            return setFactorBtn(false)
        }else return setFactorBtn(true)
    }
    const handleCheck = () => {
        if (products.filter(product => product.document_code === billCheck && product.document_code !== '' && product.document_type === 'حواله')[0]){
            return setCheckBtn(false)
        }else return setCheckBtn(true)
    }

     const handleHandling = () => {
        if (products.filter(product => product.document_code === handling && product.document_code !== '' && product.document_type === 'انبارگردانی')[0]){
            return setHandleBtn(false)
        }else return setHandleBtn(true)
    }

    return (
        <Fragment>
        <Permission setRank={setRank} setOffice={setOffice}/>
        <ObserveModal setModalTitle={context.setModalTitle} handleProduct={context.handleProduct} idNumber={idNumber}
        setIdNumberProduct={setIdNumberProduct} setIdNumber={setIdNumber} formik={context.formikProductSearch} />
        <Modal modalTitle={context.modalTitle} idNumber={idNumber} office={office} setIdNumber={setIdNumber}
        products={products} setIdNumberProduct={setIdNumberProduct} idNumberProduct={idNumberProduct}/>
        <ManualModal modalTitle={context.modalTitle} idNumber={idNumber} office={office} setIdNumber={setIdNumber}
        products={products} setIdNumberProduct={setIdNumberProduct} idNumberProduct={idNumberProduct}/>
        <BillCheckmodal modalTitle={context.modalTitle} setModalTitle={context.setModalTitle} factor={factor} billCheck={billCheck} setBillCheck={setBillCheck} setFactor={setFactor} handling={handling} setHandling={setHandling}/>
        <div className= 'plater m-2 rounded-3 shadow-lg'>
            <div className= 'd-flex justify-content-between m-4' >
                <div className='d-flex flex-lg-nowrap gap-2 flex-wrap'>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="billBtn" data-bs-toggle="modal" style={{maxWidth:'20vw' , minWidth:'50px' , maxHeight:'10vh' , fontSize:'1vw'}}
                        data-bs-target="#billCheckModal" onClick={() => context.setModalTitle('factor')}  disabled={factorBtn}>قبض انبار</button>
                        <input type="text" className="form-control" style={{maxWidth:'20vw' , minWidth:'50px' , maxHeight:'10vh' , fontSize:'1vw'}} onChange={e => {
                                 setFactor(e.target.value)
                        }} placeholder="شماره فاکتور" value={factor}
                        aria-label="قبض انبار" id="billInp" aria-describedby="billBtn"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="checkBtn" style={{maxWidth:'20vw' , minWidth:'50px' , maxHeight:'10vh' , fontSize:'1vw'}}
                                data-bs-toggle="modal" data-bs-target="#billCheckModal"  disabled={checkBtn} onClick={() => context.setModalTitle('check')}>صدور حواله</button>
                        <input type="text" className="form-control" id="checkInp" style={{maxWidth:'20vw' , minWidth:'50px' , maxHeight:'10vh' , fontSize:'1vw'}} onChange={e => setBillCheck(e.target.value)} value={billCheck} placeholder="شماره حواله"
                        aria-label="صدور حواله" aria-describedby="checkBtn"/>
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" id="handlingBtn" style={{maxWidth:'20vw' , minWidth:'50px' , maxHeight:'10vh' , fontSize:'1vw'}}
                                data-bs-toggle="modal" data-bs-target="#billCheckModal"
                            disabled={handleBtn} onClick={() => context.setModalTitle('handling')}>صدور گزارش انبارگردانی</button>
                        <input type="text" className="form-control" id="handlingInp"
                           style={{maxWidth:'20vw' , minWidth:'10px' , maxHeight:'10vh' , fontSize:'1vw'}} onChange={e => setHandling(e.target.value)} value={handling} placeholder="شناسه انبارگردانی"
                        aria-label="شناسه انبارگردانی" aria-describedby="handlingBtn"/>
                    </div>
                </div>
                <div className= 'd-flex gap-2' style={{maxWidth:'255px'}}>
                <button className="btn btn-outline-secondary material-symbols-outlined h-100 ms-2"
                    style={{maxWidth:'20vw' , minWidth:'50px' , maxHeight:'10vh'}} type="button" id="print" onClick={generatePDF}>print</button>
                     <button className= 'btn btn-primary'  id='registrationBtnModal' data-bs-toggle="modal"
                    style={{maxWidth:'20vw' , minWidth:'150px' , maxHeight:'10vh'}}
                data-bs-target="#manualModal">ثبت</button>
                </div>
            </div>

            <div className='m-4'>
                <div className="form-floating my-2" style={{maxWidth:'255px'}}>
                        <select className="form-select" defaultValue='' id="searchSelector" style={{maxWidth:'20vw' , minWidth:'200px'}}  onChange={(e) => {
                            context.formikProductSearch.setFieldValue('code' , '')
                            context.formikProductSearch.setFieldValue('name' , '')
                            setSearch(e.target.value)
                        }}
                            aria-label="Search Select">
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="کد">کد</option>
                            <option value="نام کالا">نام کالا</option>
                        </select>
                        <label htmlFor="searchSelector">جستجو براساس</label>
                </div>
                <div className="input-group mb-3">
                    <input type="text"  id='searchBox' className="form-control" value={search === 'نام کالا' ? context.formikProductSearch.values.name : context.formikProductSearch.values.code}
                    onChange={e => search === 'نام کالا' ? context.formikProductSearch.setFieldValue('name' , e.target.value) : context.formikProductSearch.setFieldValue('code' , e.target.value)} placeholder={`جستجو براساس ${search}`}
                    aria-label="searchBox" aria-describedby="search" />
                </div>
            </div>

            <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '50vh'}}>
                <table ref={componentPDF} className="table table-hover text-center table-striped align-middle table-bordered border-primary" style={{direction:'rtl' , fontSize:'1vw'}}>
                    <thead className= 'bg-light'>
                    <tr>
                        <th scope="col">کد</th>
                        <th scope="col">نام</th>
                        <th scope="col">ورود</th>
                        <th scope="col">خروج</th>
                        <th scope="col">مانده</th>
                        <th scope="col" className='d-print-none'></th>
                    </tr>
                    </thead>
                    <tbody>
                    {(product.length > 0 && product.filter(product => {if (rank === 'مدیر'){
                                              return product.inventory
                                          }else{
                                              return (product.inventory === office)
                                          }}).map((data) => (
                    <tr key={data.code}>
                        <th scope="row">{data.code}</th>
                        <td>{data.name}</td>
                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))}</td>
                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 ))}</td>
                        <td>{(products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.input , 0 ))
                            - (products.filter(products => products.product ===  data.code).reduce((a,v) =>   a + v.output , 0 ))}</td>
                        <td className='d-print-none'>
                            <button id='visibilityBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#observeModal"
                            title="کاردکس" onClick={() => {
                                setIdNumber(data.code)
                            }}>visibility</button>
                            <button id='exitBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain"
                            title="خروج" onClick={() => {
                                setIdNumber(data.code)
                                context.setModalTitle('remove')
                            }}>remove</button>
                            <button id='entryBtn' className= 'btn btn-success   material-symbols-outlined ms-2' data-bs-toggle="modal" data-bs-target="#modalMain"
                            title="ورود" onClick={() => {
                                setIdNumber(data.code)
                                context.setModalTitle('entry')
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