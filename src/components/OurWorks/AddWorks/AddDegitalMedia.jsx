// import React from 'react'
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const AddDegitalMedia = ({ addDigitalMedia, handleAddDigitalMedia }) => {
    const setAddDigitalMedia = () => {
        handleAddDigitalMedia(false);
    }
  return (
    <div className={`${addDigitalMedia ? 'flex' : 'hidden'} fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50`} id="add-audio-modal" role={addDigitalMedia ? 'dialog' : ''}>
            <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                {/* Modal content */}
                <div className="bg-white rounded-lg shadow-lg relative">
                    {/* Modal header */}
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Add New Digital Media
                        </h3>
                        <button type="button" onClick={setAddDigitalMedia} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                        <form action="#" onSubmit={(e) => {
                            e.preventDefault();
                            console.log("Form submitted");
                        }}>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                    <input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Audio Title" required />
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                    <textarea name="description" id="description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Audio Description" required></textarea>
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2">Image</label>
                                    <input type="file" name="image" id="image" accept="image/*" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" required />
                                </div>
                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="url" className="text-sm font-medium text-gray-900 block mb-2">Digital Media URL</label>
                                    <input type="text" name="url" id="url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Audio URL" required />
                                </div>
                            </div>

                            {/* Modal footer */}
                            <div className="items-center p-6 border-t border-gray-200 rounded-b">
                                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Digital Media</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddDegitalMedia