import React from "react";
import StaffCard from "../../components/StaffCard/StaffCard";
import AddStaffFields from "../../components/AddStaff/AddStaffFields";
import "./AddStaffPage.css";

const AddStaffPage = (props) => {
	return (
		<div className="add-staff-page">
			<AddStaffFields
				staffRecords={props.staffRecords}
				addStaff={props.addStaff}
			/>

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

export default AddStaffPage;