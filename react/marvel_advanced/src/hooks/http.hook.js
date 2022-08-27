import { useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState("waiting");

  const request = async (
    url,
    method = "GET",
    body = null,
    header = { "Content-Type": "application/json" }
  ) => {
    setLoading(true);
    setProcess("loading");

    try {
      const respons = await fetch(url, { method, body, header });

      if (!respons.ok) {
        throw new Error(
          console.log(`Could not fetch ${url} status ${respons.status}`)
        );
      }
      const data = await respons.json();

      setLoading(false);

      return data;
    } catch (e) {
      setLoading(false);
      setError(true);
      setProcess("error");
      throw e;
    }
  };

  const clearError = () => setError(null);

  return { loading, error, clearError, request, process, setProcess };
};
export default useHttp;
