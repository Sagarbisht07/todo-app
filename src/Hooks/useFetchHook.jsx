import React, { useEffect, useState } from "react";

const useFetchHook = ({ url, refetch = false }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(url);
    const result = await res.json();
    if (result) {
      setData(result);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [refetch, url]);

  return { data, loading };
};

export default useFetchHook;
