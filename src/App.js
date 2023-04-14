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


function App() {

    const [modalTitle , setModalTitle] = useState('')

    /*مدیریت اسناد*/
        const [propertyToggle , setPropertyToggle ] = useState()
        const handleFormProperty = (e) => {
            if(e.target.value === 'منقول') {
             setPropertyToggle(false)
            }
            else if (e.target.value === 'غیر منقول') {
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

    const [docToggle , setDocToggle ] = useState(true)
    const [editDocument , setEditDocument ] = useState(false)

    const handleEditDocument = () => {
         setEditDocument(true)
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
      <BrowserRouter>
         <Fragment >
        <Routes>
            <Route path="/" element={<NavBar/>} >
                      <Route path="report" element={<Report handleForm={handleForm} docToggle={docToggle} handleEditDocument={handleEditDocument} editDocument={editDocument}/>}/>
                      <Route path="main" element={<Main modalTitle={modalTitle} setModalTitle={setModalTitle} handleForm={handleForm} docToggle={docToggle}/>}  />
                      <Route path="upload" element={<UploadDocuments/>} />
                      <Route path="contactus" element={<ContactUS />} />
                      <Route path="addpropertydoc" element={<AddPropertyDoc handleFormProp={handleFormProperty} propToggle={propertyToggle} modalTitle={modalTitle} setModalTitle={setModalTitle}/>} />
                      <Route path="addIndividualsDoc" element={<AddIndividualsDoc modalTitle={modalTitle} setModalTitle={setModalTitle}/>}/>
                      <Route path="reportindividualsdoc" element={<ReportIndividualsDoc handleEditDocumentIndividuals={handleEditDocumentIndividuals} editDocumentIndividuals={editDocumentIndividuals}/>}/>
                      <Route path="reportpropertydoc" element={<ReportPropertyDoc handleFormProp={handleFormProperty} propToggle={propertyToggle} handleEditProperty={handleEditProperty} editProperty={editProperty} />} />
                      <Route path="uploadindividualsdoc" element={<UploadIndividualsDoc />} />
                      <Route path="uploadpropertydoc" element={<UploadPropertyDoc />} />
                      <Route path="*" element={<Page404 />} />
            </Route>
        </Routes>
         </Fragment>
      </BrowserRouter>

  );
}
export default App;

export function CustomInputDate({ openCalendar, value, handleValueChange ,disabled , label})  {
  return (
       <div className=" form-floating mb-3 ">
                <input type="text" className="form-control" id="datePicker"
                  placeholder="1379/08/09" required
                  onFocus={openCalendar}
                  value={value}
                  onChange={handleValueChange}
                  disabled={disabled}
                />
                <div className="invalid-feedback">

                </div>
                <label htmlFor="datePicker">{label}</label>
        </div>
  )
}