import React, { useState, useEffect } from "react";
import AddStaffFields from "../../components/AddStaff/AddStaffFields";
import "./AddStaffPage.css";
import StaffList from "../../components/StaffList/StaffList";

const AddStaffPage = (props) => {
	return (
		<div className="add-staff-page">
			<AddStaffFields
				staffList={props.staffRecords}
				addStaff={props.addStaff}
			/>

			<StaffList
				staffList={props.staffRecords}
				updateStaff={props.updateStaff}
			/>
		</div>
	);
};

export default AddStaffPage;
