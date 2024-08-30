/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

import { useEffect, useState } from "react";
import ChangeCredentials from "./ChangeCredentials";

const ViewEmployee = ({ viewUser, handleViewUser, id, name, avatar, email, position, country, status }) => {

  const [viewChangeCredentials, setViewChangeCredentials] = useState(false);


  const setViewUser = () => {
    handleViewUser(false);
  }

  const handleChangeCredentials = (value) => {
    setViewChangeCredentials(value);
  }

  return (
    <>
      <div className={`${viewUser ? 'flex' : 'hidden'} fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50 `} id="user-modal" aria-hidden={!viewUser && "true"} aria-modal={viewUser && "true"} role={viewUser && 'dialog'}>
        <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="bg-white rounded-lg shadow-lg relative">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold">
                Employee Profile
              </h3>
              <button type="button" onClick={setViewUser} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="user-modal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3 flex flex-col items-center justify-center relative">
                  <img
                    id="profile-photo"
                    src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Profile Photo"
                    className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
                  />
                  {/* Green dot for active status */}
                  <span className="absolute top-4 right-20 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                  {/* <span className="absolute top-4 right-20 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span> */}
                  {/* File input for uploading a new profile photo */}
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-2 text-center"
                    onChange={(e) => {
                      const reader = new FileReader();
                      reader.onload = () => {
                        const image = document.getElementById('profile-photo');
                        image.src = reader.result;
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                  <input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 mb-4 focus:border-cyan-600 block w-full p-2.5" placeholder={name} required />
                  <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                  <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder={email} required />
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <form action="#">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="facebook" className="text-sm font-medium text-gray-900 block mb-2">Facebook</label>
                    <input type="text" name="facebook" id="facebook" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Facebook Profile" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="instagram" className="text-sm font-medium text-gray-900 block mb-2">Instagram</label>
                    <input type="text" name="instagram" id="instagram" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Instagram Profile" />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="twitter" className="text-sm font-medium text-gray-900 block mb-2">Twitter</label>
                    <input type="text" name="twitter" id="twitter" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Twitter Profile" />
                  </div>
                </div>
              </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="items-center p-6 border-t border-gray-200 rounded-b">
              <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
              <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5" type="submit" onClick={() => setViewChangeCredentials(true)}>Change Credentials</button>
            </div>
          </div>
        </div>
      </div>


      <ChangeCredentials viewChangeCredentials={viewChangeCredentials} handleChangeCredentials={handleChangeCredentials}
        id={id}
        name={name}
        avatar={avatar}
        email={email}
        position={position}
        country={country}
        status={status}
      />
    </>
  )
}

export default ViewEmployee

