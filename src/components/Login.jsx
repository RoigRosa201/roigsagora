import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigation instead of useHistory

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigation hook

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      navigate('/'); // Use navigate instead of history.push
    } else {
      alert('Please enter valid credentials!');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => e.preventDefault()}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;
