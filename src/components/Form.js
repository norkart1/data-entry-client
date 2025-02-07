import React, { useState } from "react";
import { addData } from "../api";

const Form = ({ fetchData }) => {
  const [formData, setFormData] = useState({ fullName: "", phoneNumber: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData(formData);
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded-lg max-w-md mx-auto">
      <input type="text" placeholder="Full Name" className="input-style" onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} required />
      <input type="text" placeholder="Phone Number" className="input-style" onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} required />
      <input type="email" placeholder="Email" className="input-style" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
    </form>
  );
};

export default Form;
