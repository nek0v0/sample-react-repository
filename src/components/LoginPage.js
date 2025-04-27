import { useState } from 'react';

function LoginPage({ onLogin }) {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const handleClick = () => {
    onLogin(id, pass);
  };

  return (
    <div className="login-container">
      <h2>ログインページ</h2>
      <input
        type="text"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="input-field"
      />
      <br />
      <input
        type="password"
        placeholder="パスワード"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        className="input-field"
      />
      <br />
      <button onClick={handleClick} className="login-button">
        ログイン
      </button>
    </div>
  );
}

export default LoginPage;
