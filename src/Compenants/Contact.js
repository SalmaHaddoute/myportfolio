import React from 'react';

const Contact = () => {
    return (
        <div className="text-white  w-5/6 p-8 rounded-lg max-w-4xl mx-auto bg-gray-900">
            <h2 className="text-3xl font-bold mb-4">Contact <span className="text-red-500">Me</span></h2>
            <p className="mb-6">Let's get in touch!</p>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-red-500">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full bg-gray-800 border border-gray-700 border-t-transparent border-l-transparent rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-red-500">Phone</label>
                        <input type="tel" id="phone" className="mt-1 block w-full bg-gray-800 border border-gray-700 border-t-transparent border-l-transparent rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-red-500">Name</label>
                        <input type="text" id="name" className="mt-1 block w-full bg-gray-800 border border-gray-700 border-t-transparent border-l-transparent rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-red-500">Address</label>
                        <input type="text" id="address" className="mt-1 block w-full bg-gray-800 border border-gray-700 border-t-transparent border-l-transparent rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm" />
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="content" className="block text-sm font-medium text-red-500">Content</label>
                    <textarea id="content" rows="4" className="mt-1 block w-full bg-gray-800 border border-gray-700 border-t-transparent border-l-transparent rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"></textarea>
                </div>
                <div className="mt-4 flex items-start">
                    <div className="flex items-center h-5">
                        <input id="newsletter" type="checkbox" className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="newsletter" className="font-medium text-gray-300">I would like to receive the newsletter.</label>
                    </div>
                </div>
                <div className="mt-6">
                    <button type="submit" className="w-full bg-red-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
