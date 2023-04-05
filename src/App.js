import React, {Fragment} from "react";
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
  return (
      <BrowserRouter>
         <Fragment>
        <Routes>
            <Route path="/" element={<NavBar/>}>
                      <Route path="report" element={<Report/>} />
                      <Route path="main" element={<Main/>} />
                      <Route path="upload" element={<UploadDocuments/>} />
                      <Route path="contactus" element={<ContactUS />} />
                      <Route path="addpropertydoc" element={<AddPropertyDoc />} />
                      <Route path="addIndividualsDoc" element={<AddIndividualsDoc />} />
                      <Route path="reportindividualsdoc" element={<ReportIndividualsDoc />} />
                      <Route path="reportpropertydoc" element={<ReportPropertyDoc />} />
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
