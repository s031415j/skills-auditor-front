import React, { useState } from "react";
import "./AddStaffFields.css";

const AddStaffFields = (props) => {
	const [staffList, setStaff] = useState(props.staffList);
	const [firstNameValue, setFirstNameValue] = useState("");
	const [surnameValue, setSurnameValue] = useState("");
	const [jobRoleValue, setJobRoleValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");

	const handleAddButtonClick = () => {
		const newStaffMember = {
			firstname: firstNameValue,
			surname: surnameValue,
			jobRole: jobRoleValue,
			email: emailValue,
			phoneNumber: phoneValue,
		};

		const newStaff = [...staffList, newStaffMember];

        setStaff(newStaff);
        setFirstNameValue('');
        setSurnameValue('');
        setJobRoleValue('');
        setEmailValue('');
        setPhoneValue('');

		props.addStaff(newStaffMember);
    };

	return (
		<div className="add-staff-container">
			<div className="input-container">
				<input
					className="user-input first-name-input"
					value={firstNameValue}
					onChange={(event) => setFirstNameValue(event.target.value)}
					placeholder="First name..."
				/>
				<input
					className="user-input"
					value={surnameValue}
					onChange={(event) => setSurnameValue(event.target.value)}
					placeholder="Surname..."
				/>
				<input
					className="user-input"
					value={jobRoleValue}
					onChange={(event) => setJobRoleValue(event.target.value)}
					placeholder="Job role..."
				/>
				<input
					className="user-input"
					value={emailValue}
					onChange={(event) => setEmailValue(event.target.value)}
					placeholder="Email..."
				/>
				<input
					className="user-input"
					value={phoneValue}
					onChange={(event) => setPhoneValue(event.target.value)}
					placeholder="Phone number..."
				/>
			</div>
			<div className="plus-button">
				<img
					className="plus-icon icon"
					src={`/images/plus-icon.png`}
					alt="plus-icon"
					onClick={() => handleAddButtonClick()}
				/>
			</div>
		</div>
	);
};

export default AddStaffFields;
