/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";

const ViewContact = ({ viewContact, handleViewContact, id, name, companyName, email, mobile, text, replied }) => {
    const setViewContact = () => {
        handleViewContact(false);
    };

    return (
        <>
            <div className={`${viewContact ? 'flex' : 'hidden'} fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50`} id="contact-modal" aria-hidden={!viewContact && "true"} aria-modal={viewContact && "true"} role={viewContact && 'dialog'}>
                <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                    {/* Modal content */}
                    <div className="bg-white rounded-lg shadow-lg relative">
                        {/* Modal header */}
                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold">
                                Contact Details
                            </h3>
                            <button type="button" onClick={setViewContact} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="contact-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={name} readOnly />

                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mt-4 mb-2">Email</label>
                                    <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={email} readOnly />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="mobile" className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                                    <input type="text" name="mobile" id="mobile" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={mobile} readOnly />

                                    <label htmlFor="companyName" className="text-sm font-medium text-gray-900 block mt-4 mb-2">Company</label>
                                    <input type="text" name="companyName" id="companyName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={companyName} readOnly />
                                </div>
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="text" className="text-sm font-medium text-gray-900 block mt-4 mb-2">Message</label>
                                <textarea name="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" value={text} readOnly />
                            </div>
                        </div>

                        {/* Modal footer */}
                        <div className="p-6 border-t border-gray-200 rounded-b">
                            <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" onClick={setViewContact}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewContact;
