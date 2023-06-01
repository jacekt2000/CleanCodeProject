import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import RecoverPassword from "./components/Auth/RecoverPassword"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/password" element={<RecoverPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={} /> */}
        </Routes>
      </Router>

    </div>
  );
};

export default App;