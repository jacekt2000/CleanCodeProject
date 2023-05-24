import Register from "./components/Pages/Auth/Register";
import RecoverPassword from "./components/Pages/Auth/RecoverPassword";
import Homepage from "./components/Pages/Auth/Home/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<RecoverPassword />} />
        <Route path="/login" element={<Login />} /> */}
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;