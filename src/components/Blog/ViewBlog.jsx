/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ViewBlog = ({ viewBlog, handleViewBlog, title, content, image, date, isDisplayed }) => {
    const [viewBlogModal, setViewBlogModal] = useState(viewBlog);
    const [isBlogDisplayed, setIsBlogDisplayed] = useState(isDisplayed);

    const setViewBlog = () => {
        handleViewBlog(false);
    };

    const handleToggleDisplay = (value) => {
        setIsBlogDisplayed(value);
    };

    const handleEdit = () => {
        console.log("Edit blog");
    };

    const handleDelete = () => {
        console.log("Delete blog");
    };

    const handleCreate = () => {
        console.log("Create blog");
    };

    return (
        <>
            <div
                className={`${viewBlog ? "flex" : "hidden"} fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50`}
                id="blog-modal"
                aria-hidden={!viewBlog && "true"}
                aria-modal={viewBlog && "true"}
                role={viewBlog && "dialog"}
            >
                <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                    {/* Modal content */}
                    <div className="bg-white rounded-lg shadow-lg relative">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold">Blog Details</h3>
                            <button
                                type="button"
                                onClick={setViewBlog}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="blog-modal"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3 flex flex-col items-center justify-center relative">
                                    <img
                                        id="blog-image"
                                        src={image}
                                        alt="Blog Image"
                                        className="w-full h-40 rounded-lg object-cover shadow-lg"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="title"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 mb-4 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder={title}
                                        required
                                    />
                                    <label
                                        htmlFor="date"
                                        className="text-sm font-medium text-gray-900 block mb-2"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="text"
                                        name="date"
                                        id="date"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder={date}
                                        required
                                    />
                                </div>
                            </div>
                            <label
                                htmlFor="content"
                                className="text-sm font-medium text-gray-900 block mb-2"
                            >
                                Content
                            </label>
                            <textarea
                                name="content"
                                id="content"
                                rows="4"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                placeholder={content}
                            ></textarea>
                        </div>

                        {/* Modal footer */}
                        <div className="flex items-center justify-end p-6 space-x-4 border-t border-gray-200 rounded-b">
                            <button
                                type="button"
                                onClick={handleEdit}
                                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={handleDelete}
                                className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                            >
                                Delete Blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewBlog;
