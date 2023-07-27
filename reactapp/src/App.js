<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6de141319ae8dd8f81da734fb204cc46bf357a8b
=======
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
>>>>>>> a18377425ba42cce6393bc76ac2d1135e8a09cbc
=======
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


function App() {
  return (
    <BrowserRouter>
      <Routes>
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

      </Routes>
    </BrowserRouter>
>>>>>>> db1ab22e0e29af77503a4c9295263d196fec9cb9
=======
>>>>>>> ad124189fbcb2d601123e9cae47b76b02520e130
=======
>>>>>>> 17f4fe67fdc53620d81a5f8dfb53bbcd54bcaaf0
  );
}

export default App;