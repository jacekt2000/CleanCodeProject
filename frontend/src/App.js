// import React from 'react';
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/password" element={<RecoverPassword />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
  </Router>
  </div>
  );
};

export default App;