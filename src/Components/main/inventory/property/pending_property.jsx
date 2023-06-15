import React, {Fragment, useEffect, useState} from "react";
import Modal from "./modal";
import Url from "../../../config";
import axios from "axios";
import {useFormik} from "formik";

const PendingProperty = () => {
    const [typeProperty , setTypeProperty] = useState('')
    const [property, setProperty] = useState([])
    const [idNumber, setIdNumber] = useState(null)
    const [typeDigital , setTypeDigital] = useState('')
    const [typeCommunication , setTypeCommunication] = useState('')
    const [message, setMessage] = useState('')
    const [editStatus, setEditStatus] = useState(false)
    const formik = useFormik({
            initialValues: {
                  code: '',
                  name: '',
                  user: '',
                  install_location: '',
                  model: '',
                  year_made: '',
                  owner: '',
                  use_for: '',
                  chassis: '',
                  motor: '',
                  plate1: '',
                  plate2: '',
                  plate3: '',
                  plate4: '',
                  year_buy: '',
                  using_location: '',
                  number_type: '',
                  number: '',
                  type_item: '',
            },
            enableReinitialize: true,
        });


    const fetchData = async () => {
        if (typeProperty !== ''){
                const response = await fetch(`${Url}/api/${typeProperty}/`)
                const data = await response.json()
                setProperty(data)
        }
    }


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

     useEffect(() => {
            void fetchData()
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [typeProperty, formik.values])

    return (
        <Fragment>
            <Modal setTypeCommunication={setTypeCommunication} typeCommunication={typeCommunication}  typeProperty={typeProperty} editStatus={editStatus} setEditStatus={setEditStatus} idNumber={idNumber} setIdNumber={setIdNumber} setTypeDigital={setTypeDigital} typeDigital={typeDigital}/>
            <div className= 'plater  m-2 rounded-3 shadow-lg mb-4'>
                 <div className= 'd-flex  justify-content-between m-4' >
                        <div className= 'd-flex gap-2  align-items-center'>
                        <div className="form-floating">
                                <select className="form-select" id="typeProperty" defaultValue=''
                                aria-label="Type Property" onChange={(e) => {
                                  setTypeProperty(e.target.value)
                                } }>
                                                <option value='' disabled>یک مورد انتخاب کنید</option>
                                                <option value="safetyequipment">تجهیزات ایمنی</option>
                                                <option value="airportequipment">تجهیزات فرودگاهی</option>
                                                <option value="electronicfurniture">اثاثه الکترونیکی</option>
                                                <option value="officefurniture">اثاثه اداری</option>
                                                <option value="facilityfurniture">اثاثه تاسیساتی</option>
                                                <option value="airportfurniture">اثاثه فرودگاهی</option>
                                                <option value="digitalfurniture">اثاثه دیجیتالی</option>
                                                <option value="airportvehicle">خودرو فرودگاهی</option>
                                                <option value="officevehicle">خودرو اداری</option>
                                                <option value="noneindustrialtool">ابزار آلات غیر صنعتی</option>
                                                <option value="industrialtool">ابزار آلات صنعتی</option>
                                                <option value="supportitem">اقلام پشتیبانی</option>
                                                <option value="benefit">امتیازات</option>
                                </select>
                                <label htmlFor="typeProperty">نوع اموال</label>
                        </div>
                    </div>
                        </div>
                <div className= 'm-4 table-responsive text-nowrap rounded-3' style={{maxHeight : '37vh'}}>
                    <table className="table table-hover table-fixed text-center align-middle table-striped table-bordered border-primary" style={{direction:'rtl'}}>
                         <thead className= 'bg-light'>
                            <tr>
                                {(() => {
                                    if (typeProperty === 'airportequipment'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام تجهیزات</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال ساخت</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">مالکیت</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'safetyequipment'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام تجهیزات</th>
                                                <th scope="col">مورد استفاده</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'digitalfurniture'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'electronicfurniture'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'officefurniture'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل استفاده</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'facilityfurniture'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'airportfurniture'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام اثاث</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">محل نصب</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'airportvehicle' || typeProperty === 'officevehicle' ){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام خودرو</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">پلاک</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">شماره موتور</th>
                                                <th scope="col">شماره شاسی</th>
                                                <th scope="col">سال ساخت</th>
                                                <th scope="col">مالکیت</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'noneindustrialtool'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام ابزار</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'industrialtool'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نام ابزار</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">سال</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'supportitem'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نوع قلم</th>
                                                <th scope="col">نام اقلام</th>
                                                <th scope="col">مدل</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col">یوزر</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }else if (typeProperty === 'benefit'){
                                        return (
                                           <Fragment>
                                                <th scope="col">ردیف</th>
                                                <th scope="col">کد ثبت</th>
                                                <th scope="col">نوع خط</th>
                                                <th scope="col">مکان استفاده</th>
                                                <th scope="col">شماره</th>
                                                <th scope="col"></th>
                                           </Fragment>
                                        )
                                    }
                                })()}

                            </tr>
                         </thead>
                        <tbody>
                             {(() => {
                                    if (typeProperty === 'airportequipment'){
                                        return (
                                          (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                           <tr key={data.code}>
                                                <th scope="row">{i}</th>
                                                <td>{data.code}</td>
                                                <td>{data.name}</td>
                                                <td>{data.model}</td>
                                                <td>{data.year_made}</td>
                                                <td>{data.user}</td>
                                                <td>{data.owner}</td>
                                                <td>{data.install_location}</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                    <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                </td>
                                           </tr>
                                             )))
                                        )
                                    }else if (typeProperty === 'safetyequipment'){
                                        return (
                                          (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                            <tr key={data.code}>
                                                <th scope="row">{i}</th>
                                                <td>{data.code}</td>
                                                <td>{data.name}</td>
                                                <td>{data.use_for}</td>
                                                <td>{data.user}</td>
                                                <td>{data.install_location}</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                    <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                </td>
                                            </tr>
                                                     )))
                                        )
                                    }else if (typeProperty === 'digitalfurniture'){
                                        return (
                                          (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                            <tr key={data.code}>
                                                <th scope="row">{i}</th>
                                                <td>{data.code}</td>
                                                <td>{data.name}</td>
                                                <td>{data.model}</td>
                                                <td>
                                                    <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                            setTypeDigital(data.type_furniture)
                                                            setTypeCommunication(data.name)
                                                        }}>info</button>
                                                    <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                </td>
                                            </tr>
                                                     )))
                                        )
                                    }else if (typeProperty === 'electronicfurniture'){
                                        return (
                                          (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.model}</td>
                                                    <td>{data.year_buy}</td>
                                                    <td>{data.user}</td>
                                                    <td>{data.install_location}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                             )))
                                        )
                                    }else if (typeProperty === 'officefurniture'){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.year_made}</td>
                                                    <td>{data.user}</td>
                                                    <td>{data.using_location}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }else if (typeProperty === 'facilityfurniture'){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.model}</td>
                                                    <td>{data.year_buy}</td>
                                                    <td>{data.user}</td>
                                                    <td>{data.install_location}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }else if (typeProperty === 'airportfurniture'){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.year_buy}</td>
                                                    <td>{data.install_location}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }else if (typeProperty === 'airportvehicle' || typeProperty === 'officevehicle' ){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.model}</td>
                                                    <td>{data.plate4} / {data.plate3} - {data.plate2} - {data.plate1}</td>
                                                    <td>{data.user}</td>
                                                    <td>{data.motor}</td>
                                                    <td>{data.chassis}</td>
                                                    <td>{data.year_made}</td>
                                                    <td>{data.owner}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined'  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }else if (typeProperty === 'noneindustrialtool'){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.user}</td>
                                                    <td>{data.year_buy}</td>
                                                    <td>{data.using_location}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }else if (typeProperty === 'industrialtool'){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.model}</td>
                                                    <td>{data.year_buy}</td>
                                                    <td>{data.using_location}</td>
                                                    <td>{data.user}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }else if (typeProperty === 'supportitem'){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.type_item}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.model}</td>
                                                    <td>{data.using_location}</td>
                                                    <td>{data.user}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }else if (typeProperty === 'benefit'){
                                        return (
                                           (property.length > 0 && property.filter(property => property.inventory === message).map((data,i) => (
                                                <tr key={data.code}>
                                                    <th scope="row">{i}</th>
                                                    <td>{data.code}</td>
                                                    <td>{data.number_type}</td>
                                                    <td>{data.using_location}</td>
                                                    <td>{data.number}</td>
                                                    <td>
                                                        <button className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                            setEditStatus(true)
                                                            setIdNumber(data.code)
                                                        }}>info</button>
                                                        <button className='btn btn-danger material-symbols-outlined ms-2'>
                                                            close</button>
                                                        <button className='btn btn-success material-symbols-outlined ms-2'>
                                                            done</button>
                                                    </td>
                                                </tr>
                                           )))
                                        )
                                    }
                                })()}
                    </tbody>
                </table>
            </div>
        </div>
    </Fragment>
    )
}
export default PendingProperty;