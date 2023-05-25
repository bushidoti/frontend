import React, {Fragment, useState} from "react";
import DatePicker from "react-multi-date-picker";
import transition from "react-element-popper/animations/transition";
import {CustomInputDate} from "../../../../App";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
const ObserveModal = (props) => {
  const [search , setSearch] = useState('')
  return (
      <Fragment>
         <div className="modal fade"  data-bs-backdrop="static" data-bs-keyboard="false" id="observeModal" tabIndex="-1" aria-labelledby="observeModalLabel" aria-hidden="true">
                    <div className="modal-dialog  modal-fullscreen" >
                        <div className="modal-content">
                            <div className="modal-header mx-4">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">مداد 101100</h1>
                                <button type="button" className="btn-close " data-bs-dismiss="modal"
                                aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='d-flex justify-content-between'>
                                      <div className="form-floating m-4 col-1">
                                            <select className="form-select" id="searchSelector"
                                                aria-label="Search Select" onChange={(e) =>
                                                setSearch(e.target.value)}>
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="ردیف">ردیف</option>
                                                <option value="تاریخ ثبت">تاریخ ثبت</option>
                                                <option value="مورد مصرف">مورد مصرف</option>
                                            </select>
                                            <label htmlFor="searchSelect">جستجو براساس</label>
                                      </div>
                                   <div className= 'd-flex gap-2 m-4'>
                                        <button className="btn btn-outline-secondary material-symbols-outlined h-75" type="button" id="print">print</button>
                                   </div>
                                </div>

                    <div className='m-4'>
                        {(() => {
                            if (search === 'تاریخ ثبت') {
                              return (
                                <DatePicker
                                 animations={[transition()]}
                                 render={<CustomInputDate label='تاریخ ثبت'  />}
                                 id="datePicker"
                                 calendar={persian}
                                 range
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
                                            <input className="form-control" type='search' list="consumeCauseList" id="consumeCause" placeholder="اجاره"/>
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
                                } else {
                                    return (
                                         <div className="input-group mb-3">
                                             <input type="text" className="form-control" placeholder={`جستجو براساس ${search}`}
                                             aria-label="searchBox" id='searchBox' aria-describedby="searchBox"/>
                                             <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchBtn">search</button>
                                         </div>
                                    )
                                }
                        })()}
                  </div>
                  <hr className='bg-primary m-4'/>
                  <div className= 'm-4 table-responsive rounded-3' style={{maxHeight : '50vh'}}>
                    <table className="table table-hover text-center table-striped align-middle">
                        <thead className= 'bg-light'>
                        <tr>
                            <th scope="col">ردیف</th>
                            <th scope="col">سند</th>
                            <th scope="col">شناسه سند</th>
                            <th scope="col">تاریخ</th>
                            <th scope="col">عملیات</th>
                            <th scope="col">تعداد</th>
                            <th scope="col">مورد مصرف</th>
                            <th scope="col">گروه</th>
                            <th scope="col">خریدار</th>
                            <th scope="col">گیرنده</th>
                            <th scope="col">اصلاحیه</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td></td>
                            <td>12/پ-789</td>
                            <td>1401/12/01</td>
                            <td>ثبت اولیه</td>
                            <td>10</td>
                            <td>اداری</td>
                            <td>تاسیسات</td>
                            <td>حسیت شاه محمدلو</td>
                            <td></td>
                            <td>...</td>
                            <td>
                                <button id='editBtn' className= 'btn btn-warning material-symbols-outlined' data-bs-toggle="modal" data-bs-target="#modalMain" title="ویرایش" onClick={() => props.setModalTitle('edit')}>edit</button>
                                <button id='deleteBtn' className= 'btn btn-danger   material-symbols-outlined ms-2' title="حذف" hidden={true}>delete</button>
                            </td>
                        </tr>
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