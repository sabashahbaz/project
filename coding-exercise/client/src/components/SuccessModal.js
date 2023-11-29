import React from 'react';

function SuccessModal({setShowSuccessModal}) {

        function closeAndRefresh() {
            setShowSuccessModal(false)
            window.location.reload()
        }

        return (
        <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-screen bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-2xl mx-4 p-4 md:p-5 rounded-lg">
            <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                Complaint Successfully Submitted!
                </h3>
                <button
                type="button"
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
                onClick={closeAndRefresh} 
                >
                <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
                <span className="sr-only">Close modal</span>
                </button>
            </div>
    
            <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500">
                Your complaint was successfully submitted. Someone from our team will get back to you shortly! 
                </p>
            </div>
    
            <div className="flex items-center justify-end mt-4">
                <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={closeAndRefresh} 
                >
                Close
                </button>
            </div>
            </div>
        </div>
        );
    }
    
    export default SuccessModal;