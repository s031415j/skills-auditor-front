import React from "react";

const EditableField = ({className, value, isEditing, onChange}) => {

    return(
    
    <>
    {isEditing? <input className="edit-field" defaultValue={value} onChange={onChange}></input> : <p className={className}>{value}</p>}
    </>

        
    );
  };

  export default EditableField;

