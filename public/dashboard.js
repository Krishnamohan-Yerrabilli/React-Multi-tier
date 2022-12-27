import React from 'react';
import './dashboard.css';
import { useHistory } from 'react-router-dom';

function Dashboard() {
  const history = useHistory();

  const handleLogout = () => {
    fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          history.push('/');
        }
      });
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
