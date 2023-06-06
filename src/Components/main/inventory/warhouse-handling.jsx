import React, {Fragment, useState} from "react";
import {Product} from "./storage-prodoct/handling/product";

const StorageHandling = () => {
    const [handling , setHandling] = useState('')
    return (
        <Fragment>
        <div className= 'plater  m-2 rounded-3 shadow-lg '>
            <div className= 'd-flex justify-content-between m-4'>
                  <div className='d-flex gap-2 align-items-center'>
                                <div className="form-check">
                                    <input className="form-check-input" value='انبار' type="radio"
                                    name="flexRadioDefault" id="warehouse" onChange={(e) => setHandling(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="warehouse">
                                    انبار
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" value='اموال' type="radio" disabled
                                    name="flexRadioDefault" id="property" onChange={(e) => setHandling(e.target.value)}/>
                                    <label className="form-check-label" htmlFor="property">
                                    اموال
                                    </label>
                                </div>
                          <div className="form-floating">
                                <select className="form-select" id="branch" defaultValue=''
                                    aria-label="branch">
                                    <option value='' disabled>یک مورد انتخاب کنید</option>
                                    <option value="دفترمرکزی">دفترمرکزی</option>
                                    <option value="چابهار">چابهار</option>
                                    <option value="دزفول">دزفول</option>
                                    <option value="جاسک">جاسک</option>
                                    <option value="بیشه کلا">بیشه کلا</option>
                                    <option value="اورهال تهران">اورهال تهران</option>
                                    <option value="اورهال اصفهان">اورهال اصفهان</option>
                                </select>
                                <label htmlFor="branch">شعبه</label>
                          </div>
                        </div>
                <div className= 'd-flex gap-2'>
                <button className= 'btn btn-primary' id='handlingBtn'>انبارگردانی</button>
                </div>
            </div>
            {(() => {
                if (handling === 'انبار'){
                    return (
                        <Product/>
                    )
                }
            })()}

        </div>
        </Fragment>
    )
}
export default StorageHandling