import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainScreen from '../src/Pages/MainScreen';
import FirstScreen from './Pages/FirstScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FirstScreen />} /> {/* path="/" is  root route */}
          <Route path="/main" element={<MainScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;