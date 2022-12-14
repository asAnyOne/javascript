import { v4 as key } from "uuid";
import { useHttp } from "../../hooks/http.hook";
import { heroCreated, heroesFetchingError } from "../heroesList/heroesSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../heroesFilters/filtersSlice";

const HeroesAddForm = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();

  const optionsData = useSelector(selectAll);
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {};
    obj.id = key();
    formData.forEach((key, value) => (obj[value] = key));

    request("http://localhost:3001/heroes", "POST", JSON.stringify(obj))
      .then((hero) => dispatch(heroCreated(hero)))
      .then(() => e.target.reset())
      .catch(() => dispatch(heroesFetchingError()));
  };
  const createSelectOptions = optionsData.map(
    ({ name, label }, i) =>
      name !== "all" && (
        <option value={name} key={i}>
          {label}
        </option>
      )
  );

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="description"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select required className="form-select" id="element" name="element">
          <option>Я владею элементом...</option>
          {createSelectOptions}
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
