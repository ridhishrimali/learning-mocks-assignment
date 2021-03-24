import React, { useEffect, useState } from "react";
import Feeds from "./data/feed.json";
import Announcements from "./components/Announcements";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  const [feeds, setFeeds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormdata] = useState({
    users: [],
  });

  useEffect(() => {
    setFeeds(Feeds);
  }, []);

  const buttonClickHanlder = () => {
    if (!modalOpen) {
      setFormdata({});
    }
    setModalOpen(!modalOpen);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === "resource_type") {
      setFormdata({
        ...formData,
        resource_type: value,
      });
      return;
    }
    setFormdata({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (formData.resource_type === "announcements") {
      if (!formData.title || !formData.body || !formData.fellowship) {
        alert("Please fill all the fields before saving!!!");
        return;
      }
    } else if (formData.resource_type === "users") {
      if (
        !formData.name ||
        !formData.bio ||
        !formData.fellowship ||
        !formData.avatar_url
      ) {
        alert("Please fill all the fields before saving!!!");
        return;
      }
    } else {
      if (!formData.name || !formData.description) {
        alert("Please enter name and description before saving!!!");
        return;
      }
    }
    let d = new Date();
    let date = d.toLocaleDateString();
    var time = d.toLocaleTimeString();
    setFeeds([
      {
        resource_type: formData.resource_type,
        resource: formData,
        created_ts: `${date} ${time}`,
      },
      ...feeds,
    ]);
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <div className="bg-gray-100 font-mono	subpixel-antialiased">
        <div className="bg-blue-400	 border rounded border-gray-300	my-1 mx-28 p-3">
          <div className="flex justify-between items-center	">
            <h1>LOGO</h1>
            <button
              className="border py-1 px-3 rounded text-red-800 bg-grey-400"
              onClick={buttonClickHanlder}
            >
              Add Item
            </button>
          </div>
        </div>

        {modalOpen && (
          <React.Fragment>
            <div
              class="fixed z-10 inset-0 overflow-y-auto"
              aria-labelledby="dialog-1-title"
              role="dialog"
              aria-modal="true"
            >
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>

                <span
                  class="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          class="h-6 w-6 text-red-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3
                          class="text-lg leading-6 font-medium text-gray-900"
                          id="dialog-1-title"
                        >
                          Deactivate account
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">
                            Are you sure you want to deactivate your account?
                            All of your data will be permanently removed. This
                            action cannot be undone.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Deactivate
                    </button>
                    <button
                      type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="fixed z-10 inset-0 overflow-y-auto"
              aria-labelledby="dialog-1-title"
              role="dialog"
              aria-modal="true"
            >
              <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                  aria-hidden="true"
                ></div>

                <span
                  class="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="">
                      <div class="mt-3 text-left w-full">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-7 font-bold">
                          Add Item
                        </h3>
                        <div class="mt-2 w-full">
                          <div class="w-full">
                            <form>
                              <div class="mb-6 w-full">
                                <label
                                  for="name"
                                  class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                >
                                  Type
                                </label>
                                <select
                                  name="resource_type"
                                  placeholder="Select Type..."
                                  required
                                  class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                  onChange={onChangeHandler}
                                >
                                  <option disabled selected>
                                    Select
                                  </option>
                                  <option value="announcements">
                                    Announcement
                                  </option>
                                  <option value="users">User</option>
                                  <option value="projects">Project</option>
                                </select>
                              </div>
                              {formData.resource_type &&
                                formData.resource_type === "announcements" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Title
                                    </label>
                                    <input
                                      name="title"
                                      placeholder="Title"
                                      required
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                formData.resource_type === "announcements" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Body
                                    </label>
                                    <textarea
                                      name="body"
                                      placeholder="Body"
                                      required
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                formData.resource_type === "users" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Name
                                    </label>
                                    <input
                                      name="name"
                                      placeholder="Name"
                                      required
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                formData.resource_type === "users" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Bio
                                    </label>
                                    <textarea
                                      name="bio"
                                      placeholder="Bio"
                                      required
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                formData.resource_type === "users" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Avatar Url
                                    </label>
                                    <input
                                      name="avatar_url"
                                      placeholder="URL"
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                formData.resource_type === "projects" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Name
                                    </label>
                                    <input
                                      name="name"
                                      placeholder="Name"
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                formData.resource_type === "projects" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Description
                                    </label>
                                    <textarea
                                      name="description"
                                      placeholder="Description"
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                formData.resource_type === "projects" && (
                                  <div class="mb-6 w-full">
                                    <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                      Icon Url
                                    </label>
                                    <input
                                      name="icon_url"
                                      placeholder="Url"
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    />
                                  </div>
                                )}
                              {formData.resource_type &&
                                (formData.resource_type === "announcements" ||
                                  formData.resource_type === "users") && (
                                  <div class="mb-6 w-full">
                                    <label
                                      for="name"
                                      class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                    >
                                      Fellowship
                                    </label>
                                    <select
                                      name="fellowship"
                                      placeholder="Select Type..."
                                      required
                                      class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                      onChange={onChangeHandler}
                                    >
                                      <option disabled selected>
                                        Select
                                      </option>
                                      <option value="all">All</option>
                                      <option value="founders">Founders</option>
                                      <option value="angels">Angels</option>
                                    </select>
                                  </div>
                                )}
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    {formData.resource_type &&
                      (formData.resource_type === "announcements" ||
                        formData.resource_type === "users" ||
                        formData.resource_type === "projects") && (
                        <button
                          type="button"
                          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={onSubmitHandler}
                        >
                          Submit
                        </button>
                      )}
                    <button
                      type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={buttonClickHanlder}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}

        {feeds.length > 0 &&
          feeds.map((data, i) => {
            if (data.resource_type === "announcements") {
              return (
                <Announcements
                  data={data.resource}
                  createdAt={data.created_ts}
                  type={data.resource_type}
                />
              );
            } else if (data.resource_type === "users") {
              return (
                <Users
                  data={data.resource}
                  createdAt={data.created_ts}
                  type={data.resource_type}
                />
              );
            } else {
              return (
                <Products
                  data={data.resource}
                  createdAt={data.created_ts}
                  type={data.resource_type}
                />
              );
            }
          })}
      </div>
    </React.Fragment>
  );
}

export default App;
