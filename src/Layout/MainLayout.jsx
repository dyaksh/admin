/* eslint-disable react/prop-types */
// import React from 'react'


import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className="flex overflow-hidden bg-white pt-16">
                <Sidebar />
                <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <main className="bg-gray-200">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}

export default MainLayout