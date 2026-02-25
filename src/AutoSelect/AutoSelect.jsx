import { Select } from "antd";
import React, { useEffect, useMemo, useState } from "react";

const AutoSelect = () => {
  const list = [
    { id: 1, name: "Sagar", role: "Frontend Developer" },
    { id: 2, name: "Amit", role: "Backend Developer" },
    { id: 3, name: "Neha", role: "Full Stack Developer" },
  ];

  const optionList = useMemo(
    () =>
      list.map((item) => ({
        value: item?.id,
        label: item?.name.toLocaleLowerCase(),
      })),
    [list],
  );

  const [selectedValue, setSelectedValue] = useState("");
  const [searchedKeyword, setSearchedKeyword] = useState("");

  const filterOptions = useMemo(() => {
    if (searchedKeyword?.length < 2) {
      return optionList;
    } else if (searchedKeyword?.length >= 2) {
      return optionList?.filter((item) =>
        item?.label.includes(searchedKeyword.toLocaleLowerCase()),
      );
    }
  }, [searchedKeyword, optionList]);

  return (
    <div>
      <Select
        style={{
          width: "150px",
        }}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e)}
        options={filterOptions}
        allowClear
        showSearch
        onSearch={(e) => setSearchedKeyword(e)}
        filterOption={false}
      ></Select>
    </div>
  );
};

export default AutoSelect;
