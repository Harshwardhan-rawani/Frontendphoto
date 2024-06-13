import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx'
import { AuthProvider } from './context/Auth.jsx';
import { ToastContainer } from 'react-toastify';
import { Authuserprovider } from './context/Authuser.jsx';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
  <Authuserprovider>
  <RouterProvider router={router} />
 
   <ToastContainer
position="top-right"
autoClose={800}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition: Bounce
/> </Authuserprovider>
   </AuthProvider>
  </React.StrictMode>,
)
