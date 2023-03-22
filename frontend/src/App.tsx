import React from 'react';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';
import RecoverPassword from './Pages/Login/RecoverPassword';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    
    // <div>
    //   <Register />
    // </div>
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/password" element={<RecoverPassword />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
  </div>
  );
};

export default App;