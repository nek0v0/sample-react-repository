function Header({ userName }) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">Sample App</h1>
        {userName && <div className="user-info">ログイン中: {userName}</div>}
      </div>
    </header>
  );
}

export default Header;
