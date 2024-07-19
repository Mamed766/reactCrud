import React from "react";

const TableHeader = ({ headerClassName = "" }) => {
  return (
    <thead className="bg-gray-700 text-white">
      <tr>
        <th className={`w-[30rem] ${headerClassName}`}>#</th>
        <th className={headerClassName}>Name</th>
        <th className={headerClassName}>Email</th>
        <th className={headerClassName}>Phone</th>
        <th className={headerClassName}>Action</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
