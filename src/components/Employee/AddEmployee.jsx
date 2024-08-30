/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";


const AddEmployee = ({ addUser, handleAddUser }) => {
    const setAddUser = () => {
        handleAddUser(false);
    }

    const [formData, setFormData] = useState({
        name: '',
        title: '',
        email: '',
        facebook: '',
        instagram: '',
        twitter: '',
        image:''
    });
    // const [image, setImage] = useState(null);
    // const [responseMessage, setResponseMessage] = useState('');
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleImageChange = (e) => {
        // setImage(e.target.files[0]);
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        
        const response_data = addEmployee(formData);

        console.log(response_data);
        
    };

    return (
        <div className={`${addUser ? 'flex' : 'hidden'} fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50`} id="add-user-modal" role={addUser ? 'dialog' : ''}>
            <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="bg-white rounded-lg shadow-lg relative">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Add new user
                        </h3>
                        <button type="button" onClick={setAddUser} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                        <form action="#" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                                    <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="John Doe" value={formData.name}
                                        onChange={handleChange} required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="title" className="text-sm font-medium text-gray-900 block mb-2">Title</label>
                                    <input type="text" name="title" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Developer" value={formData.title}
                                        onChange={handleChange} required />
                                </div>
                                {/* Right Column */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                                    <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="example@company.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="facebook" className="text-sm font-medium text-gray-900 block mb-2">Facebook</label>
                                    <input type="text" name="facebook" id="facebook" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Facebook Profile URL"
                                        value={formData.facebook}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* Left Column */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="instagram" className="text-sm font-medium text-gray-900 block mb-2">Instagram</label>
                                    <input type="text" name="instagram" id="instagram" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Instagram Profile URL"
                                        value={formData.instagram}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* Right Column */}
                                <div className="col-span-2 sm:col-span-1">
                                    <label htmlFor="twitter" className="text-sm font-medium text-gray-900 block mb-2">Twitter</label>
                                    <input type="text" name="twitter" id="twitter" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Twitter Profile URL"
                                        value={formData.twitter}
                                        onChange={handleChange}
                                    />
                                </div>
                                {/* Full Width for Profile Image */}
                                <div className="col-span-2">
                                    <label htmlFor="image" className="text-sm font-medium text-gray-900 block mb-2">Profile Image</label>
                                    <input type="file" name="image" id="image" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                        onChange={handleImageChange}
                                        required />
                                </div>
                            </div>
                            {/* <!-- Modal footer --> */}
                            <div className="items-center p-6 border-t border-gray-200 rounded-b">
                                <button className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Add Employee</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddEmployee;
