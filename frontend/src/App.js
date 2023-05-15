import Register from "./components/Register";
import RecoverPassword from "./components/RecoverPassword";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

const App = () => {
  // const token = getToken();
  // const [token, setAccessToken] = useToken();

  // useEffect(() => {

  // }, [token])
  // if (token) {
  //   return <><p>hallo</p></>
  // }



  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<RecoverPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage/>}/>
      </Routes>
  </Router>
  </div>
  );
};

export default App;