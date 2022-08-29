import { v4 as key } from "uuid";
import { useHttp } from "../../hooks/http.hook";
import { heroCreated, heroesFetchingError } from "../../actions";
import { useDispatch } from "react-redux";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();
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
  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input required type="text" name="name" className="form-control" id="name" placeholder="Как меня зовут?" />
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
          <option value="fire">Огонь</option>
          <option value="water">Вода</option>
          <option value="wind">Ветер</option>
          <option value="earth">Земля</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
