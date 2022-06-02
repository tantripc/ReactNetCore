import "./common.scss";

const Todo = () => {
  const data = [];
  return (
    <main id="todolist">
      <h1>
        Danh sách
        <span>Việc hôm nay không để ngày mai.</span>
      </h1>

      <li className="done">
        <span className="label">123</span>
        <div className="actions">
          <button className="btn-picto" type="button">
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="btn-picto"
            type="button"
            aria-label="Delete"
            title="Delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
      <li>
        <span className="label">123</span>
        <div className="actions">
          <button className="btn-picto" type="button">
            <i className="fas fa-user-edit"></i>
          </button>
          <button
            className="btn-picto"
            type="button"
            aria-label="Delete"
            title="Delete"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </li>
      <p>Danh sách nhiệm vụ trống.</p>

      <form>
        <label htmlFor="name">Thêm nhiệm vụ mới</label>
        <input type="text" name="name" id="name" />
        <input type="text" name="id" id="name" />
        <button type="button">Thêm mới</button>
      </form>
    </main>
  );
};

export default Todo;
