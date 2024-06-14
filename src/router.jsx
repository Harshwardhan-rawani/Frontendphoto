import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import Login from './component/Login';
import Signup from './component/Signup';
import Forgot from './component/Forgot';
import Uploadprofile from './component/Uploadprofile';
import Photo from './component/Photo';
import Video from './component/Video';
import Files from './component/Files';
import Name from './component/Name';
import Uploadphoto from './component/Uploadphoto';
import Uploadvideo from "./component/Uploadvideo"
import Uploadfiles from './component/Uploadfiles';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <><Login /></> },
      { path: '/forgot', element: <><Forgot /></> },
      { path: '/photo', element: <><Name/><Photo /></> },
      { path: '/video', element: <><Name/><Video /></> },
      { path: '/files', element: <><Name/><Files/></> },
      { path: '/uploads', element: <><Uploadprofile /></> },
      { path: '/uploadphoto', element: <><Uploadphoto /></> },
      { path: '/uploadvideo', element: <><Uploadvideo /></> },
      { path: '/uploadfile', element: <><Uploadfiles /></> },
      { path: '/signup', element: <><Signup /></> },
      { path: '*', element: <div className='font-bold xl:text-4xl md:text-2xl text-xl h-screen w-screen flex justify-center items-center'><div>404 Not Found</div></div> },
     
    ],
  },
]);