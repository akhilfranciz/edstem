import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import SignUp from "./Components/SignUp/signup";
import Home from "./Components/Home/home";
import CourseDetail from "./Components/Home/detailsPage";
import { Toaster } from "react-hot-toast";
import PrivateRoutes from "./Components/PrivateRoutes/privateRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          {/* <Route path="Home" element={<Home response={response} />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/details" element={<CourseDetail />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
