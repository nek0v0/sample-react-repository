import { useNavigate } from 'react-router-dom';

function MenuPage({ onLogout, userName }) {
  const navigate = useNavigate();

  const menuItems = [
    { title: 'ページ1', path: '/page1' },
    { title: 'ページ2', path: '/page2' },
    { title: 'ログアウト' },
  ];

  const handleMenuClick = (item) => {
    if (item.title === 'ログアウト') {
      onLogout();
    } else {
      navigate(item.path);
    }
  };

  return (
    <div className="menu-wrapper">
      <h2>メインメニュー</h2>
      {}
      <p>ようこそ、<strong>{userName}</strong>さん！</p>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="menu-card"
            onClick={() => handleMenuClick(item)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
