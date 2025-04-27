import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import userinfo from './userinfo.json';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (inputId, inputPass) => {
    if (inputId === userinfo.id && inputPass === userinfo.password) {
      console.log('ログイン成功');
      setIsLoggedIn(true);
      setUserName(inputId);
    } else {
      alert('IDまたはパスワードが違います');
    }
  };

  const handleLogout = () => {
    console.log('ログアウトしました');
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <Router>
      <Header userName={userName} /> {}
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <MenuPage onLogout={handleLogout} userName={userName} />
            ) : (
              <LoginPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/page1"
          element={isLoggedIn ? <Page1 /> : <Navigate to="/" />}
        />
        <Route
          path="/page2"
          element={isLoggedIn ? <Page2 /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer /> {}
    </Router>
  );
}

export default App;
