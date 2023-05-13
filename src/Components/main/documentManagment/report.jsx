import React, {Fragment, useEffect, useState} from "react";
import Modal from "./modal";
import ObserveModal from "./uploadDocument/observemodal";
import transition from "react-element-popper/animations/transition";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import {CustomInputDate} from "../../../App";
import {Toggler} from "./toggler";

const Report = (props) => {
      const [contract, setContracts] = useState([])
      const [idNumber, setIdNumber] = useState(null)

    const fetchData = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/documents")
        const data = await response.json()
        setContracts(data)
      }
      useEffect(() => {
            fetchData()
          }, [])
    return (
        <Fragment>
            <ObserveModal/>
            <Modal editDocument={props.editDocument} docToggle={props.docToggle} idNumber={idNumber}/>

            <div className= 'plater  m-2 rounded-3 shadow-lg '>

                 <div className= 'd-flex  justify-content-between m-4' >
                                 <div className= 'd-flex gap-2'>
                                      <Toggler handleForm={props.handleForm}/>
                                      <div className="form-check ms-4">
                                      <input className="form-check-input" type="checkbox" value=""
                                      id="clearedCheck"/>
                                      <label className="form-check-label" htmlFor="clearedCheck">
                                      تسویه شده
                                      </label>
                                      </div>
                                 </div>
                            <div className= 'd-flex gap-2'>
                                <button className="btn btn-danger material-symbols-outlined " type="button" id="observeDocs"  data-bs-toggle="modal"
                                data-bs-target="#observModal">description</button>
                                <button className="btn btn-outline-secondary material-symbols-outlined " type="button" id="print">print</button>
                            </div>

                        </div>

                  <div className="form-floating m-4 col-1">
                        <select className="form-select" id="searchSelector"
                            aria-label="Search Select" onChange={(e) =>
                            props.setSearch(e.target.value)}>
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
                                 render={<CustomInputDate label='تاریخ ثبت قرارداد' />}
                                 id="datePicker"
                                 calendar={persian}
                                 range
                                 locale={persian_fa}
                             />
                              )
                            } else if (props.search === 'نوع قرارداد') {
                                    return (
                                        <div className="col-2 form-floating">
                                            <input className="form-control" type='search' list="typeContractList" id="typeContract" placeholder="اجاره"/>
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
                                             <input type="text" className="form-control" placeholder={`جستجو براساس ${props.search}`}
                                             aria-label="searchBox" id='searchBox' aria-describedby="searchBox"/>
                                             <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                                         </div>
                                    )
                                }
                        })()}
                  </div>
                {props.docToggle === null ? null :
                    <div className='m-4 table-responsive text-nowrap rounded-3' style={{maxHeight: '50vh'}}>
                        <table className="table table-hover table-fixed text-center align-middle table-striped table-bordered border-primary">
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
                            {contract.filter(contract => contract.type_form === props.docToggle).map((data, i) => (
                                <tr>
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
                            ))}

                            </tbody>
                        </table>
                    </div>
                }
            </div>


        </Fragment>

        )
}



export default Report