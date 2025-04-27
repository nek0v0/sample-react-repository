import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page2() {
  const [name, setName] = useState('');
  const [savedNames, setSavedNames] = useState([]);
  const navigate = useNavigate();

  const handleSave = () => {
    if (name.trim() === '') return;
    setSavedNames([...savedNames, name]);
    setName('');
  };

  return (
    <div className="page-container">
      <h2>名前を入力して保存</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="名前を入力してください"
      />
      <button onClick={handleSave}>保存</button>

      {savedNames.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <strong>保存された名前一覧：</strong>
          <ul>
            {savedNames.map((saved, index) => (
              <li key={index}>{saved}</li>
            ))}
          </ul>
        </div>
      )}

      <button onClick={() => navigate('/')}>メニューに戻る</button>
    </div>
  );
}

export default Page2;
