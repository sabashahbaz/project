import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import StatusButton from './StatusButton';

function ComplaintPage () {
    const {id} = useParams();

    const [userComplaint, setUserComplaint] = useState("")
    const [response, setResponse] = useState("")

    useEffect(() => {
        fetch(`/userComplaint/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserComplaint(data.complaint_info);
            });
    }, [id]);

    console.log("user complaint", userComplaint)

    return (
        <div className ="flex items-center justify-center h-screen bg-purple-200/50">
            <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
                <div className = "text-xl mb-3 font-bold text-purple-500">
                    <h2>Complaint # {userComplaint.id}</h2>
                </div>
                <div className="grid grid-cols-2 ">
                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">Name: </h3>
                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">{userComplaint.first_name}  {userComplaint.last_name}</h3>

                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email: </h3>
                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">{userComplaint.email}</h3>

                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">Description: </h3>
                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">{userComplaint.description}</h3>

                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">Status: </h3>
                    < StatusButton userComplaint={userComplaint}/>
                                        
                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">Response: </h3>
                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">{userComplaint.response}</h3>
                </div>

                <form>
                    <div class="flex flex-wrap -mx-3 mt-5">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
                        Respond to complaint here
                    </label>
                    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="grid-password" 
                        type="text" 
                        placeholder="enter response"
                        value={response}
                        onChange={(e)=> setResponse(e.target.value)}/>
                    </div>
                </div>
                        
                </form>
                
            <div class=" text-center mt-4 underline">
                <Link to= '/admin'> Return to Admin Page</Link>
            </div>
                </div>
                
            
        </div>

    )
}

export default ComplaintPage



 {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a> */}