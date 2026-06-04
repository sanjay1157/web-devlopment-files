import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { setRole } from './roleSlice';
import { loginSuccess, loginFailure, logout } from './authSlice';

function RoleButtons() {
  const dispatch = useDispatch();
  const selectedRole = useSelector((state) => state.role.selectedRole);
  const authState = useSelector((state) => state.auth);

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleClick = (role) => {
    dispatch(setRole(role));
  };

  const handleLogin = () => {
    if (userId === 'sunny' && password === '1234') {
      dispatch(loginSuccess('fake-token'));
      alert('Login successful!');
    } else {
      dispatch(loginFailure('Invalid credentials'));
      alert('Redirecting to signup...');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Select Role</h1>
      <button onClick={() => handleRoleClick('Employee')}>Employee</button>
      <button onClick={() => handleRoleClick('HR')}>HR</button>
      <button onClick={() => handleRoleClick('Admin')}>Admin</button>
      <button onClick={() => handleRoleClick('Manager')}>Manager</button>

      {selectedRole && (
        <div style={{ marginTop: '20px' }}>
          <h2>{selectedRole} Login</h2>
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {authState.isAuthenticated && (
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <RoleButtons />
    </Provider>
  );
}
