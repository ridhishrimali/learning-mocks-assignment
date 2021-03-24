import React from "react";

function Users({ data, createdAt, type }) {
  return (
    <div className="bg-white border rounded border-gray-300	my-1 mx-28">
      <div className="p-4">
        <div className="flex justify-between items-center	">
          <div className="w-1/5	flex flex-col">
            <img src={data.avatar_url} className="w-1/2	 h-26" alt="Not Found" />
            <p className="self-start font-bold">{data.name}</p>
          </div>
          <div className="w-4/5 text-sm">
            {data.bio ? data.bio : "404-Bio Not Found!"}
          </div>
        </div>
        <div className="flex mt-2 justify-between border-t-2 border-gray-100 pt-1">
          <p>
            <span className="text-sm font-semibold">Fellowship:</span>
            <span className="italic	text-xs	capitalize ml-1">
              {data.fellowship}
            </span>
          </p>
          <p>
            <span className="text-sm font-semibold">Created At:</span>
            <span className="italic	text-xs ml-1">{createdAt}</span>
          </p>
          <p>
            <span className="text-sm font-semibold">Resource Type:</span>
            <span className="italic	text-xs ml-1">{type}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Users;
