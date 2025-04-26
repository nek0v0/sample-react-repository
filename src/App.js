import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import userinfo from "./userinfo.json";
import Menu from "./pages/menu";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (userId === userinfo.id && password === userinfo.password) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("IDまたはパスワードが違います");
    }
  };

  //logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };


  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <Route path="*" element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h1>ログイン</h1>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="text"
                  placeholder="ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="password"
                  placeholder="パスワード"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button onClick={handleLogin}>ログインする</button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          } />
        ) : (
          <>
            <Route path="/" element={<Menu onLogout={handleLogout} />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
