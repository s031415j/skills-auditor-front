import "./App.css";
import StaffPage from "../Staff/StaffPage";
import NavBar from "../NavBar/NavBar";
import HomePage from "../Home/HomePage";
import AddStaff from "../AddStaff/AddStaffPage";
import RemoveStaff from "../RemoveStaff/RemoveStaffPage";
import { Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
    <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/directory" element={<StaffPage />} />
          <Route path="/addStaff" element={<AddStaff />} />
          <Route path="/removeStaff" element={<RemoveStaff />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
