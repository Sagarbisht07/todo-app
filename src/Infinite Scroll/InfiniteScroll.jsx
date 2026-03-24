import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [more, setMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      console.log("~", target);
      if (target.isIntersecting && more && !loading) {
        setPage((prev) => prev + 1);
      }
    });

    const current = loaderRef.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [loading, more]);

  async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";

    if (loading || !more) return;

    setLoading(true);

    const res = await fetch(`${url}?_page=${page}&_limit=5`);
    const apiData = await res.json();

    setData((prev) => [...prev, ...apiData]);

    if (apiData?.length === 0) {
      setMore(false);
    }
    setLoading(false);
  }

  //   use effect for fetch data
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <div className="postContainer">
        {data.map((item) => (
          <div className="postCard" key={item?.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>

      <div ref={loaderRef} className="loader">
        {loading && "Loading..."}
      </div>
    </div>
  );
};

export default InfiniteScroll;
