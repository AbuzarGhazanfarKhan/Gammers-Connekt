import { useEffect, useState } from "react";

const useDetails = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConst = new AbortController();

    fetch(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
      { signal: abortConst.signal }
    )
      .then((res) => {
        if (!res.ok) {
          // console.log(res);
          throw Error(`could not fetch the data from the resource`);
        }
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setData(data[0]);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortConst.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useDetails;
