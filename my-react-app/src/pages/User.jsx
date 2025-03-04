import React, { useState } from "react";
import { useSelector } from "react-redux";
import Edit from '../components/Edit';
import Accounts from "../components/Account";
import '../css/main.css';

function User() {
  const [showEdit, setShowEdit] = useState(false);
  const user = useSelector((state) => state.user.user); 

  const handleEditClick = () => {
    setShowEdit(true); 
  };

  const handleCloseEdit = () => {
    setShowEdit(false); 
  };

  if (!user) {
    return <p>Loading...</p>; 
  }

  return (
    <main className="main bg-dark">
      {!showEdit && (
        <div className="header">
          <h1>Welcome back<br />{user.firstName} {user.lastName} !</h1>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
        </div>
      )}
      <div className="header">
         {showEdit && <Edit onClose={handleCloseEdit} />}
      </div>
      
      <h2 className="sr-only">Accounts</h2>
      <Accounts title='Argent Bank Checking (x8349)'amount='$2,082.79' description='Available Balance' ></Accounts>
      <Accounts title='Argent Bank Savings (x6712)' amount='$10,928.42'description='Available Balance' ></Accounts>
      <Accounts title='Argent Bank Credit Card (x8349)' amount='$184.30' description='Current Balance'></Accounts>
    </main>
  );
}

export default User;
