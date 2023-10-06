import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../main";

export default function Details() {
  const {id}=useParams();
  
const {data}= useQuery({
    queryKey: ["charactor", id],
    queryFn: () =>
      axiosInstance
        .get(
          `/character/${id}`
        )
        .then((data) => {
          return data?.data?.docs[0];
        }),
        
  });
  const renderTableItem=(label, value)=> {
    return (
      <tr>
        <td>{label}</td>
        <td>{value ? value : "-"}</td>
      </tr>
    );
  }
  return (
<div className="container mx-auto ring ring-gray-100 border-inherit pt-3">
<div className="flex p-4 justify-center border-b-2 font-bold text-lg">
        <h1>Characters &nbsp; &gt; {data?.name}</h1>
      </div>
      <div className="container mx-auto ring ring-gray-100 border-inherit pt-3">
      <table className="table">
  <thead>
    {renderTableItem("Name", data?.name)}
    {renderTableItem("WikiURL", data?.wikiUrl)}
    {renderTableItem("Race", data?.race)}
    {renderTableItem("Gender", data?.gender)}
    {renderTableItem("Height", data?.height)}
    {renderTableItem("Hair", data?.hair)}
    {renderTableItem("Realm", data?.realm)}
    {renderTableItem("Birth", data?.birth)}
    {renderTableItem("Spouse", data?.spouse)}
    {renderTableItem("Dealth", data?.death)}

  </thead>
</table>
    
     <div className="flex justify-end">
     <Link to="/"><button className="btn btn-active btn-ghost m-4">Close</button></Link></div>
            </div>

</div>
  )
  
}
