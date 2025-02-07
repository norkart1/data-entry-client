import React, { useEffect, useState } from "react";
import { getData } from "./api";
import Form from "./components/Form";
import DataList from "./components/DataList";

function App() {
  const [dataList, setDataList] = useState([]);

  const fetchData = async () => {
    setDataList(await getData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <Form fetchData={fetchData} />
      <DataList dataList={dataList} />
    </div>
  );
}

export default App;
