import React, {Fragment, useContext} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import Url from "../../../../config";
import axios from "axios";
import Swal from "sweetalert2";

export const IndustrialEquipment = () => {
    const form = useContext(Contextform)
    let today = new Date().toLocaleDateString('fa-IR');
    const formik = useFormik({
        initialValues: {
              code: "",
              name: "",
              inventory: "",
              using_location: "",
              user: "",
              year_buy: "",
              type_register: "",
            },
            enableReinitialize: true,
            });

    function refreshPages() {
        window.location.reload()
    }


    const postHandler = async () => {
           await axios.post(
            `${Url}/api/noneindustrialtool/`,
              {
              code: handleAutoIncrement(),
              name: formik.values.name,
              user: formik.values.user,
              year_buy: formik.values.year_buy,
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
              none_industrial_tools_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.none_industrial_tools_01+1 : form.autoIncrement.none_industrial_tools_01,
              none_industrial_tools_02: form.message === 'چابهار' ? form.autoIncrement.none_industrial_tools_02+1 : form.autoIncrement.none_industrial_tools_02,
              none_industrial_tools_03: form.message === 'دزفول' ? form.autoIncrement.none_industrial_tools_03+1 : form.autoIncrement.none_industrial_tools_03,
              none_industrial_tools_04: form.message === 'جاسک' ? form.autoIncrement.none_industrial_tools_04+1 : form.autoIncrement.none_industrial_tools_04,
              none_industrial_tools_05: form.message === 'بیشه کلا' ? form.autoIncrement.none_industrial_tools_05+1 : form.autoIncrement.none_industrial_tools_05,
              none_industrial_tools_06: form.message === 'اورهال تهران' ? form.autoIncrement.none_industrial_tools_06+1 : form.autoIncrement.none_industrial_tools_06,
              none_industrial_tools_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.none_industrial_tools_07+1 : form.autoIncrement.none_industrial_tools_07,
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
            return form.autoIncrement.none_industrial_tools_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.none_industrial_tools_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.none_industrial_tools_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.none_industrial_tools_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.none_industrial_tools_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.none_industrial_tools_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.none_industrial_tools_07
        }
    }

    return(
     <form className='needs-validation' noValidate>
        <Fragment>
               <div className="form-floating justify-content-center mb-5">
                <input type="text" id="register_code" className="w-25 form-control" aria-label="register_code"
                aria-describedby="register_code" value={form.editStatus ?  form.idNumber : handleAutoIncrement() || ''} disabled required/>
                <label  htmlFor="register_code">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="nameTools" name='name' disabled={form.viewOnly}
                               value={form.editStatus ? form.formik.values.name : formik.values.name}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                               placeholder="پیچ گوشتی" required/>
                            <label htmlFor="nameTools">نام ابزار</label>
                         <div className="invalid-feedback">
                             نام ابزار را وارد کنید.
                         </div>
                     </div>
                      <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="user" name='user' disabled={form.viewOnly}
                               value={form.editStatus ? form.formik.values.user : formik.values.user}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                               placeholder="تاسیسات" required/>
                            <label htmlFor="user">یوزر</label>
                         <div className="invalid-feedback">
                             یوزر را وارد کنید.
                         </div>
                     </div>
                     <div className="col form-floating mb-3">
                        <input type="text" className="form-control" id="year" name='year_buy' disabled={form.viewOnly}
                               value={form.editStatus ? form.formik.values.year_buy : formik.values.year_buy}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                               placeholder="1400" required/>
                            <label htmlFor="year">سال خرید</label>
                         <div className="invalid-feedback">
                             سال خرید را وارد کنید.
                         </div>
                     </div>
                </div>
                <hr className='bg-primary mb-5'/>
                <div className='d-flex gap-2'>
                        <div className="col-4 form-floating">
                            <input type="text" className="form-control" id="locationUse" disabled={form.viewOnly}
                                   name='using_location' value={form.editStatus ? form.formik.values.using_location : formik.values.using_location}
                                               onChange={form.editStatus ? form.formik.handleChange : formik.handleChange}
                            placeholder="شرکت" required/>
                                <label htmlFor="locationUse">محل استفاده</label>
                                <div className="invalid-feedback">
                                محل استفاده را وارد کنید.
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