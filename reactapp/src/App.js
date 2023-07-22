import Signup from "./components/Signup"
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
function App() {
  return (
    <BrowserRouter>
      <Routes>
       
          <Route path='/user/signup' element={<Signup />}></Route>
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;