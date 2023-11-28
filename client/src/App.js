import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import axios from 'axios'
import UserForm from './components/UserForm.js'
import AdminPage from './components/AdminPage.js'
import Error from './components/Error.js'

function App() {
  axios.defaults.baseURL = 'http://localhost:5555'

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserForm/>}/>
          <Route path="admin" element={<AdminPage/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
    </BrowserRouter>
    
  )
}
export default App;
