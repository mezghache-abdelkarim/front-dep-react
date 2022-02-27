import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screens/HomeScreen';
import SpecialityScreen from './screens/SpecialityScreen';
import OrientationLicence from './component/Orientation/OrientationLicence';
import OrientationMaster from './component/Orientation/OrientationMaster'
import SignUp from './component/authentication/SignUp'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='Speciality' element={<SpecialityScreen />} />
          <Route path='Orientation'>
            <Route path='Licence' element={<OrientationLicence />} />
            <Route path='Master' element={<OrientationMaster />} />
          </Route>
          <Route path='inscription' element={<SignUp />} />
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
