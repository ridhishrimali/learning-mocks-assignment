import React from "react";

function Products({ data, createdAt, type }) {
  return (
    <div className="bg-white border rounded border-gray-300	my-1 mx-28">
      <div className="p-4">
        <div className="flex justify-between items-center	">
          <div className="w-1/5	flex flex-col">
            <img src={data.icon_url} className="w-1/2 h-26" alt="Not Found" />
            <p className="self-start font-bold">{data.name}</p>
          </div>
          <div className="w-4/5 text-sm">
            {data.description ? data.description : "404-Description Not Found!"}
          </div>
        </div>
        <div className="border-t-2 border-gray-100 pt-1 mt-1">
          <h1 className="font-extrabold mb-1">Users:</h1>
          {data.users && data.users.length > 0 ? (
            data.users.map((user, i) => {
              return (
                <React.Fragment>
                  <div className="flex justify-between items-center	">
                    <div className="w-1/5	flex flex-col">
                      <img
                        src={user.avatar_url}
                        className="w-1/2 h-26"
                        alt="avatar"
                      />
                      <p className="self-start font-bold">{user.name}</p>
                    </div>
                    <div className="w-4/5 text-sm">
                      {user.bio ? user.bio : "404-Bio Not Found!"}
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          ) : (
            <p>404-Users Not Found</p>
          )}
        </div>
        <div className="flex mt-2 justify-between border-t-2 border-gray-100 pt-1">
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

export default Products;
