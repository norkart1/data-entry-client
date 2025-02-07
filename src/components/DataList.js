import React from "react";

const DataList = ({ dataList }) => (
  <div className="max-w-lg mx-auto bg-gray-100 p-4 rounded-lg">
    <h2 className="text-xl font-bold">Stored Data</h2>
    {dataList.map((item, index) => (
      <div key={index} className="p-2 border-b">
        {item.fullName} - {item.phoneNumber} - {item.email}
      </div>
    ))}
  </div>
);

export default DataList;
