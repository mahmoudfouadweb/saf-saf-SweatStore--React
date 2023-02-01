import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(
    (url) => {
      setIsLoading(true);
      setErrorMsg(null);
      fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => {
          setIsLoading(false);
          setErrorMsg(err.message);
        });
      
      return [data, isLoading, errorMsg]
    },
    [url]
  );
};

export default useFetch;
