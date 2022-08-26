import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    name,
    salary,
    increase,
    like,
    onDelete,
    onToggleIncrease,
    onToggleLike,
  } = props;
  let className = "list-group-item  d-flex justify-content-between";

  if (increase) {
    className = className + " increase";
  }
  if (like) {
    className = className + " like";
  }

  return (
    <li className={className}>
      <span onClick={onToggleLike} className="list-group-item-label">
        {name}
      </span>
      <input
        type="text"
        defaultValue={`${salary} $`}
        className="list-group-item-input"
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn-cookie btn-sm"
          type="button"
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button className="btn-trash btn-sm" type="button" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
