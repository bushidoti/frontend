import React, {Fragment, useContext} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import axios from "axios";
import Url from "../../../../config";
import Swal from "sweetalert2";

export const SupportItems = () => {
    const form = useContext(Contextform)
    let today = new Date().toLocaleDateString('fa-IR');
    const formik = useFormik({
        initialValues: {
              code: "",
              name: "",
              model: "",
              type_item: "",
              inventory: "",
              using_location: "",
              description: "",
              user: "",
              type_register: "",
            },
            enableReinitialize: true,
            });

    function refreshPages() {
        window.location.reload()
    }


    const postHandler = async () => {
           await axios.post(
            `${Url}/api/supportitem/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              model: formik.values.model,
              type_item: formik.values.type_item,
              description: formik.values.description,
              using_location: formik.values.using_location,
              inventory: form.message,
              type_register: 'ثبت اولیه',
              date: today.replaceAll('/' , '-'),
         })
           setTimeout(
                    refreshPages, 3000)
        }

    const putHandlerAutoIncrement = async () => {
           await axios.put(
            `${Url}/api/autoincrementproperty/1/`,
              {
              support_item_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.support_item_01+1 : form.autoIncrement.support_item_01,
              support_item_02: form.message === 'چابهار' ? form.autoIncrement.support_item_02+1 : form.autoIncrement.support_item_02,
              support_item_03: form.message === 'دزفول' ? form.autoIncrement.support_item_03+1 : form.autoIncrement.support_item_03,
              support_item_04: form.message === 'جاسک' ? form.autoIncrement.support_item_04+1 : form.autoIncrement.support_item_04,
              support_item_05: form.message === 'بیشه کلا' ? form.autoIncrement.support_item_05+1 : form.autoIncrement.support_item_05,
              support_item_06: form.message === 'اورهال تهران' ? form.autoIncrement.support_item_06+1 : form.autoIncrement.support_item_06,
              support_item_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.support_item_07+1 : form.autoIncrement.support_item_07,
         })
        }

    const postAlert = () => {
          Swal.fire({
              title: 'مطمئنید?',
              text: "آیا از ثبت این اموال مطمئنید ؟",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'انصراف',
              confirmButtonText: 'بله, ثبت کن!'
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'ثبت شد!',
                  'اموال ثبت شد.',
                  'success',
                  'ok',
                  postHandler(),
                  putHandlerAutoIncrement(),
                )
              }
            })
      }

    const handleAutoIncrement = () => {
        if (form.message === 'دفتر مرکزی') {
            return form.autoIncrement.support_item_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.support_item_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.support_item_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.support_item_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.support_item_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.support_item_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.support_item_07
        }
    }
    return(
     <form className='needs-validation' noValidate>
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="register_code" className="w-25 form-control" aria-label="register_code"
                aria-describedby="register_code" value={form.editStatus ?  form.idNumber :handleAutoIncrement() || ''} disabled required/>
                <label  htmlFor="register_code">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                      <div className="col form-floating mb-3 ">
                        <select className="form-select" id="typetools"  aria-label="Type Add" name='type_item' disabled={form.viewOnly}
                                value={form.editStatus ? form.formik.values.type_item : formik.values.type_item}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange} required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="اداری">اداری</option>
                            <option value="تاسیسات">تاسیسات</option>
                            <option value="الکترونیک">الکترونیک</option>
                            <option value="آشپزخانه">آشپزخانه</option>
                            <option value="تجهیزاتی">تجهیزاتی</option>
                            <option value="ابزارآلات">ابزارآلات</option>
                            <option value="متفرقه">متفرقه</option>
                        </select>
                        <label htmlFor="typetools">نوع قلم</label>
                           <div className="invalid-feedback">
                             نوع قلم را انتخاب کنید.
                         </div>
                    </div>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="nameTools" name='name' disabled={form.viewOnly}
                               value={form.editStatus ? form.formik.values.name : formik.values.name}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                               placeholder="فلش درایو" required/>
                            <label htmlFor="nameTools">نام اقلام</label>
                         <div className="invalid-feedback">
                             نام اقلام را وارد کنید.
                         </div>
                     </div>
                      <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="model" name='model' disabled={form.viewOnly}
                               value={form.editStatus ? form.formik.values.model : formik.values.model}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                               placeholder="تاسیسات" required/>
                            <label htmlFor="model">مدل</label>
                         <div className="invalid-feedback">
                             مدل را وارد کنید.
                         </div>
                     </div>
                </div>
                <hr className='bg-primary mb-5'/>
                <div className='d-flex col gap-2'>
                      <div className="col-2 form-floating mb-3">
                        <input type="text" className="form-control" id="user" name='user' disabled={form.viewOnly}
                               value={form.editStatus ? form.formik.values.user : formik.values.user}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                               placeholder="شرکت عقاب عسلویه" required/>
                            <label htmlFor="user">یوزر</label>
                         <div className="invalid-feedback">
                             یوزر را وارد کنید.
                         </div>
                     </div>
                        <div className="col-4 form-floating">
                            <input type="text" className="form-control" id="locationUse" name='using_location' disabled={form.viewOnly}
                                   value={form.editStatus ? form.formik.values.using_location : formik.values.using_location}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                            placeholder="شرکت" required/>
                                <label htmlFor="locationUse">محل استفاده</label>
                                <div className="invalid-feedback">
                                محل استفاده را وارد کنید.
                                </div>
                       </div>
                             <div className="col form-floating">
                                    <textarea className="form-control" id="describeRepair" name='description' disabled={form.viewOnly}
                                              value={form.editStatus ? form.formik.values.description : formik.values.description}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                                    placeholder="...." required/>
                                    <label htmlFor="describeRepair">شرح</label>
                                    <div className="invalid-feedback">
                                    شرح را وارد کنید.
                                    </div>
                       </div>
            </div>
             {form.viewOnly ? null :
                  <div className='d-flex flex-column mt-2'>
                      <button type="button" className="btn material-symbols-outlined btn-success align-self-end" onClick={postAlert}>done</button>
                 </div>
                 }

        </Fragment>
    </form>
    )
}