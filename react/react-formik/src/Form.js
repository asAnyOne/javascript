import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      amount: 0,
      currency: "",
      text: "",
      terms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "minimal count  of symbols should be equal 3")
        .required("required fields"),
      email: Yup.string()
        .email("wrong format email")
        .required("required fields"),
      amount: Yup.number()
        .min(5, "minimal number is 5")
        .required("requered fields"),
      currency: Yup.string().required("choose one of the currency"),
      text: Yup.string().min(10, "minimal count of symbols should be equal 10"),
      terms: Yup.boolean()
        .required("need consent")
        .oneOf([true], "need consent"),
    }),
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  const attributes = (name) => {
    return {
      value: formik.values[name],
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      id: [name],
      name: [name],
    };
  };
  const validationCondition = (name) => {
    return formik.errors[name] && formik.touched[name] ? (
      <div className="error">{formik.errors[name]}</div>
    ) : null;
  };

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <h2>Отправить пожертвование</h2>
      <label htmlFor="name">Ваше имя</label>
      <input type="text" {...attributes("name")} />
      {validationCondition("name")}
      <label htmlFor="email">Ваша почта</label>
      <input type="email" {...attributes("email")} />
      {validationCondition("email")}
      <label htmlFor="amount">Количество</label>
      <input type="number" {...attributes("amount")} />
      {validationCondition("amount")}
      <label htmlFor="currency">Валюта</label>
      <select {...attributes("currency")}>
        {validationCondition("currency")}
        <option value="">Выберите валюту</option>
        <option value="USD">USD</option>
        <option value="UAH">UAH</option>
        <option value="RUB">RUB</option>
      </select>
      <label htmlFor="text">Ваше сообщение</label>
      <textarea {...attributes("text")} />
      {validationCondition("text")}
      <label className="checkbox">
        <input type="checkbox" {...attributes("terms")} />
        Соглашаетесь с политикой конфиденциальности?
      </label>{" "}
      {validationCondition("terms")}
      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
