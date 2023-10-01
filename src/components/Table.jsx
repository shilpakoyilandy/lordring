import React from "react";
import Pagination from "./Pagination";

export default function Table({ data }) {
  return (
    <div className="container mx-auto ring ring-gray-100 border-inherit pt-3">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Race</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.docs?.map((item, index) => (
            <tr key={index}>
              <td>{item?._id}</td>
              <td>{item?.name}</td>
              <td>{item?.race}</td>
              <td>{item?.gender}</td>
              <td>View More</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
