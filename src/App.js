import React, {Fragment, useState} from "react";
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
import {Footer} from "./Components/footer/footer";
import ReportProperty from "./Components/main/inventory/property/report";
import {Contextform} from "./Components/main/inventory/property/contextform";
import StorageHandling from "./Components/main/inventory/warhouse-handling";
import {Logout} from "./Components/navigationBar/login/logout";
import ToastLogin from "./Components/navigationBar/login/toast";
import {Page403} from "./Components/page403/403Page";
import {useFormik} from "formik";
import Home from "./Components/home/home";


function App() {
    const [isRepair , setIsRepair] = useState('')
    const [modalTitle , setModalTitle] = useState('')
    const [isAuth, setIsAuth] = useState(false);
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

     const handleProduct = (e) => {
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
  return (
<Contextform.Provider value={{
                    isRepair:isRepair,
                    setIsRepair:setIsRepair
                }}>
       <Fragment >
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar isAuth={isAuth} setDocToggle={setDocToggle} formik={formikDocumentSearch} setIsAuth={setIsAuth}/>} >
                    {isAuth ?
                        <Fragment>
                          <Route path="report" element={<Report handleForm={handleFormReport} setEditDocument={setEditDocument} formik={formikDocumentSearch} docToggle={docToggle} handleEditDocument={handleEditDocument} editDocument={editDocument} setSearch={setSearch} search={search}/>}/>
                          <Route path="main" element={<Main modalTitle={modalTitle} formik={formikDocumentSearch} setEditDocument={setEditDocument} handleEditDocument={handleEditDocument} editDocument={editDocument} setModalTitle={setModalTitle} handleForm={handleForm} docToggle={docToggle}/>} />
                          <Route path="upload" element={<UploadDocuments/>} />
                          <Route path="addpropertydoc" element={<AddPropertyDoc formik={formikPropertySearch} handleEditProperty={handleEditProperty} editProperty={editProperty} handleFormProp={handleFormProperty} propToggle={propertyToggle} modalTitle={modalTitle} setModalTitle={setModalTitle}/>} />
                          <Route path="addIndividualsDoc" element={<AddIndividualsDoc handleEditDocumentIndividuals={handleEditDocumentIndividuals}  editDocumentIndividuals={editDocumentIndividuals} formik={formikPersonalSearch} modalTitle={modalTitle} setModalTitle={setModalTitle}/>}/>
                          <Route path="reportindividualsdoc" element={<ReportIndividualsDoc formik={formikPersonalSearch} handleEditDocumentIndividuals={handleEditDocumentIndividuals} editDocumentIndividuals={editDocumentIndividuals}/>}/>
                          <Route path="reportpropertydoc" element={<ReportPropertyDoc formik={formikPropertySearch} search={searchProp} handleFormPropertyreport={handleFormPropertyreport} setSearch={setSearchProp}  propToggle={propertyToggle} handleEditProperty={handleEditProperty} editProperty={editProperty} />} />
                          <Route path="uploadindividualsdoc" element={<UploadIndividualsDoc />} />
                          <Route path="uploadpropertydoc" element={<UploadPropertyDoc />} />
                          <Route path="warehouse" element={<WarHouse formik={formikProductSearch} handleProduct={handleProduct} modalTitle={modalTitle} setModalTitle={setModalTitle} />} />
                          <Route path="property" element={<Property />} />
                          <Route path="report-properties" element={<ReportProperty />} />
                          <Route path="warehouse-handling" element={<StorageHandling />} />
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
        <Footer/>
      </BrowserRouter>
           {isAuth ?
               <ToastLogin/>
                :
           null}
    </Fragment>
</Contextform.Provider>



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
                  readOnly
                />
                <div className="invalid-feedback">

                </div>
                <label htmlFor={ids}>{label}</label>
        </div>
  )
}