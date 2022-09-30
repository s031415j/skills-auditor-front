import React, { useState, useEffect } from "react";
import AddStaffFields from "../../components/AddStaff/AddStaffFields";
import "./AddStaffPage.css";
import StaffList from "../../components/StaffList/StaffList";

const AddStaffPage = (props) => {

	const [staffList, setStaffList] = useState(props.staffRecords);
    useEffect(() => {setStaffList(staffList)}, [staffList])
	
	return (
		<div className="add-staff-page">
			<AddStaffFields 
				staffRecords={staffList}
				addStaff={props.addStaff}
			/>

			<StaffList staffList={staffList} updateStaff={props.updateStaff}/>

		</div>
	);
};

export default AddStaffPage;

