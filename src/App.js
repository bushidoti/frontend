import React, {Fragment, useEffect, useState} from "react";
import NavBar from "./Components/navigationBar/navBar";
import Main from "./Components/main/documentManagment/main";
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Report from "./Components/main/documentManagment/report";
import UploadDocuments from "./Components/main/documentManagment/uploadDocument/upload";
import {Page404} from "./Components/Page404/404Page";
import {ContactUS} from "./Components/contatUs/contactUs";
import AddPropertyDoc from "./Components/main/properManagement/propertyDocuments/addpropertydoc";
import AddIndividualsDoc from "./Components/main/properManagement/documentIndividuals/addindividualsdoc";
import ReportIndividualsDoc from "./Components/main/properManagement/documentIndividuals/reportindividualsdoc";
import ReportPropertyDoc from "./Components/main/properManagement/propertyDocuments/reportpropertydoc";
import UploadIndividualsDoc from "./Components/main/properManagement/documentIndividuals/uploadindividualsdoc";
import UploadPropertyDoc from "./Components/main/properManagement/propertyDocuments/uploadpropertydoc";
import WarHouse from "./Components/main/inventory/storage-prodoct/main";
import Property from "./Components/main/inventory/property/main";
import ReportProperty from "./Components/main/inventory/property/report";
import StorageHandling from "./Components/main/inventory/warhouse-handling";
import {Logout} from "./Components/navigationBar/login/logout";
import ToastLogin from "./Components/navigationBar/login/toast";
import {Page403} from "./Components/page403/403Page";
import {useFormik} from "formik";
import Home from "./Components/home/home";
import axios from "axios";
import PendingProperty from "./Components/main/inventory/property/pending_property";
import Url from "./Components/config";


function App() {
    const [modalTitle , setModalTitle] = useState('')
    const [isAuth, setIsAuth] = useState(false);
    const [permission, setPermission] = useState('');
    const [office, setOffice] = useState('');


    const formikDocumentSearch = useFormik({
            initialValues: {
                  employer: '',
                  dateContract: '',
                  typeContract: '',
                  clearedStatus: '',
                  topicContract: '',
                  id: '',
                  contractNumber: '',
            },
            enableReinitialize: true,
        });

    const formikPropertySearch = useFormik({
            initialValues: {
                  name: '',
                  docNumber: '',
                  landlord: '',
                  madeOf: '',
                  plateMotor: '',
                  id: '',
                  typeProperty: '',
                  part1plate: '',
                  part2plate: '',
                  part3plate: '',
                  cityPlate: '',
                  addressChassis: '',
                  modelMeter: '',
                  descriptionLocation: '',
                  soldStatus: '',
            },
            enableReinitialize: true,
        });

      const formikProductSearch = useFormik({
            initialValues: {
                  code: '',
                  name: '',
                  category: '',
                  date: '',
                  consumable: '',
                  inventory: '',
                  recycle_status: '',
                  operator: '',
            },
            enableReinitialize: true,
        });

     const handleProduct = () => {
            formikProductSearch.resetForm()
            document.getElementById("searchSelector").selectedIndex = "0";
         };

    const formikPersonalSearch = useFormik({
            initialValues: {
                  id: '',
                  full_name: '',
                  national_id: '',
                  type: '',
                  sex: '',
                  office: '',
                  job: '',
                  date: '',
                  clearedStatus: '',
            },
            enableReinitialize: true,
        });
    /*مدیریت اسناد*/
        const [propertyToggle , setPropertyToggle ] = useState(null)
        const [searchProp , setSearchProp] = useState('')

         const handleFormPropertyreport = (e) => {
            formikPropertySearch.resetForm()
            handleFormProperty(e);
            setSearchProp('')
            document.getElementById("searchSelector").selectedIndex = "0";
                 };
        const handleFormProperty = (e) => {
            formikPropertySearch.resetForm()
            if(e.target.value === 'منقول') {
             setPropertyToggle(false)
            } else if (e.target.value === 'غیر منقول') {
             setPropertyToggle(true)
            }
                 };
        const [editProperty , setEditProperty ] = useState(false)

        const handleEditProperty = () => {
         setEditProperty(true)
         };
    /*پایان مدیریت اسناد*/





      /*مدیریت مدارک اشخاص*/

        const [editDocumentIndividuals , setEditDocumentIndividuals ] = useState(false)

        const handleEditDocumentIndividuals = () => {
         setEditDocumentIndividuals(true)
         };


       /*پایان مدیریت مدارک اشخاص*/




    /*مدیریت قرارداد*/

    const [docToggle , setDocToggle ] = useState(null)
    const [editDocument , setEditDocument ] = useState(false)
    const [search , setSearch] = useState('')

    const handleEditDocument = () => {
        setEditDocument(true)
         };


    const handleFormReport = (e) => {
        handleForm(e)
        setSearch('')
        document.getElementById("searchSelector").selectedIndex = "0";
    };

       useEffect(() => {
            (async () => {
                const {data} = await (await axios.get(`${Url}/permission/`, {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
              }));
              setPermission(data.message);
        })()
    }, []);
     useEffect(() => {
            (async () => {
                const {data} = await (await axios.get(`${Url}/home/`, {
                headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token'),
                }
              }));
              setOffice(data.message);
        })()
    }, []);
    const handleForm = (e) => {
        formikDocumentSearch.resetForm()
        if(e.target.value === 'پیمانکار') {
         setDocToggle(false)
        }
        else if (e.target.value === 'کارفرما') {
         setDocToggle(true)
        }
    };
    /*پایان مدیریت قرارداد*/

    function Redirect() {
          useEffect(() => {
            const timeout = setTimeout(() => {
              // 👇️ redirects to an external URL
              window.location.replace('https://api.oghab-asaluyeh.ir/admin/');
            }, 1000);

            return () => clearTimeout(timeout);
          }, []);

          return <>تغییر مسیر در 1 ثانیه ....</>;
        }

  return (
       <Fragment >
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar isAuth={isAuth} setDocToggle={setDocToggle} office={office} permission={permission} formik={formikDocumentSearch} setIsAuth={setIsAuth}/>} >
                    {isAuth ?
                        <Fragment>
                            {permission === 'مدیر' ?
                                <Route path="admin" element={<Redirect />} />
                            : null}
                            {permission === 'مدیر' || permission === 'اداری' || permission === 'مشاهده' ?
                                <Fragment>
                                    {permission === 'مدیر' || (permission === 'اداری' && office === 'دفتر مرکزی') || permission === 'مشاهده' ?
                                        <Fragment>
                                        <Route path="report" element={<Report handleForm={handleFormReport} setEditDocument={setEditDocument} modalTitle={modalTitle} formik={formikDocumentSearch} docToggle={docToggle} setModalTitle={setModalTitle} handleEditDocument={handleEditDocument} editDocument={editDocument} setSearch={setSearch} search={search}/>}/>
                                        <Route path="main" element={<Main modalTitle={modalTitle} permission={permission} formik={formikDocumentSearch} setEditDocument={setEditDocument} handleEditDocument={handleEditDocument} editDocument={editDocument} setModalTitle={setModalTitle} handleForm={handleForm} docToggle={docToggle}/>} />
                                        <Route path="upload" element={<UploadDocuments/>}/>
                                        <Route path="addIndividualsDoc" element={<AddIndividualsDoc setEditDocumentIndividuals={setEditDocumentIndividuals}
                                            handleEditDocumentIndividuals={handleEditDocumentIndividuals}
                                            editDocumentIndividuals={editDocumentIndividuals}
                                            formik={formikPersonalSearch} modalTitle={modalTitle}
                                            setModalTitle={setModalTitle}/>}/>
                                       <Route path="reportindividualsdoc"
                                              element={<ReportIndividualsDoc formik={formikPersonalSearch} setEditDocumentIndividuals={setEditDocumentIndividuals}
                                              modalTitle={modalTitle} setModalTitle={setModalTitle}
                                              handleEditDocumentIndividuals={handleEditDocumentIndividuals}
                                              editDocumentIndividuals={editDocumentIndividuals}/>}/>
                                       <Route path="uploadindividualsdoc" element={<UploadIndividualsDoc/>}/>
                                        </Fragment>
                                    : null}
                                    {permission === 'مدیر' || permission === 'اداری' ?
                                        <Fragment>
                                            <Route path="addpropertydoc"
                                                   element={<AddPropertyDoc formik={formikPropertySearch}
                                                                            handleEditProperty={handleEditProperty}
                                                                            setEditProperty={setEditProperty}
                                                                            editProperty={editProperty}
                                                                            handleFormProp={handleFormProperty}
                                                                            propToggle={propertyToggle}
                                                                            modalTitle={modalTitle}
                                                                            setModalTitle={setModalTitle}/>}/>


                                            <Route path="reportpropertydoc"
                                                   element={<ReportPropertyDoc modalTitle={modalTitle}
                                                                               setModalTitle={setModalTitle}
                                                                               setEditProperty={setEditProperty}
                                                                               formik={formikPropertySearch}
                                                                               search={searchProp}
                                                                               handleFormPropertyreport={handleFormPropertyreport}
                                                                               setSearch={setSearchProp}
                                                                               propToggle={propertyToggle}
                                                                               handleEditProperty={handleEditProperty}
                                                                               editProperty={editProperty}/>}/>
                                            <Route path="uploadpropertydoc" element={<UploadPropertyDoc/>}/>
                                        </Fragment>
                                    : null}
                                        </Fragment>
                                : null}
                            {permission === 'مدیر' || permission === 'انباردار' ?
                                <Fragment>
                                    <Route path="warehouse" element={<WarHouse formik={formikProductSearch} handleProduct={handleProduct}
                                      modalTitle={modalTitle} setModalTitle={setModalTitle}/>}/>
                                    <Route path="property" element={<Property/>}/>
                                    <Route path="report-properties" element={<ReportProperty />} />
                                </Fragment>
                            : null}

                            {permission === 'مدیر' ?
                          <Route path="warehouse-handling" element={<StorageHandling formik={formikProductSearch} handleProduct={handleProduct} modalTitle={modalTitle} setModalTitle={setModalTitle}/>} />
                                : null}
                          <Route path="pending-products" element={<PendingProperty setModalTitle={setModalTitle} modalTitle={modalTitle}/>} />
                          <Route path="/logout" element={<Logout/>}/>
                        </Fragment>
                        :
                          <Route path="*" element={<Page403 />} />
                    }
                      <Route path="contactus" element={<ContactUS />} />
                      <Route path="*" element={<Page404 />} />
                      <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
      </BrowserRouter>
           {isAuth ?
               <ToastLogin/>
                :
           null}
    </Fragment>
  );
}
export default App;

export function CustomInputDate({ openCalendar, ids , value ,disabled , label})  {
  return (
       <div className=" form-floating mb-3 ">
                <input  className="form-control" id={ids}
                  placeholder="1379/08/09"
                  onFocus={openCalendar}
                  value={value}
                  disabled={disabled}
                  style={{minWidth:'110px' , maxWidth:'20vw'}}

                  readOnly
                />
                <div className="invalid-feedback">

                </div>
                <label htmlFor={ids}>{label}</label>
        </div>
  )
}