import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import HomePageHeader from './component/HomePageHeader';
import AffichageTable from './component/AffichageTable';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <HomePageHeader/>
        <AffichageTable/>

          
    </div>
  );
}

export default App;
