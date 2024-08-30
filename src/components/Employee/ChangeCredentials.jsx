/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

const ChangeCredentials = ({ viewChangeCredentials, handleChangeCredentials, employee }) => {

    const setChangeCredentials = () => {
        handleChangeCredentials(false);
    }
    
    return (
        <>
            <div className={`${viewChangeCredentials ? 'flex' : 'hidden'} fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50`} id="change-user-details-modal" role={viewChangeCredentials ? 'dialog' : ''}>
                <div className="relative w-full max-w-md px-4 h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="bg-white rounded-lg shadow-lg relative">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-end p-2">
                            <button type="button" onClick={setChangeCredentials} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="change-user-details-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="p-6 pt-0 text-center">
                            <h3 className="text-xl font-normal text-gray-500 mb-4">Change User Details</h3>

                            {/* Email Input Field */}
                            <div className="mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                                />
                            </div>

                            {/* Password Input Field */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    placeholder="Enter new password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                                />
                            </div>

                            <a href="#" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
                                Update
                            </a>
                            <a href="#" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center" data-modal-toggle="change-user-details-modal" onClick={setChangeCredentials}>
                                Cancel
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChangeCredentials