import React, { useState } from "react";
import "./logstyle.scss";

const LogIn = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  let name, value;
  const handelInput = (e) => {
    name = e.target.name; //---> This will contain the name of input
    value = e.target.value; // ------> this will contains whatever will given as input
    setUser({ ...user, [name]: value }); // --> add data with the blank
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newRecords = { ...user, id: new Date().getTime.toString() };
    setRecords([...records, newRecords]);
    console.log(records);
    console.log(records[0].email);
    props.setUseName(records[0].email);
    setUser({ email: "", password: "" });
  };

  return (
    <div className={`w-full max-w-xs mainForm ${props.log ? "down" : "up"}`}>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action=""
        onSubmit={handelSubmit}
      >
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handelInput}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handelInput}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
