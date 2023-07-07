import React, {Fragment, useEffect, useState} from "react";
import NavBar from "./Components/navigationBar/navBar";
import Main from "./Components/main/documentManagment/main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
import {Context} from "./context";

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
       <Fragment>
        <Context.Provider value={{
            permission:permission,
            modalTitle:modalTitle,
            setEditDocument:setEditDocument,
            setModalTitle:setModalTitle,
            editDocument:editDocument,
            formik:formikDocumentSearch,
            isAuth:isAuth,
            setIsAuth:setIsAuth,
            office:office,
            setDocToggle:setDocToggle,
            docToggle:docToggle,
            setEditDocumentIndividuals:setEditDocumentIndividuals,
            handleEditDocument:handleEditDocument,
            handleEditDocumentIndividuals:handleEditDocumentIndividuals,
            editDocumentIndividuals:editDocumentIndividuals,
            formikPersonalSearch:formikPersonalSearch,
            handleProduct:handleProduct,
            formikProductSearch:formikProductSearch,
            formikPropertySearch:formikPropertySearch,
            setEditProperty:setEditProperty,
            handleEditProperty:handleEditProperty,
            editProperty:editProperty,
            propertyToggle:propertyToggle,
           }}>
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar/>} >
                    {isAuth ?
                        <Fragment>
                            {permission === 'مدیر' ?
                                <Route path="admin" element={<Redirect />} />
                            : null}
                            {permission === 'مدیر' || permission === 'اداری' || permission === 'مشاهده' ?
                                <Fragment>
                                    {permission === 'مدیر' || (permission === 'اداری' && office === 'دفتر مرکزی') || permission === 'مشاهده' ?
                                        <Fragment>
                                        <Route path="report" element={<Report handleForm={handleFormReport}
                                                  setSearch={setSearch} search={search}/>}/>
                                        <Route path="main" element={<Main handleForm={handleForm}/>} />
                                        <Route path="upload" element={<UploadDocuments/>}/>
                                        <Route path="addIndividualsDoc" element={<AddIndividualsDoc/>}/>
                                       <Route path="reportindividualsdoc"
                                              element={<ReportIndividualsDoc/>}/>
                                       <Route path="uploadindividualsdoc" element={<UploadIndividualsDoc/>}/>
                                        </Fragment>
                                    : null}
                                    {permission === 'مدیر' || permission === 'اداری' ?
                                        <Fragment>
                                            <Route path="addpropertydoc"
                                                   element={<AddPropertyDoc handleFormProp={handleFormProperty}/>}/>
                                            <Route path="reportpropertydoc"
                                                   element={<ReportPropertyDoc search={searchProp}
                                                               handleFormPropertyreport={handleFormPropertyreport}
                                                               setSearch={setSearchProp}/>}/>
                                            <Route path="uploadpropertydoc" element={<UploadPropertyDoc/>}/>
                                        </Fragment>
                                    : null}
                                        </Fragment>
                                : null}
                            {permission === 'مدیر' || permission === 'انباردار' ?
                                <Fragment>
                                    <Route path="warehouse" element={<WarHouse/>}/>
                                    <Route path="property" element={<Property/>}/>
                                    <Route path="report-properties" element={<ReportProperty />} />
                                </Fragment>
                            : null}

                            {permission === 'مدیر' ?
                          <Route path="warehouse-handling" element={<StorageHandling/>} />
                                : null}
                          <Route path="pending-products" element={<PendingProperty/>} />
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
                        </Context.Provider>
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