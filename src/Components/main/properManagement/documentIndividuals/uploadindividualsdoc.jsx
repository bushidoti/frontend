import React, {Fragment, useState} from "react";

const UploadIndividualsDoc = () => {
    const [typeDocument , setTypeDocument] = useState('')
    return (
        <Fragment>
            <div className= 'plater  m-2 rounded-3 shadow-lg '>
                        <div className="form-floating m-4 col-3">
                            <select className="form-select" id="typeDocumentSelector"
                            aria-label="Floating label select example" onChange={(e) => setTypeDocument(e.target.value)}>
                                <option selected disabled>یک مورد انتخاب کنید</option>
                                <option value="شناسنامه">شناسنامه</option>
                                <option value="کارت ملی">کارت ملی</option>
                                <option value="تضمین">تضمین</option>
                                <option value="گواهی">گواهی</option>
                                <option value="بازنشستگی">بازنشستگی</option>
                            </select>
                            <label htmlFor="typeDocumentSelector">نوع مدارک</label>
                        </div>

                       <div className='m-4'>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="کد ملی"
                                aria-label="searchBoxNationalId" aria-describedby="searchDocuments"/>
                                <button className="btn btn-outline-success material-symbols-outlined" type="button" id="searchNationalIdBtn">search</button>
                            </div>

                            <div className= 'mt-5'>
                                  {(() => {
                                          if (typeDocument === 'شناسنامه'){
                                              return(
                                                    <Fragment>
                                                        <div className="input-group mb-3 align-items-center ">
                                                           <label className='me-4'>صفحه اول</label>
                                                           <button className="btn btn-outline-secondary" type="button"
                                                           id="firstPageBtn">بارگذاری
                                                           </button>
                                                           <input type="file" className="form-control" id="firstPageInp"
                                                           aria-describedby="firstPageBtn" aria-label="Upload"/>
                                                       </div>
                                                       <div className="input-group mb-3 align-items-center">
                                                           <label className='me-4'>صفحه دوم</label>
                                                           <button className="btn btn-outline-secondary" type="button"
                                                            id="secondPageBtn">بارگذاری</button>
                                                           <input type="file" className="form-control" id="secondPageInp"
                                                            aria-describedby="secondPageBtn" aria-label="Upload"/>
                                                       </div>
                                                       <div className="input-group mb-3 align-items-center">
                                                          <label className='me-4'>صفحه سوم</label>
                                                          <button className="btn btn-outline-secondary" type="button"
                                                           id="thirdPageBtn">بارگذاری</button>
                                                          <input type="file" className="form-control" id="thirdPageInp"
                                                          aria-describedby="thirdPageBtn" aria-label="Upload"/>
                                                       </div>
                                                       <div className="input-group mb-3 align-items-center">
                                                           <label className='me-4'>صفحه چهارم</label>
                                                           <button className="btn btn-outline-secondary" type="button"
                                                           id="forthPageBtn">بارگذاری</button>
                                                           <input type="file" className="form-control" id="forthPageInp"
                                                           aria-describedby="forthPageBtn" aria-label="Upload"/>
                                                       </div>
                                                    </Fragment>
                                                  )
                                         }else if (typeDocument === 'کارت ملی'){
                                                              return(
                                                                  <Fragment>
                                                                      <div className="input-group mb-3 align-items-center ">
                                                                          <label className='me-2'>پشت</label>
                                                                          <button className="btn btn-outline-secondary" type="button"
                                                                          id="backCardBtn">بارگذاری</button>
                                                                          <input type="file" className="form-control" id="backCardInp"
                                                                          aria-describedby="backCardBtn" aria-label="Upload"/>
                                                                      </div>
                                                                      <div className="input-group mb-3 align-items-center">
                                                                          <label className='me-4'>رو</label>
                                                                          <button className="btn btn-outline-secondary" type="button"
                                                                          id="frontCardBtn">بارگذاری</button>
                                                                          <input type="file" className="form-control" id="frontCardInp"
                                                                          aria-describedby="frontCardBtn" aria-label="Upload"/>
                                                                      </div>
                                                                  </Fragment>
                                                              )
                                                          }else if (typeDocument === 'تضمین'){

                                                              return(

                                                                  <Fragment>
                                                                    <div className="input-group mb-3 align-items-center ">
                                                                       <label className='me-4'>تضمین</label>
                                                                       <button className="btn btn-outline-secondary" type="button"
                                                                       id="bailFileBtn">بارگذاری</button>
                                                                       <input type="file" className="form-control" id="bailFileInp"
                                                                       aria-describedby="bailFileBtn" aria-label="Upload"/>
                                                                    </div>
                                                                  </Fragment>
                                                              )}else if (typeDocument === 'گواهی'){
                                                              return(
                                                                  <Fragment>
                                                                    <div className="input-group mb-3 align-items-center">
                                                                        <label className='me-3'>گواهی پزشکی</label>
                                                                        <button className="btn btn-outline-secondary" type="button"
                                                                        id="certificateMedicBtn">بارگذاری</button>
                                                                        <input type="file" className="form-control" id="certificateMedicInp"
                                                                        aria-describedby="certificateMedicBtn" aria-label="Upload"/>
                                                                    </div>
                                                                    <div className="input-group mb-3 align-items-center">
                                                                        <label className='me-4'>گواهی بیمه</label>
                                                                        <button className="btn btn-outline-secondary" type="button"
                                                                        id="insuranceBtn">بارگذاری</button>
                                                                        <input type="file" className="form-control" id="insuranceInp"
                                                                        aria-describedby="insuranceBtn" aria-label="Upload"/>
                                                                    </div>
                                                                    <div className="input-group mb-3 align-items-center">
                                                                        <label className='me-4'>گواهی پلیس</label>
                                                                        <button className="btn btn-outline-secondary" type="button"
                                                                        id="policeBtn">بارگذاری</button>
                                                                        <input type="file" className="form-control" id="policeInp"
                                                                        aria-describedby="policeBtn" aria-label="Upload"/>
                                                                    </div>
                                                                    <div className="input-group mb-3 align-items-center">
                                                                      <label className='me-5'>گواهینامه</label>
                                                                      <button className="btn btn-outline-secondary" type="button"
                                                                       id="driveLicenseBtn">بارگذاری</button>
                                                                      <input type="file" className="form-control" id="driveLicenseInp"
                                                                      aria-describedby="driveLicenseBtn" aria-label="Upload"/>
                                                                    </div>
                                                                  </Fragment>
                                                              )}else if (typeDocument === 'بازنشستگی'){
                                                                 return(
                                                                  <Fragment>
                                                                    <div className="input-group mb-3 align-items-center">
                                                                          <label className='me-4'>حکم بازنشستگ</label>
                                                                          <button className="btn btn-outline-secondary" type="button"
                                                                          id="retiredBtn">بارگذاری</button>
                                                                          <input type="file" className="form-control" id="retiredInp"
                                                                          aria-describedby="retiredBtn" aria-label="Upload"/>
                                                                    </div>
                                                                    <div className="input-group mb-3 align-items-center">
                                                                       <label className='me-3'>کارت بازنشستگی</label>
                                                                       <button className="btn btn-outline-secondary" type="button"
                                                                       id="retiredCardBtn">بارگذاری</button>
                                                                       <input type="file" className="form-control" id="retiredCardInp"
                                                                       aria-describedby="retiredCardBtn" aria-label="Upload"/>
                                                                    </div>
                                                                  </Fragment>
                                                                 )
                                                             }
                          })()}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default  UploadIndividualsDoc