import Register from "./components/Register";
import RecoverPassword from "./components/RecoverPassword";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import useToken from "./components/useToken";
import Dashboard from "./components/Dashboard/Dashboard";

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenSring = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenSring);
  return userToken?.token;
}

const App = () => {
  const token = getToken();
  // const {token, setToken} = useToken();
  if(!token) {
    return <><p>hallo</p></>
  }


  return (
      <div className="App">
        <h1>Main page</h1>
        {/* <p>{sessionStorage.getItem('token')}</p> */}
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/password" element={<RecoverPassword />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
          </Routes>
        </Router>
      </div>
  );
};

export default App;