import React, {Fragment, useEffect, useState} from "react";
import Url from "../../../../config";
import Modal from "../modal";

export const PropertyHandling = (props) => {
    const [property, setProperty] = useState([])
    const [idNumber, setIdNumber] = useState(null)
    const [typeProperty , setTypeProperty] = useState('')
    const [editStatus, setEditStatus] = useState(false)
    const [viewOnly, setViewOnly] = useState(true)
    const [typeDigital , setTypeDigital] = useState('')
    const [typeCommunication , setTypeCommunication] = useState('')

    const fetchData = async () => {
        if (typeProperty !== ''){
                const response = await fetch(`${Url}/api/${typeProperty}/`)
                const data = await response.json()
                setProperty(data)
        }
    }

    useEffect(() => {
            void fetchData()
          },
           // eslint-disable-next-line react-hooks/exhaustive-deps
        [typeProperty])

    return (
           <Fragment>
            <Modal setTypeCommunication={setTypeCommunication} typeCommunication={typeCommunication} viewOnly={viewOnly} setViewOnly={setViewOnly}  typeProperty={typeProperty} editStatus={editStatus} setEditStatus={setEditStatus} idNumber={idNumber} setIdNumber={setIdNumber} setTypeDigital={setTypeDigital} typeDigital={typeDigital}/>
                 <div className='m-4'>
                     <div className= 'd-flex gap-2  align-items-center mb-2'>
                        <div className="form-floating">
                                <select className="form-select" id="typeProperty" defaultValue=''
                                aria-label="Type Property" onChange={(e) => {
                                  setTypeProperty(e.target.value)
                                }}>
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
                    <div className="input-group mb-3">
                        <input type="text"  id='searchBox' className="form-control" placeholder='جستجو براساس کد کالا'
                        aria-label="searchBox" aria-describedby="search" />
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                    </div>
                    <div className='m-4'>
                        <span className="dot bg-danger"></span><span> به معنی جا به جا شده و قفل شده</span>
                        <span className="dot bg-warning ms-4"></span><span> به معنی ارسال شده برای تعمیر و موقتاً قفل شده</span>
                        <span className="dot bg-success ms-4"></span><span> به معنی در انتظار تایید جا به جایی در مقصد</span>
                    </div>
                </div>
                <div className='d-flex'>
                    <div className= 'm-4 table-responsive rounded-3 col' style={{maxHeight : '35vh'}}>
                          <table className="table table-hover text-center align-middle table-bordered border-primary">
                                <thead className= 'bg-light sticky-top'>
                                <tr>
                                    <th scope="col">کد</th>
                                    <th scope="col">نام</th>
                                    <th scope="col"></th>
                                    <th scope="col">نتیجه</th>
                                </tr>
                                </thead>
                                <tbody>
                                {(property.length > 0 && property.filter(product => product.inventory ===  props.inventory).map((data) => (
                                    <tr style={{backgroundColor:`${(data.movement_status === 'received' ? 'hsl(0, 100%, 80%)' : null) || (data.movement_status === 'pending' ? 'hsl(120, 59%, 70%)' : null) }`}} key={data.code}>
                                        <th scope="row">{data.code}</th>
                                        <td>{data.name || data.number}</td>
                                        <td>
                                           <button className= 'btn btn-warning material-symbols-outlined mx-2' disabled={data.movement_status === 'received'}  data-bs-toggle="modal" data-bs-target="#modalMain" onClick={() => {
                                                    setEditStatus(true)
                                                     setViewOnly(true)
                                                    setIdNumber(data.code)
                                                     setTypeDigital(data.type_furniture)
                                                     setTypeCommunication(data.name)
                                                }}>info</button>
                                        </td>
                                        <td>
                                            <div className="input-group">
                                                <input type="text"  id='resultInp' className="form-control" placeholder='نتیجه را بنویسید' disabled={data.movement_status === 'received'}
                                                aria-label="result" aria-describedby="result"/>
                                                <button className="btn btn-outline-success material-symbols-outlined" type="button" id="resultBtn" disabled={data.movement_status === 'received'}>done</button>
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