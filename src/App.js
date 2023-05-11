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


function App() {
    const [isRepair , setIsRepair] = useState('')
    const [modalTitle , setModalTitle] = useState('')
    const [isAuth, setIsAuth] = useState(false);

    /*مدیریت اسناد*/
        const [propertyToggle , setPropertyToggle ] = useState(null)
        const [searchProp , setSearchProp] = useState('')

         const handleFormPropertyreport = (e) => {
            handleFormProperty(e);
            setSearchProp('')
            document.getElementById("searchSelector").selectedIndex = "0";
                 };
        const handleFormProperty = (e) => {
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
                <Route path="/" element={<NavBar isAuth={isAuth} setIsAuth={setIsAuth}/>} >
                    {isAuth ?
                        <Fragment>
                          <Route path="report" element={<Report handleForm={handleFormReport} docToggle={docToggle} handleEditDocument={handleEditDocument} editDocument={editDocument} setSearch={setSearch} search={search}/>}/>
                          <Route path="main" element={<Main modalTitle={modalTitle} setModalTitle={setModalTitle} handleForm={handleForm} docToggle={docToggle}/>} />
                          <Route path="upload" element={<UploadDocuments/>} />
                          <Route path="addpropertydoc" element={<AddPropertyDoc handleFormProp={handleFormProperty} propToggle={propertyToggle} modalTitle={modalTitle} setModalTitle={setModalTitle}/>} />
                          <Route path="addIndividualsDoc" element={<AddIndividualsDoc modalTitle={modalTitle} setModalTitle={setModalTitle}/>}/>
                          <Route path="reportindividualsdoc" element={<ReportIndividualsDoc handleEditDocumentIndividuals={handleEditDocumentIndividuals} editDocumentIndividuals={editDocumentIndividuals}/>}/>
                          <Route path="reportpropertydoc" element={<ReportPropertyDoc  search={searchProp} handleFormPropertyreport={handleFormPropertyreport} setSearch={setSearchProp}  propToggle={propertyToggle} handleEditProperty={handleEditProperty} editProperty={editProperty} />} />
                          <Route path="uploadindividualsdoc" element={<UploadIndividualsDoc />} />
                          <Route path="uploadpropertydoc" element={<UploadPropertyDoc />} />
                          <Route path="warehouse" element={<WarHouse modalTitle={modalTitle} setModalTitle={setModalTitle} />} />
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

export function CustomInputDate({ openCalendar, value ,disabled , label})  {
  return (
       <div className=" form-floating mb-3 ">
                <input  className="form-control" id="datePicker"
                  placeholder="1379/08/09"
                  onFocus={openCalendar}
                  value={value}
                  disabled={disabled}
                />
                <div className="invalid-feedback">

                </div>
                <label htmlFor="datePicker">{label}</label>
        </div>
  )
}