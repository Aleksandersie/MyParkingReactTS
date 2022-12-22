import React from 'react';
import './App.css';
import AuthPage from "./pages/AuthPage";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {

  return (
      <>

        <Routes>
            <Route path='/' element={<AuthPage/>}/>
          <Route path='/main' element={<MainPage/>}/>

        </Routes>

      </>

  );
}

export default App;
