

import React, {Fragment} from "react";

const UploadPropertyDoc = () => {
    return (
        <Fragment>
            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                     <div className="form-floating m-4 col-2">
                                            <select className="form-select" id="partitionSelect"
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="نام پیمانکار">منقول</option>
                                                <option value="شماره ثبت">غیر منقول</option>
                                            </select>
                                            <label htmlFor="partitionSelect">بارگذاری اسناد بخش</label>
                                        </div>
                           <div className='m-4'>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="شماره پلاک"
                           aria-label="searchBox" aria-describedby="searchDocuments"/>
                        <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchDocuments">search</button>
                </div>

                            <div className= 'mt-5'>
                               <div className="input-group mb-3 ">
                                      <label className='me-4'>فاکتور فروش</label>
                                   <button className="btn btn-outline-secondary" type="button"
                                           id="firstPageBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="firstPageInp"
                                          aria-describedby="firstPageBtn" aria-label="Upload"/>
                               </div>
                                           <div className="input-group mb-3 align-items-center">
                                              <label className='me-5'>بیمه نامه</label>

                                   <button className="btn btn-outline-secondary" type="button"
                                           id="secondPageBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="secondPageInp"
                                          aria-describedby="secondPageBtn" aria-label="Upload"/>
                               </div>
                                           <div className="input-group mb-3 align-items-center">
                                          <label className='me-4'>کارت ماشین</label>

                                   <button className="btn btn-outline-secondary" type="button"
                                           id="thirdPageBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="thirdPageInp"
                                          aria-describedby="thirdPageBtn" aria-label="Upload"/>
                               </div>
                                           <div className="input-group mb-3 align-items-center">
                                               <label className='me-5'>کارت سبز</label>
                                   <button className="btn btn-outline-secondary" type="button"
                                           id="forthPageBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="forthPageInp"
                                          aria-describedby="forthPageBtn" aria-label="Upload"/>
                               </div>
                                       <div className="input-group mb-3 align-items-center">
                                               <label className='me-4'>کارت سوخت</label>
                                   <button className="btn btn-outline-secondary" type="button"
                                           id="forthPageBtn">بارگذاری
                                   </button>
                                   <input type="file" className="form-control" id="forthPageInp"
                                          aria-describedby="forthPageBtn" aria-label="Upload"/>
                               </div>

                                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default  UploadPropertyDoc