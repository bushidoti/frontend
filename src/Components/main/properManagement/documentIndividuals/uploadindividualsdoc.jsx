import React, {Fragment} from "react";

const UploadIndividualsDoc = () => {
    return (
        <Fragment>
            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                        <div className="form-floating m-4 col-3">

                                            <select className="form-select" id="searchSelect"
                                                    aria-label="Floating label select example">
                                                <option selected disabled>یک مورد انتخاب کنید</option>
                                                <option value="کارت سبز">شناسنامه</option>
                                                <option value="کارت ماشین">کارت ملی</option>
                                                <option value="کارت سوخت">تضمین</option>
                                                <option value="بیمه نامه">گواهی</option>
                                                <option value="بیمه نامه">بازنشستگی</option>
                                            </select>
                                            <label htmlFor="searchSelect">نوع مدارک</label>
                                        </div>
                           <div className='m-4'>

                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="کد ملی"
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
                                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default  UploadIndividualsDoc