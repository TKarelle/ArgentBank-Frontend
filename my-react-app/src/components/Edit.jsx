import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername } from "../redux/actions/userActions"; 
import { API_BASE_URL } from "../api/apiConfig";

function Edit({ onClose }) {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [userName, setUsername] = useState(user?.userName || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); 


  useEffect(() => {
    if (user) {
      setUsername(user.userName); 
    }
  }, [user]);

  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    

    if (userName.trim() === "") {
      setErrorMessage("Le nom d'utilisateur ne peut pas être vide.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
 
      if (!token) {
        console.error("Token is missing or invalid");
        return;
      }
  
      const response = await fetch(`${API_BASE_URL}/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
        
      });

      if (response.ok) {
        const data = await response.json();
        const updatedUsername = data.body.userName;
        console.log('username:',updatedUsername);
        dispatch(updateUsername(updatedUsername));
        setErrorMessage(""); 
        onClose();
      }
    } catch (error) {
      setErrorMessage("Une erreur est survenue lors de la mise à jour du nom d'utilisateur.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Edit user info</h2>
      <form onSubmit={handleSubmitUsername}>
        <div className="edit-input">
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            id="username"
            value={userName || ""}
            onChange={(event) => setUsername(event.target.value)}
            disabled={isLoading} 
            autoComplete="username"
          />
        </div>
        <div className="edit-input">
          <label htmlFor="firstname">First name:</label>
          <input type="text" id="firstname" defaultValue={user?.firstName} disabled />
        </div>
        <div className="edit-input">
          <label htmlFor="lastname">Last name:</label>
          <input type="text" id="lastname" defaultValue={user?.lastName} disabled />
        </div>
        <div className="div-button">
          <button type="submit" className="edit-button button" disabled={isLoading}>
            {isLoading ? "Enregistrement..." : "Save"}
          </button>
          <button type="button" className="edit-button button" onClick={onClose} disabled={isLoading}>
            Cancel
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default Edit;
