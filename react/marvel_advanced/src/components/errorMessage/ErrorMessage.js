import err from "./404.gif";

const ErrorMessage = () => {
  return (
    <img
      src={err}
      alt="error"
      style={{
        display: "block",
        height: 300,
        width: 400,
        objectFit: "contain",
        margin: "0 auto",
      }}
    />
  );
};
export default ErrorMessage;
