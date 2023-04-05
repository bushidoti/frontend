import React, {Fragment} from "react";
export const ContactUS =  () => {
    return (
        <Fragment>
            <div className='justify-content-center row  rounded-2'>
                     <div className= 'div-contact rounded-end   shadow-lg col-5 '>
                         <div className='m-4'>
                         <div className='d-flex gap-4'>
                              <div className="col-5 form-floating mb-3">
                                    <input type="text" className="form-control" id="name"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="name">نام کامل</label>
                                     <div className="invalid-feedback">
                                         نام پیمانکار را وارد کنید.
                                     </div>
                                </div>
                               <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="name"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="name">آدرس ایمیل</label>
                                     <div className="invalid-feedback">
                                         نام پیمانکار را وارد کنید.
                                     </div>
                                </div>
                             </div>
                              <div className="col form-floating mb-3">
                                    <input type="text" className="form-control" id="name"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="name">موضوع</label>
                                     <div className="invalid-feedback">
                                         نام پیمانکار را وارد کنید.
                                     </div>
                                </div>
                             <div className="col form-floating mb-3">
                                    <textarea className="form-control h-50" id="name"
                                           placeholder="name@example.com" required/>
                                        <label htmlFor="name">توضیحات</label>
                                     <div className="invalid-feedback">
                                         نام پیمانکار را وارد کنید.
                                     </div>
                                </div>

                                 <button type="submit" className="btn  btn-success mt-2">ارسال پیغام</button>

                              <hr className='bg-primary my-5'/>
                             <div className='d-flex'>

                             <div className="d-flex align-items-center m-4">
                                     <span className="material-symbols-outlined">call</span><a className=' text-decoration-none link-dark ms-2' href="tel://09226496505">09226496505</a>
                             </div>
                             <div className="d-flex align-items-center m-4">
                                     <span className="material-symbols-outlined">mail</span><a className=' text-decoration-none link-dark ms-2' href="mailto:titanxl79@gmail.com">titanxl79@gmail.com</a>
                             </div>

                             </div>

                     </div>
                 </div>
            </div>



        </Fragment>
    )
}