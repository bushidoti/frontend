import React, {Fragment} from "react";
import NavBar from "./Components/navigationBar/navBar";
import Main from "./Components/main/documentManagment/main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Report from "./Components/main/documentManagment/report";
import UploadDocuments from "./Components/main/documentManagment/uploadDocument/upload";
function App() {
  return (
      <BrowserRouter>
         <Fragment>
             <NavBar/>
                <Routes>
        <Route path="main" element={<Main />}>
        </Route>
          <Route path="report" element={<Report/>} ></Route>
          <Route path="upload" element={<UploadDocuments/>} ></Route>



      </Routes>

         </Fragment>
      </BrowserRouter>

  );
}
export default App;
