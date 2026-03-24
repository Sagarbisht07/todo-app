import React, { useEffect, useMemo, useState } from "react";
import "./style.scss";
import useFetchHook from "../Hooks/useFetchHook";
import useDebouncedHook from "../Hooks/useDebounce";

const HookUsed = () => {
  const url = "https://fakestoreapi.com/products";
  const [searchKeyword, setSearchKeyword] = useState("");
  const { data, loading } = useFetchHook({ url });

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.category?.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  }, [data, searchKeyword]);

  return (
    <>
      <div className="search_wrapper">
        <label className="search_label">Search category wise</label>
        <input
          className="input_box"
          placeholder="enter category"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        ></input>
      </div>

      <div>{loading && "loading..."}</div>
      <div className="data-card_wrapper">
        {filteredData?.map((item) => (
          <div key={item.id} className="data-card">
            <div>
              <span>{item?.title}</span>{" "}
              <span
                style={{
                  color: "#034dbc",
                }}
              >{`(${item?.category})`}</span>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default HookUsed;
