/* eslint-disable no-unused-vars */
// import React from 'react'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import ViewContact from "./ViewContact";

const Contact = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([])
    const [viewContact, setViewContact] = useState(false)
    const [selectedContact, setSelectedContact] = useState("")
    const [users, setUsers] = useState([
        {
            id: '1',
            name: 'John Doe',
            companyName: 'Tech Corp',
            email: 'john.doe@techcorp.com',
            mobile: '+1234567890',
            text: 'Looking for collaboration.',
            replied: false,
        },
        {
            id: '2',
            name: 'Jane Smith',
            companyName: 'Design Studio',
            email: 'jane.smith@designstudio.com',
            mobile: '+0987654321',
            text: 'Interested in your services.',
            replied: true,
        },
        {
            id: '3',
            name: 'Alice Johnson',
            companyName: 'Marketing Ltd',
            email: 'alice.johnson@marketingltd.com',
            mobile: '+1122334455',
            text: 'Inquiry about pricing.',
            replied: false,
        },
        {
            id: '4',
            name: 'Bob Williams',
            companyName: 'Finance Solutions',
            email: 'bob.williams@financesolutions.com',
            mobile: '+5566778899',
            text: 'Requesting a demo.',
            replied: true,
        },
        {
            id: '5',
            name: 'Charlie Brown',
            companyName: 'HR Experts',
            email: 'charlie.brown@hrexperts.com',
            mobile: '+9988776655',
            text: 'Need more details.',
            replied: false,
        },
    ])

    const handleMarkAsReplied = (id) => {
        const updatedUsers = users.map(user =>
            user.id === id ? { ...user, replied: !user.replied } : user
        );
        console.log(updatedUsers);
        // Set the updatedUsers to your state (if you use state management)
    };

    const handleViewContact = (value) => {
        setViewContact(value);
    }

    const handleContact = id => {
        const temp = users.filter((item) => item.id === id);
        handleIsRplied(id);
        setSelectedContact(temp[0]);
        setViewContact(true);
    }
    const handleIsRplied = id => {
        // const temp = 
        setUsers(prevUsers => 
            prevUsers.map(user => 
                user.id === id ? { ...user, replied: !user.replied } : user
            )
        );
    }

    useEffect(() => {
        const temp = users.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(temp);
    }, [searchQuery, users])


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
                                        <Link to="#" className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium">Contact</Link>
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
                        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">Contacts</h1>
                    </div>
                    <div className="sm:flex">
                        <div className="hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0">
                            <form className="lg:pr-3" action="#" method="GET">
                                <label htmlFor="users-search" className="sr-only">Search</label>
                                <div className="mt-1 relative lg:w-64 xl:w-96">
                                    <input type="text" name="email" id="users-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Search for Contacts"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </form>
                            <div className="flex space-x-1 pl-0 sm:pl-2 mt-3 sm:mt-0">
                                {/* <Link to="#" className="text-gray-500 hover:text-gray-900 cursor-pointer p-1 hover:bg-gray-100 rounded inline-flex justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg> */}
                                {/* </Link> */}
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
                                                <input
                                                    id="checkbox-all"
                                                    aria-describedby="checkbox-1"
                                                    type="checkbox"
                                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                                                />
                                                <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Name
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Company Name
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Email
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Mobile
                                        </th>
                                        <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                            Text
                                        </th>
                                        <th scope="col" className="p-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {filteredItems.map((user) => (
                                        <tr
                                            key={user.id}
                                            className={`hover:bg-gray-100 cursor-pointer ${user.replied ? 'font-normal' : 'font-bold'}`}
                                            onClick={() => handleContact(user.id)}
                                        >
                                            <td className="p-4 w-4">
                                                <div className="flex items-center">
                                                    <input
                                                        id={user.id}
                                                        aria-describedby="checkbox-1"
                                                        type="checkbox"
                                                        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"
                                                    />
                                                    <label htmlFor={user.id} className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-base text-gray-900">
                                                {user.name}
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-base text-gray-900">
                                                {user.companyName}
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-base text-gray-900">
                                                {user.email}
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-base text-gray-900">
                                                {user.mobile}
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-base text-gray-900">
                                                {user.text}
                                            </td>
                                            <td className="p-4 whitespace-nowrap space-x-2">
                                                {user.replied ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="15" viewBox="0 0 512 512">
                                                        <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                                    </svg>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <ViewContact 
                viewContact={viewContact}
                handleViewContact={handleViewContact}
                id={selectedContact.id}
                name={selectedContact.name}
                companyName={selectedContact.companyName}
                email={selectedContact.email}
                mobile={selectedContact.mobile}
                text={selectedContact.text}
                replied={selectedContact.replied}
            />
        </>
    )
}

export default Contact