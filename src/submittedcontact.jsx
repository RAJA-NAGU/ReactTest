import React from "react";

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' 

function Submittedcontact() {
  const entries = useSelector(state => state.contact.entries)
  const navigate = useNavigate() 

  function handleRowClick(entry,index) {
  console.log(entry.id,entry)
    navigate(`/submittedcontact/${index+1}`) 
  }
  return (
    <div>
      <h2 style={{fontSize:"30px",marginBottom:"20px",textAlign:"center"}}>Submitted Contacts</h2>
      <table className="uc-table">
        <thead>
          <tr>
            <th>SL.No</th>
            <th>Contact Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {
        entries.map((entry, index) => (
          <tr key={entry.id} onClick={() => handleRowClick(entry,index)} >
            <td>{index+1}</td>
            <td>{entry.name}</td>
            <td>{entry.email}</td>
          </tr> )) }
        </tbody>
      </table>
    </div>
  );
}

export default Submittedcontact;
