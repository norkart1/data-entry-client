import React, { useEffect, useState } from "react";
import { getData } from "../api";
import Form from "../components/Form";
import DataList from "../components/DataList";

const Home = () => {
  const [dataList, setDataList] = useState([]);

  // Fetch data from the backend
  const fetchData = async () => {
    setDataList(await getData());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to DataFlow Hub</h1>
      <Form fetchData={fetchData} />
      <DataList dataList={dataList} />
    </div>
  );
};

export default Home;
