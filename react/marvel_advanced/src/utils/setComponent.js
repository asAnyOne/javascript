import Spinner from "../components/spinner/Spinner";
import Skeleton from "../components/skeleton/Skeleton";
import ErrorMessage from "../components/errorMessage/ErrorMessage";

const setComponent = (process, Component, data) => {
  switch (process) {
    case "waiting":
      return <Skeleton />;
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data={data} />;
    case "error":
      return <ErrorMessage />;
    default:
      throw new Error("Process is failed!");
  }
};
export default setComponent;
