<<<<<<< HEAD
import Signup from "./components/Signup"
// import Applyloan from "./components/Applyloan/Applyloan";
// import "./components/Signup/Signup.css"
// import './components/Login/Login.css'
// import './components/Profile/Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import HomePage from "./components/HomePage/HomePage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Loanstatus from "./components/Loanstatus/Loanstatus";
// import Profile from "./components/Profile/Profile";
// import AdminPage from "./components/AdminPage/Admin"
// import Appliedloans from "./components/Appliedloans/Appliedloans";
// import Loanid from "./components/Loanid/Loanid";
// import Loandetails from "./components/Loandetails/Loandetails"

// import './components/Loanid/Loanid.css'
=======
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
>>>>>>> 68c33ef6a8d67ca4dd708c1bbe958082c80ab738


function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* <Route path='/' element={<Login />}></Route> */}
          {/* <Route path='/home' element={<HomePage />}></Route>
          <Route path='/admin' element={<AdminPage />}></Route>
          <Route path='/user/addLoan' element={<Applyloan />}></Route>
          <Route path='/user/viewLoan' element={<Loanstatus />}></Route>
          <Route path='/user/getProfile' element={<Profile />}></Route>
          <Route path='/user/login' element={<Login />}></Route> */}
          <Route path='/user/signup' element={<Signup />}></Route>
          {/* <Route path='/admin/getAllLoans' element={<Appliedloans />}></Route>
          <Route path='/Loanid' element={<Loanid />}></Route>
          <Route path='/Loandetails' element={<Loandetails />}></Route> */}
=======
        
        
        <Route path='/user/signup' element={<Signup />}></Route>
        
>>>>>>> 68c33ef6a8d67ca4dd708c1bbe958082c80ab738

      </Routes>
    </BrowserRouter>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 68c33ef6a8d67ca4dd708c1bbe958082c80ab738
