/* eslint-disable no-unused-vars */
// import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import AddExhibition from "./AddWorks/AddExhibition";
import ViewExhibition from "./ViewWorks/ViewExhibition";

const Exhibition = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([])
    const [addExhibition, setAddExhibition] = useState(false);
    const [viewExhibition, setViewExhibition] = useState(false)
    const [selectedExhibition, setSelectedExhibition] = useState("")
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Project Alpha",
            description: "A description of Project Alpha.",
            image: "https://via.placeholder.com/50",
            url: "https://example.com/project-alpha",
        },
        {
            id: 2,
            title: "Project Beta",
            description: "A description of Project Beta.",
            image: "https://via.placeholder.com/50",
            url: "https://example.com/project-beta",
        },
        {
            id: 3,
            title: "Project Gamma",
            description: "A description of Project Gamma.",
            image: "https://via.placeholder.com/50",
            url: "https://example.com/project-gamma",
        },
        {
            id: 4,
            title: "Project Beta",
            description: "A description of Project Beta.",
            image: "https://via.placeholder.com/50",
            url: "https://example.com/project-beta",
        },
        {
            id: 5,
            title: "Project Gamma",
            description: "A description of Project Gamma.",
            image: "https://via.placeholder.com/50",
            url: "https://example.com/project-gamma",
        },
        {
            id: 6,
            title: "Project Beta",
            description: "A description of Project Beta.",
            image: "https://via.placeholder.com/50",
            url: "https://example.com/project-beta",
        },
        {
            id: 7,
            title: "Project Gamma",
            description: "A description of Project Gamma.",
            image: "https://via.placeholder.com/50",
            url: "https://example.com/project-gamma",
        },
        // Add more items as needed
    ]);

    const handleAddExhibition = value => {
        setAddExhibition(value)
    }
    const handleView = id =>{
        const temp = items.filter(item => item.id === id)
        setSelectedExhibition(temp[0]);
        setViewExhibition(true);
    }
    const handleViewExhibition = value => {
        setViewExhibition(value);
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
                                        <Link to="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Exhibition</Link>
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
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Exhibition</h1>
                    </div>
                    <div className="sm:flex">
                        <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
                            <form className="lg:pr-3" action="#" method="GET">
                                <label htmlFor="users-search" className="sr-only">Search</label>
                                <div className="mt-1 relative lg:w-64 xl:w-96">
                                    <input type="text" value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)} name="email" id="users-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for Exhibition" />
                                </div>
                            </form>
                            <div className="flex space-x-1 pl-0 sm:pl-2 mt-3 sm:mt-0">
                                {/* <Link to="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                                </Link> */}
                                <Link to="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                </Link>
                                <Link to="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                                </Link>
                                {/* <Link to="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                </Link> */}
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
                            <button type="button" onClick={() => setAddExhibition(true)} data-modal-toggle="add-user-modal" className="w-1/2 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium inline-flex items-center justify-center rounded-lg text-sm px-3 py-2 text-center sm:w-auto">
                                <svg className="-ml-1 mr-2 h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Add Exhibition
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden">
                            <table className="table-fixed min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox"
                                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded" />
                                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Title
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Description
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Image
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            URL
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        filteredItems.map((item) => (
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
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <AddExhibition addExhibition={addExhibition} handleAddExhibition={handleAddExhibition} />
            <ViewExhibition viewExhibition={viewExhibition} handleViewExhibition={handleViewExhibition}
                title={selectedExhibition.title}
                image={selectedExhibition.image}
                description={selectedExhibition.description}
                url = {selectedExhibition.url}
            />
        </>
    )
}

export default Exhibition