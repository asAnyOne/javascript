import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Formm = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        amount: 0,
        currency: "",
        text: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(2, "minimal count  of symbols should be equal 2")
          .required("required fields"),
        email: Yup.string()
          .email("wrong format email")
          .required("required fields"),
        amount: Yup.number()
          .min(5, "minimal number is 5")
          .required("requered fields"),
        currency: Yup.string().required("choose one of the currency"),
        text: Yup.string().min(
          10,
          "minimal count of symbols should be equal 10"
        ),
        terms: Yup.boolean()
          .required("need consent")
          .oneOf([true], "need consent"),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="form">
        <h2>Отправить пожертвование</h2>
        <label htmlFor="name">Ваше имя</label>
        <Field id="name" name="name" type="text" />
        <ErrorMessage className="error" component="div" name="name" />
        <label htmlFor="email">Ваша почта</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage className="error" component="div" name="email" />
        <label htmlFor="amount">Количество</label>
        <Field id="amount" name="amount" type="number" />
        <ErrorMessage className="error" component="div" name="amount" />
        <label htmlFor="currency">Валюта</label>
        <Field id="currency" name="currency" as="select">
          <option value="">Выберите валюту</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
          <option value="RUB">RUB</option>
        </Field>
        <ErrorMessage className="error" component="div" name="currency" />
        <label htmlFor="text">Ваше сообщение</label>
        <Field id="text" name="text" as="textarea" />
        <ErrorMessage className="error" component="div" name="text" />
        <label className="checkbox">
          <Field name="terms" type="checkbox" />
          Соглашаетесь с политикой конфиденциальности?
        </label>
        <ErrorMessage className="error" component="div" name="terms" />
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default Formm;
