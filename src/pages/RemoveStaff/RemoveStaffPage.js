import React, { useState, useEffect } from "react";
import StaffCard from "../../components/StaffCard/StaffCard";
import "./RemoveStaffPage.css";

const RemoveStaffPage = (props) => {
	const [staffId, setStaffId] = useState("");

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

			{props.staffRecords?.length > 0 ? (
				<div className="staff-card-container">
					{props.staffRecords.map((staffMember) => (
						<StaffCard staff={staffMember} />
					))}
				</div>
			) : (
				<div className="empty">
					<h2>No staff member was found</h2>
				</div>
			)}
		</div>
	);
};

export default RemoveStaffPage;
