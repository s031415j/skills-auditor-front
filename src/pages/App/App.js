import "./App.css";
import StaffPage from "../Staff/StaffPage";
import NavBar from "../NavBar/NavBar";
import AddStaff from "../AddStaff/AddStaffPage";
import RemoveStaff from "../RemoveStaff/RemoveStaffPage";
import { Routes, Route } from "react-router-dom";
import staffRecordsFromJson from "../../Staff/staffRecords.json";
import React, { useState, useEffect } from "react";

function App() {
	// const [staffRecords, setStaffRecords] = useState([]);
	const [staffList, setStaffList] = useState(staffRecordsFromJson);

	const addStaff = (staff) => {
		setStaffList([...staffList, staff]);
	};

	const updateStaff = (index, newValue) => {
		const staffListCopy = [...staffList];
		staffListCopy.splice(index, 1, newValue);
		setStaffList(staffListCopy);
	  };

	const removeStaff = (staffId) => {
		let newStaffRecords = staffList.filter((staff) => {
			return staff.id !== staffId;
		});
		setStaffList([...newStaffRecords]);
	};

	useEffect(() => {
		console.log("Staff members set");
		setStaffList(staffRecordsFromJson);
	}, []);

	return (
		<React.Fragment>
			<NavBar />
			<div className="container">
				<Routes>
					<Route
						path="/directory"
						element={<StaffPage staffRecords={staffList} updateStaff={updateStaff} />}
					/>
					<Route
						path="/addStaff"
						element={
							<AddStaff
								staffRecords={staffList}
								addStaff={addStaff}
								updateStaff={updateStaff}
							/>
						}
					/>
					<Route
						path="/removeStaff"
						element={
							<RemoveStaff
								staffRecords={staffList}
								removeStaff={removeStaff}
								updateStaff={updateStaff}
							/>
						}
					/>
				</Routes>
			</div>
		</React.Fragment>
	);
}

export default App;
