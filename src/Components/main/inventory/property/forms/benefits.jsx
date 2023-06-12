import React, {Fragment, useContext} from "react";
import {Contextform} from "../contextform";
import {useFormik} from "formik";
import axios from "axios";
import Url from "../../../../config";
import Swal from "sweetalert2";

export const Benefits = () => {
    const form = useContext(Contextform)
    let today = new Date().toLocaleDateString('fa-IR');
    const formik = useFormik({
        initialValues: {
              code: "",
              number_type: "",
              inventory: "",
              using_location: "",
              number: "",
              type_register: "",
            },
            enableReinitialize: true,
            });

    function refreshPages() {
        window.location.reload()
    }


    const postHandler = async () => {
           await axios.post(
            `${Url}/api/benefit/`,
              {
              code: handleAutoIncrement(),
              number_type: formik.values.number_type,
              number: formik.values.number,
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
              benefit_01: form.message === 'دفتر مرکزی' ? form.autoIncrement.benefit_01+1 : form.autoIncrement.benefit_01,
              benefit_02: form.message === 'چابهار' ? form.autoIncrement.benefit_02+1 : form.autoIncrement.benefit_02,
              benefit_03: form.message === 'دزفول' ? form.autoIncrement.benefit_03+1 : form.autoIncrement.benefit_03,
              benefit_04: form.message === 'جاسک' ? form.autoIncrement.benefit_04+1 : form.autoIncrement.benefit_04,
              benefit_05: form.message === 'بیشه کلا' ? form.autoIncrement.benefit_05+1 : form.autoIncrement.benefit_05,
              benefit_06: form.message === 'اورهال تهران' ? form.autoIncrement.benefit_06+1 : form.autoIncrement.benefit_06,
              benefit_07: form.message === 'اورهال اصفهان' ? form.autoIncrement.benefit_07+1 : form.autoIncrement.benefit_07,
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
            return form.autoIncrement.benefit_01
        } else if (form.message === 'چابهار') {
            return form.autoIncrement.benefit_02
        } else if (form.message === 'دزفول') {
            return form.autoIncrement.benefit_03
        } else if (form.message === 'جاسک') {
            return form.autoIncrement.benefit_04
        } else if (form.message === 'بیشه کلا') {
            return form.autoIncrement.benefit_05
        } else if (form.message === 'اورهال تهران') {
            return form.autoIncrement.benefit_06
        } else if (form.message === 'اورهال اصفهان') {
            return form.autoIncrement.benefit_07
        }
    }
    return(
     <form className='needs-validation' noValidate>
        <Fragment>
              <div className="form-floating justify-content-center mb-5">
                <input type="text" id="register_code" className="w-25 form-control" aria-label="register_code"
                aria-describedby="register_code" value={handleAutoIncrement()} disabled required/>
                <label  htmlFor="register_code">کد ثبت</label>
              </div>
               <div className='d-flex gap-2'>
                       <div className="col form-floating">
                        <select className="form-select" defaultValue='' id="typeLine" name='number_type' onChange={formik.handleChange} aria-label="Type Add" required>
                            <option value='' disabled>یک مورد انتخاب کنید</option>
                            <option value="سیم کارت">سیم کارت</option>
                            <option value="ثابت">ثابت</option>
                        </select>
                        <label htmlFor="typeLine">نوع خط</label>
                           <div className="invalid-feedback">
                             نوع خط را انتخاب کنید.
                         </div>
                    </div>
                        <div className="col-4 form-floating">
                            <input type="text" className="form-control" id="locationUse" name='using_location' onChange={formik.handleChange}
                            placeholder="شرکت" required/>
                                <label htmlFor="locationUse">محل استفاده</label>
                                <div className="invalid-feedback">
                                محل استفاده را وارد کنید.
                                </div>
                       </div>
                      <div className="col form-floating">
                        <input type="text" className="form-control" id="number" name='number' onChange={formik.handleChange}
                               placeholder="تاسیسات" required/>
                            <label htmlFor="number">شماره</label>
                         <div className="invalid-feedback">
                             شماره را وارد کنید.
                         </div>
                     </div>
                </div>
              <div className='d-flex flex-column mt-2'>
                      <button type="button" className="btn material-symbols-outlined btn-success align-self-end" onClick={postAlert}>done</button>
              </div>
        </Fragment>
    </form>
    )
}