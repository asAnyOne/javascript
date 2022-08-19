import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add the new employee</h3>
      <form action="" className="add-form d-flex">
        <input
          type="text"
          placeholder="what is his(her) name?"
          className="form-control new-post-label"
        />
        <input
          type="text"
          placeholder="how much salary $?"
          className="form-control new-post-label"
        />
        <button className="btn btn-outline-light" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};
export default EmployeesAddForm;
