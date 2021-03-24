import React from "react";

function Announcements(props) {
  const { data, createdAt, type } = props;
  return (
    <div className="bg-white border rounded border-gray-300	my-1 mx-28">
      <div className="p-4">
        <h1 className="font-bold">{data.title}</h1>
        <p className="leading-5	mt-2 text-sm	">{data.body}</p>
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

export default Announcements;
