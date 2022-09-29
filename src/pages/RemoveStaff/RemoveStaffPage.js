import React, { useState } from "react";
import staffRecords from "../../Staff/staffRecords.json";
import StaffList from "../../components/StaffList/StaffList";
import "./RemoveStaffPage.css";

const RemoveStaffPage = (props) => {
	const [staffId, setStaffId] = useState("");
	const [staffList] = useState(staffRecords);

	return (
		<div className="remove-staff-page">
			<div className="remove">
				<input
					id="remove-input"
					value={staffId}
					placeholder="Enter staff id"
					onChange={(e) => setStaffId(e.target.value)}
				/>
				<img
					className="minus-icon icon"
					src={`/images/minus-icon.png`}
					alt="minus-icon"
					onClick={() => props.removeStaff(staffId)}
				/>
			</div>
			<StaffList staffList={staffList}/>
		
		</div>
	);
};

export default RemoveStaffPage;
