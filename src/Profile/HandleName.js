import React from 'react'

const HandleName = ({Data})=> {
    const showAlert=()=> alert (
        `Profil User : ${Data.fullname}`
    );
  return (
    <div>
{showAlert()}
    </div>
  )
}

export default HandleName;