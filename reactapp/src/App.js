<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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
import Customeraddjob from "./components/CustomerPage/Customeraddjob/Customeraddjob";
import Customerviewappliedjobs from "./components/CustomerPage/Customerviewappliedjobs/Customerviewappliedjobs";

import Jobseekernavigation from "./components/JobseekerPage/Jobseekernavigation/Jobseekernavigation";
import Jobseekerdashboard from "./components/JobseekerPage/Jobseekerdashboard/Jobseekerdashboard";
import Jobseekerappliedjob from "./components/JobseekerPage/Jobseekerappliedjob/Jobseekerappliedjob";
import Jobseekerapplyjob from "./components/JobseekerPage/Jobseekerapplyjob"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin' element={<Adminnavigation />}></Route>
        <Route path='/admin/getAllJobs' element={<Admindashboard />}></Route>
        <Route path='/admin/profile' element={<Admincandidates />}></Route>
        <Route path='/user/login' element={<Login />}></Route>
        <Route path='/user/signup' element={<Signup />}></Route>
        <Route path='/admin/profile/editProfile/:id' element={<EditProfile />}></Route>
        <Route path='/admin/getAllJobs/editOpening/:id' element={<EditOpening />}></Route>
        <Route path='/customer' element={<Customernavigation />}></Route>
        <Route path='/customer/dashboard' element={<Customerdashboard />}></Route>
        <Route path='/customer/addjob' element={<Customeraddjob />}></Route>
        <Route path="/customer/viewAppliedCandidates" element={<Customerviewappliedjobs />}></Route>
        <Route path='/user' element={<Jobseekernavigation />}></Route>
        <Route path='/user/dashboard' element={<Jobseekerdashboard />}></Route>
        <Route path="/jobseeker/appliedjob" element={<Jobseekerappliedjob />}></Route>
        <Route path='/jobseeker/applyjob' element={<Jobseekerapplyjob />}></Route>

      </Routes>
    </BrowserRouter>
>>>>>>> 3868786571311965569708dc95f392e1a6d586b5
  );
}

export default App;
