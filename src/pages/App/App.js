import "./App.css";
import StaffPage from "../Staff/StaffPage";
import NavBar from "../NavBar/NavBar";
import HomePage from "../Home/HomePage";
import { Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
    <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/directory" element={<StaffPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
