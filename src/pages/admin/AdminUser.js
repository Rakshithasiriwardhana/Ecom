import React, { useContext } from "react";
import { UserContext } from "../../contex/UserContext";
import "./AdminUser.css"; 

function AdminUser() {
  const { users } = useContext(UserContext);

  return (
    <div className="admin-user-container">
      <h2 className="admin-user-title">Admin Users</h2>
      <div className="admin-user-list">
        {users.map((user) => (
          <div key={user.id} className="admin-user-item">
            <img src={user.avatar} alt={user.name} className="admin-user-avatar" />
            <div className="admin-user-details">
              <h3 className="admin-user-name">{user.name}</h3>
              <p className="admin-user-email">{user.email}</p>
              <h2 className="admin-user-role">{user.role}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUser;
