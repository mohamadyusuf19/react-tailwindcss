import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json.Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};
