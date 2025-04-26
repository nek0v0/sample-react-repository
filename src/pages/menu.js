import { useNavigate } from "react-router-dom";

function Menu({ onLogout }) {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center" }}>メニュー画面</h1>

      {/* タイルを並べるエリア */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>
        {/* タイル1 */}
        <div
          onClick={() => navigate("/page1")}
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.2)"
          }}
        >
          ページ1
        </div>

        {/* タイル2 */}
        <div
          onClick={() => navigate("/page2")}
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.2)"
          }}
        >
          ページ2
        </div>
      </div>

      {/* ログアウトボタン */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={onLogout}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}

export default Menu;
