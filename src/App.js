import { Routes,Route } from "react-router-dom";
import Personal from "./Component/Personal";
import Education from "./Component/Education";
import Experience from "./Component/Experience";
import FinalData from "./Component/FinalData";

export default function App()
{
  return<>
   <h1 className="alert alert-danger text-center">Nokari User Registration</h1>
   <hr/>
   <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 tect-center">
       <h4 className=" alert-primary text-center"> Personal Information </h4>
      </div>
      <div className="col-lg-3 col-md-3 tect-center">
        
        <h4 className="alert-info text-center">Education Information :</h4>
      </div>
      <div className="col-lg-3 col-md-3 tect-center">
       <h4 className="alert-primary text-center"> Experience Information :</h4>
      </div>
      <div className="col-lg-3 col-md-3 tect-center">
       <h4 className="alert-success text-center"> Final Data</h4>
      </div>
    </div>
    <hr/>
    <Routes>
      <Route path="/" element={<Personal/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/experince" element={<Experience/>}/>
      <Route path="/finalData" element={<FinalData/>}/>
    </Routes>
   </div>
  </>
}