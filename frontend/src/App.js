import Register from "./components/Register";
import RecoverPassword from "./components/RecoverPassword";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import useToken from "./components/useToken";
import Dashboard from "./components/Dashboard/Dashboard";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenSring = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenSring);
//   return userToken?.token;
// }

function useToken() {
  let pair = []
  const getToken = () => {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.access
  };

  const [token, setToken] = useState(getToken());

  // funckcja ustawia token w local storage i zarazem ustawia go jako stan komponentu
  function saveToken(userToken) {
      localStorage.setItem('token', JSON.stringify(userToken));
      setToken(userToken.access);
  };


  pair.push(token, saveToken);
  return pair;
}

const App = () => {
  // const token = getToken();
  const [token, setAccessToken] = useToken();

  // useEffect(() => {

  // }, [token])
  if (token) {
    return <><p>hallo</p></>
  }



  return (
    <div className="App">
      <h1>Main page</h1>
      {/* <p>{sessionStorage.getItem('token')}</p> */}
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password" element={<RecoverPassword />} />
          <Route path="/login" element={<Login setAccessToken={setAccessToken} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;