<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
<<<<<<< HEAD
=======
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3

>>>>>>> 9301475c74331303918272edc04a13ce1257d786
import './Customerviewappliedjobs.css';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Customerviewappliedjobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://8080-ffeefccdcaadefffdddfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/api/User/getappliedcandidates')
      .then(res => {
        if (res.data.status === 'Success') {
          console.log(res.data.result);
          setData(res.data.result);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  };
  const handleStatusChange = (id, currentStatus) => {
    let newStatus;
    let buttonText;
    let buttonColor;

    if (currentStatus === 'yes') {
      newStatus = 'no';
      buttonText = 'Rejected';
      buttonColor = 'red';
    } else if (currentStatus === 'no') {
      newStatus = 'yes';
      buttonText = 'Accepted';
      buttonColor = '#39C64D';
    } else {
      newStatus = 'yes';
      buttonText = 'Applied';
      buttonColor = 'green';
    }

    // Create a new object with the updated status and the rest of the properties from the selected item
    const updatedItem = {
      ...data.find(val => val.id === id),
      stat: newStatus,
    };

    // Send the updated item to the backend
    axios
      .put('https://8080-ffeefccdcaadefffdddfdacbbbcdfebbabfeafefcdfdfda.project.examly.io/api/User/updatestatus/' + id, updatedItem)
      .then(res => {
        if (res.data.status === 'Success') {
          // Update the state with the updated item after successful API call
          setData(prevData =>
            prevData.map(val => (val.id === id ? updatedItem : val))
          );
        } else {
          // Handle the error case
        }
      })
      .catch(err => console.log(err));
  };

  return (
<<<<<<< HEAD
=======
   <div>Customerviewappliedjobs</div>
=======
import React, { useEffect, useState } from 'react';
import './Customerviewappliedjobs.css';
import { Link, Outlet } from 'react-router-dom';
import axios from 'axios';

function Customerviewappliedjobs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('http://localhost:5131/api/User/getappliedcandidates')
      .then(res => {
        if (res.data.Status === 'Success') {
          console.log(res.data.Result);
          setData(res.data.Result);
        } else {
          alert('Error');
        }
      })
      .catch(err => console.log(err));
  };

  const handleStatusChange = (id, currentStatus) => {
    let newStatus;
    let buttonText;
    let buttonColor;

    if (currentStatus === 'yes') {
      newStatus = 'no';
      buttonText = 'Rejected';
      buttonColor = 'red';
    } else if (currentStatus === 'no') {
      newStatus = 'yes';
      buttonText = 'Accepted';
      buttonColor = '#39C64D';
    } else {
      newStatus = 'yes';
      buttonText = 'Applied';
      buttonColor = 'green';
    }

    // Update the status in the client-side state directly
    const selectedItem = data.find(val => val.id === id);
  if (!selectedItem) {
    // Handle the case when the item is not found
    console.log('Item not found');
    return;
  }

  // Create a new object with the updated status and the rest of the properties from the selected item
  const updatedItem = {
    ...selectedItem,
    stat: newStatus,
  };

  // Update the status in the client-side state
  setData(prevData =>
    prevData.map(val => (val.id === id ? updatedItem : val))
  );

  // Send the updated item to the backend
  axios
  .put('http://localhost:5131/api/User/updatestatus/'+id, updatedItem)
    .then(res => {
      if (res.data.Status === 'Success') {
        // Success, no action needed
      } else {
        // Handle the error case
      }
    })
    .catch(err => console.log(err));
};

  return (
<<<<<<< HEAD
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
    <>
      <div className='body'>
        <div><br/></div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
          <div className="container-fluid">
            <a className="navbar-brand" id='home'>Cooking Expert</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link to="/customer/dashboard" className="nav-link active" id='customerHomeButton'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/addJob" className="nav-link" id='addOpenings' aria-current="page">Add Openings</Link>
                </li>
                <li className="nav-item">
                  <Link to="/customer/viewAppliedCandidates" className="nav-link" id='appliedCandidates' aria-current="page">Applied Candidates</Link>
                </li>
              </ul>
              <Link to="/user/login">
                <a className="logout" id='logout'>Logout</a>
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
            const currentStatus = val.stat;
            const isAccepted = currentStatus === 'yes';
            const buttonText = isAccepted ? 'Accepted' : currentStatus === 'no' ? 'Rejected' : 'Applied';
            const buttonColor = isAccepted ? '#39C64D' : currentStatus === 'no' ? 'red' : 'green';

            return (
              <div className="template" key={val.personId} id="adminCandidateGrid">
                <div className="leftContainer">
                  <p>Name of Candidate: {val.personName}</p>
                  <p>Phone Number: {val.personPhone}</p>
                  <p>Year of Experience: {val.personExp}</p>
                </div>
                <div className="rightContainer">
                  <p>Address: {val.personAddress}</p>
                  <p>Email id: {val.personEmail}</p>
                </div>
                <div className="buttonContainer">
                  <button
                    style={{ backgroundColor: buttonColor }}
                    onClick={() => handleStatusChange(val.id, currentStatus)}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
<<<<<<< HEAD
<<<<<<< HEAD
          <p>No results</p>
        )}
      </div>
    </>
=======
=======
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
          <p>No results found.</p>
        )}
      </div>
    </>
<<<<<<< HEAD
>>>>>>> 6dae694a0c477cd197956f6283da6951f854b505
>>>>>>> 9301475c74331303918272edc04a13ce1257d786
=======
>>>>>>> efc3c3bab2f4f24f79222675f091d608f299fc41
>>>>>>> aea98d5d0491d31286bd7f18a3c91aa14938f9a3
  );
}

export default Customerviewappliedjobs;
