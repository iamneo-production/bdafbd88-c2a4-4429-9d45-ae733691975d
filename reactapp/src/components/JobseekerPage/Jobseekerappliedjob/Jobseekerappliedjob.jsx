import React, { useEffect, useState } from 'react';
import './Jobseekerappliedjob.css';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Jobseekerappliedjob() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get('https://8080-ffeefccdcaadefffdddfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/api/User/getappliedjobs')
      .then(res => {
        if (res.data.status === 'Success') {
          console.log(res.data.result);
          setData(res.data.result);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  }, []);

  // Get the current system date
  //const currentDate = new Date().toLocaleDateString();

  

const getButtonStatus = (job) => {
  if (job.stat === 'yes') {
    return {
      backgroundColor: '#39C64D',
      text: 'Accepted'
    };
  } else if (job.stat === 'no') {
    return {
      backgroundColor: 'red',
      text: 'Rejected'
    };
  } else {
    return {
      backgroundColor: 'green',
      text: 'Applied'
    };
  }
};





  return (
    <>
      <div className='body'>
        <div><br/></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
          <div className="container-fluid">
            <span className="navbar-brand" id='home'>Cooking Expert</span>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/user/dashboard" className="nav-link active" id='userHomeButton'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/jobseeker/appliedjob" className="nav-link" id='userAppliedJobs' aria-current="page">Applied Jobs</Link>
                </li>
              </ul>
              <Link to="/user/login">
                <span className="logout" id='logout'>Logout</span>
              </Link>
            </div>
          </div>
          <Outlet />
        </nav>
        <div></div>
      </div>
      <div className="templateContainer">
     
        {data.length > 0 ? (
          data.map((val) => {
            const buttonStatus = getButtonStatus(val);
            return (
              <div className="template" key={val.id} id="adminCandidateGrid">
                <div className="leftContainer">
                  <p>Job Description: {val.jobDescription}</p>
                  <p>From Date: {new Date(val.fromDate).toLocaleDateString('en-GB')}</p>
                  <p>Job Location: {val.jobLocation}</p>
                </div>
                <div className="rightContainer">
                  <p>Wage Per Day: {val.wagePerDay}</p>
                  <p>To Date: {new Date(val.toDate).toLocaleDateString('en-GB')}</p>
                  <p>Phone Number: {val.jobPhone}</p>
                </div>
                <div className="buttonContainer">
                  <button style={{ backgroundColor: buttonStatus.backgroundColor }}>{buttonStatus.text}</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
}

export default Jobseekerappliedjob;
