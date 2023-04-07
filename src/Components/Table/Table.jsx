import React from "react";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Spinner } from "../Spinner/Spinner";
import { tableData } from "./TableHeadingData";
import UserData from "./UserData";

const Table = ({ urlValue, durationValue }) => {
  const [users, setUsers] = useState([]);
  const { showBoundary } = useErrorBoundary();
  const API = "http://localhost:8082/stocks/" + urlValue + "/" + durationValue;

  const fetchUser = async (url) => {
    setUsers([]);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setUsers(data);
      }
    } catch (error) {
      console.log(error);
      showBoundary(error);
    }
  };
  useEffect(() => {
    fetchUser(API);
  }, [API]);

  return users.length === 0 ? (
    <div className="spinner">
      <Spinner />
    </div>
  ) : (
    <div className="table-container">
      <h2 className="table-heading"> Top Stocks </h2>
      <table className="stockTable">
        <thead className="tableHead">
          <tr>
            {tableData.map((element, index) => (
              <th scope="col" className="tableHeadCol" key={index}>
                {element}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="tableBody">
          <UserData users={users} />
        </tbody>
      </table>
    </div>
  );
};
export default Table;
