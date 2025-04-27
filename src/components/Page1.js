import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page1() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { id: 1, name: '山田 太郎', email: 'taro@example.com' },
    { id: 2, name: '佐藤 花子', email: 'hanako@example.com' },
    { id: 3, name: '鈴木 次郎', email: 'jiro@example.com' },
  ]);

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div className="page-container">
      <h2>ユーザー一覧</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>（{user.email}）
            <br />
            <button onClick={() => handleDelete(user.id)}>削除</button>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>メニューに戻る</button>
    </div>
  );
}

export default Page1;
