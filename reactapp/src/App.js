//import Login from "./components/Login/Login";
import Signup from "./components/Signup";
/*
import Adminnavigation from "./components/AdminPage/Adminnavigation/Adminnavigation";
import Admindashboard from "./components/AdminPage/Admindashboard/Admindashboard";
import Admincandidates from "./components/AdminPage/Admincandidates/Admincandidates";
import EditOpening from "./components/AdminPage/EditOpening/EditOpening";
import EditProfile from "./components/AdminPage/EditProfile/EditProfile";

import Customernavigation from "./components/CustomerPage/Customernavigation/Customernavigation";
import Customerdashboard from "./components/CustomerPage/Customerdashboard/Customerdashboard";
import CustomeraddJob from "./components/CustomerPage/Customeraddjob/Customeraddjob";
import Customerviewappliedjobs from "./components/CustomerPage/Customerviewappliedjobs/Customerviewappliedjobs";

import Jobseekernavigation from "./components/JobseekerPage/Jobseekernavigation/Jobseekernavigation";
import Jobseekerdashboard from "./components/JobseekerPage/Jobseekerdashboard/Jobseekerdashboard";
import Jobseekerappliedjob from "./components/JobseekerPage/Jobseekerappliedjob/Jobseekerappliedjob";
import Jobseekerapplyjob from "./components/JobseekerPage/Jobseekerapplyjob"
*/
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        
        <Route path='/user/signup' element={<Signup />}></Route>
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
