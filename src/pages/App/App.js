import "./App.css";
import StaffPage from "../Staff/StaffPage";
import NavBar from "../NavBar/NavBar";
import AddStaff from "../AddStaff/AddStaffPage";
import RemoveStaff from "../RemoveStaff/RemoveStaffPage";
import { Routes, Route } from "react-router-dom";
import staffRecordsFromJson from "../../Staff/staffRecords.json";
import React, { useState, useEffect } from "react";

function App() {
	const [staffRecords, setStaffRecords] = useState([]);

	const addStaff = (staff) => {
		setStaffRecords([...staffRecords, staff]);
	};

	const removeStaff = (staffId) => {
		let newStaffRecords = staffRecords.filter(function (staff) {
			return staff.id !== staffId;
		});
		setStaffRecords([...newStaffRecords]);
	};

	useEffect(() => {
		console.log("app is mounted");
		setStaffRecords(staffRecordsFromJson);
	}, []);

	return (
		<React.Fragment>
			<NavBar />
			<div className="container">
				<Routes>
					<Route
						path="/directory"
						element={<StaffPage staffRecords={staffRecords} />}
					/>
					<Route
						path="/addStaff"
						element={
							<AddStaff
								staffRecords={staffRecords}
								addStaff={addStaff}
							/>
						}
					/>
					<Route
						path="/removeStaff"
						element={
							<RemoveStaff
								staffRecords={staffRecords}
								removeStaff={removeStaff}
							/>
						}
					/>
				</Routes>
			</div>
		</React.Fragment>
	);
}

export default App;
