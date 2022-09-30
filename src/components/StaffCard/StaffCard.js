import React, { useState } from "react";
import "./StaffCard.css";
import EditableField from "../EditableField/EditableField";

const StaffCard = (props) => {console.log(props)
  const [isEditing, setIsEditing] = useState(false);

  const [staffToEdit, setStaffToEdit] = useState();

  const onEdit = () => {
    setIsEditing(true);
    setStaffToEdit(props.staff);
  };

  const onChange = (fieldToUpdate, newValue) => {
    setStaffToEdit({ ...staffToEdit, [fieldToUpdate]: newValue.target.value });
  };

  const onSubmit = () => {

    props.updateStaff(staffToEdit);
    setIsEditing(false);
  };

  return (
    <div className="staff-card" key={props.staff.id}>
      <div className="top-section">
        <div className="edit-container">
          <img
            className="edit-icon icon"
            src={`/images/edit-icon.png`}
            alt="edit-icon"
            onClick={onEdit}
          />
        </div>
        <div className="profile-pic">
          <img
            className="profile-pic"
            src={`/images/default-profile.png`}
            alt={props.staff.id}
          />
        </div>
        <div className="staff-info">
          <EditableField
            className="staff-name"
            value={`${props.staff.firstname}`}
            isEditing={isEditing}
            onChange={(value) => onChange("firstname", value)}
          />
          <EditableField className="staff-name" value={`${props.staff.surname}`}
            isEditing={isEditing}
            onChange={(value) => onChange("surname", value)}/>
          <EditableField className="staff-name" value={`${props.staff.jobRole}`}
            isEditing={isEditing}
            onChange={(value) => onChange("jobRole", value)}/>
        </div>
      </div>

      <div className="bottom-section">
        <div className="staff-contact-info">
          <div className="email-section">
            <img
              className="card-icon icon"
              src={`/images/email-icon.png`}
              alt="email-icon"
            />
            <EditableField className="staff-name" value={`${props.staff.email}`}
            isEditing={isEditing}
            onChange={(value) => onChange("email", value)}/>
          </div>
          <div className="phone-section">
            <img
              className="card-icon icon"
              src={`/images/phone-icon.png`}
              alt="phone-icon"
            />
            <EditableField className="staff-name" value={`${props.staff.phoneNumber}`}
            isEditing={isEditing}
            onChange={(value) => onChange("phoneNumber", value)} />
          </div>
        </div>
        <button onClick={onSubmit}>Save</button>
      </div>
    </div>
  );
};

export default StaffCard;
