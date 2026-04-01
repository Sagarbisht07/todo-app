import { Input } from "antd";
import React, { useEffect, useMemo, useRef, useState } from "react";

const Temp = () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const [searchKeyword, setSearchKeyword] = useState("");
  const [data, setData] = useState([]);
  const [tempData, setTempData] = useState([]);
  let intervalRef = useRef(null);

  async function fetchData() {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setTempData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (intervalRef.current) {
      clearTimeout(intervalRef.current);
    }
    intervalRef.current = setTimeout(() => {
      if (!searchKeyword) {
        setTempData(data);
      } else {
        const newData = data.filter((item) => item.name.toLowerCase().includes(searchKeyword.toLocaleLowerCase()));
        setTempData(newData);
      }
    }, 1300);
    return () => clearTimeout(intervalRef.current);
  }, [searchKeyword, data]);

  console.log("~ tempData", tempData);
  console.log("~ searchKeyword", searchKeyword);
  return (
    <div>
      <Input
        placeholder="search by name"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      ></Input>
      <br />
      {tempData.map((item) => (
        <div key={item.id}>
          <div>{`Name:${item.name}`}</div>
          <div>{`email:${item.email}`}</div>
          <div>{`id:${item.id}`}</div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Temp;
