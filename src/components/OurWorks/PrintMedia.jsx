/* eslint-disable no-unused-vars */
// import React from 'react'
// import { Link } from "react-router-dom"


import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AddPrintMedia from './AddWorks/AddPrintMedia';
import ViewPrintMedia from './ViewWorks/ViewPrintMedia';

const PrintMedia = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([])
    const [addPrintMedia, setAddPrintMedia] = useState(false);
    const [viewPrintMedia, setViewPrintMedia] = useState(false)
    const [selectedPrintMedia, setSelectedPrintMedia] = useState("")
    const [items, setItems] = useState([
        { id: 1, title: "Project Alpha", description: "A description of Project Alpha.", image: "https://via.placeholder.com/50", url: "https://example.com/project-alpha" },
        { id: 2, title: "Project Beta", description: "A description of Project Beta.", image: "https://via.placeholder.com/50", url: "https://example.com/project-beta" },
        { id: 3, title: "Project Gamma", description: "A description of Project Gamma.", image: "https://via.placeholder.com/50", url: "https://example.com/project-gamma" },
        { id: 4, title: "Project Delta", description: "A description of Project Delta.", image: "https://via.placeholder.com/50", url: "https://example.com/project-delta" },
    ])

    const handleAddPrintMedia = value => {
        setAddPrintMedia(value)
    }

    const handleView = id =>{
        const temp = items.filter(item => item.id === id)
        setSelectedPrintMedia(temp[0]);
        setViewPrintMedia(true);
    }
    const handleViewPrintMedia = value => {
        setViewPrintMedia(value);
    }

    const handleDelete = id => {
        const temp = filteredItems.filter(item => item.id !== id)
        setFilteredItems(temp);
    }

    useEffect(() => {
        const temp = items.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(temp);
    }, [searchQuery, items])



    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="mb-1 w-full">
                    <div className="mb-4">
                        <nav className="flex mb-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                                <li className="inline-flex items-center">
                                    <Link to="/" className="text-gray-700 hover:text-gray-900 inline-flex items-center">
                                        <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <Link to="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Our Works</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <Link to="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Print Media</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                        <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium" aria-current="page">List</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Print Media</h1>
                    </div>
                    <div className="sm:flex">
                        <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
                            <form className="lg:pr-3" action="#" method="GET">
                                <label htmlFor="users-search" className="sr-only">Search</label>
                                <div className="mt-1 relative lg:w-64 xl:w-96">
                                    <input
                                        type="text"
                                        name="email"
                                        id="users-search"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        placeholder="Search for PrintMedia"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                            <button type="button" onClick={() => setAddPrintMedia(true)} data-modal-toggle="add-user-modal" className="w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                                <svg className="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Add Print Media
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    URL
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredItems.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-100">
                                    <td className="p-4 w-4">
                                        <div className="flex items-center">
                                            <input id={`checkbox-${item.id}`} aria-describedby="checkbox-1" type="checkbox"
                                                className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
                                            <label htmlFor={`checkbox-${item.id}`} className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                                        {item.title}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                                        {item.description}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                                        <a href={item.image} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:underline">
                                            View Image
                                        </a>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-base font-normal text-cyan-600">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">Visit</a>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                                        <button
                                            onClick={() => handleView(item.id)}
                                            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                                        >
                                            View
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <AddPrintMedia addPrintMedia={addPrintMedia} handleAddPrintMedia={handleAddPrintMedia} />
            <ViewPrintMedia viewPrintMedia={viewPrintMedia} handleViewPrintMedia={handleViewPrintMedia}
            title={selectedPrintMedia.title}
            image={selectedPrintMedia.image}
            description={selectedPrintMedia.description}
            url = {selectedPrintMedia.url}
            
            />
        </>
    );
};

export default PrintMedia;
