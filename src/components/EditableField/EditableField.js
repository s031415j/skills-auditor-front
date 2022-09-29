import React, { useState } from "react";

const EditableField = ({className, value, isEditing, onChange}) => {
    console.log(value);

    return(
    
    <>
    {isEditing? <input defaultValue={value} onChange={onChange}></input> : <p className={className}>{value}</p>}
    </>

        
    );
  };

  export default EditableField;

