import React, { useState, useEffect } from "react";
import AddStaffFields from "../../components/AddStaff/AddStaffFields";
import "./AddStaffPage.css";
import staffRecords from "../../Staff/staffRecords.json";
import StaffCard from "../../components/StaffCard/StaffCard";

const AddStaffPage = (props) => {

	const [staffList, setStaffList] = useState(staffRecords);
    useEffect(() => {}, [staffList])

	const updateStaffList = (index, newValue) => {
		const staffListCopy = [...staffList];
		staffListCopy.splice(index, 1, newValue);
		setStaffList(staffListCopy);
	  };
	
	return (
		<div className="add-staff-page">
			<AddStaffFields 
				staffRecords={staffList}
				addStaff={props.addStaff}
			/>

		<>
			{staffList.length > 0 ? (
				<div className="staff-card-container">
				{staffList.map((staffMember, index) => (
					<StaffCard
					staff={staffMember}
					updateStaff={(value) => updateStaffList(index, value)}
					/>
				))}
				</div>
			) : (
				<div className="empty">
				<h2>No staff member was found</h2>
				</div>
			)}
			</>
		</div>
	);
};

export default AddStaffPage;

