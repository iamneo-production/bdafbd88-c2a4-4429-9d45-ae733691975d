import Signup from "./components/Signup"
<<<<<<< HEAD
=======
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
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
>>>>>>> be9cd8d03cd66e5e86919c4e8996ff1bd8456876
=======
>>>>>>> 6dae694a0c477cd197956f6283da6951f854b505
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
<<<<<<< HEAD
       
          <Route path='/user/signup' element={<Signup />}></Route>
     
=======
        <Route path='/admin' element={<Adminnavigation />}></Route>
        <Route path='/admin/getAllJobs' element={<Admindashboard />}></Route>
        <Route path='/admin/profile' element={<Admincandidates />}></Route>
        <Route path='/user/login' element={<Login />}></Route>
        <Route path='/user/signup' element={<Signup />}></Route>
        <Route path='/admin/profile/editProfile/:id' element={<EditProfile />}></Route>
        <Route path='/admin/getAllJobs/editOpening/:id' element={<EditOpening />}></Route>
        <Route path='/customer' element={<Customernavigation />}></Route>
        <Route path='/customer/dashboard' element={<Customerdashboard />}></Route>
        <Route path='/customer/addJob' element={<CustomeraddJob />}></Route>
        <Route path="/customer/viewAppliedCandidates" element={<Customerviewappliedjobs />}></Route>
        <Route path='/user' element={<Jobseekernavigation />}></Route>
        <Route path='/user/dashboard' element={<Jobseekerdashboard />}></Route>
        <Route path="/jobseeker/appliedjob" element={<Jobseekerappliedjob />}></Route>
        <Route path='/jobseeker/applyjob' element={<Jobseekerapplyjob />}></Route>

>>>>>>> be9cd8d03cd66e5e86919c4e8996ff1bd8456876
=======
       
          <Route path='/user/signup' element={<Signup />}></Route>
     
>>>>>>> 6dae694a0c477cd197956f6283da6951f854b505
      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> be9cd8d03cd66e5e86919c4e8996ff1bd8456876
=======
export default App;
>>>>>>> 6dae694a0c477cd197956f6283da6951f854b505
