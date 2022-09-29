import React, { useState } from "react";
import AddStaffFields from "../../components/AddStaff/AddStaffFields";
import "./AddStaffPage.css";
import StaffList from "../../components/StaffList/StaffList";
import staffRecords from "../../Staff/staffRecords.json";

const AddStaffPage = (props) => {

	const [staffList, setStaffList] = useState(staffRecords);


	return (
		<div className="add-staff-page">
			<AddStaffFields
				staffRecords={staffList}
				addStaff={props.addStaff}
			/>

	<StaffList staffList={staffList}/>
		</div>
	);
};

export default AddStaffPage;

