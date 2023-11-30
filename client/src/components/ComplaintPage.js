import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import StatusButton from './StatusButton';

function ComplaintPage () {
    const {id} = useParams();

    const [userComplaint, setUserComplaint] = useState("")
    const [response, setResponse] = useState("")

    console.log(response)

    //display the selected complaint information
    useEffect(() => {
        fetch(`/userComplaint/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserComplaint(data.complaint_info);
            });
    }, [id]);

    //update or post admin response to compplaint
    function postAndPatchResponse (e) {
        e.preventDefault()
        if (userComplaint.admin_response) {
            fetch(`/updateResponse/${userComplaint.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/JSON"
                },
                body: JSON.stringify({
                    "response": response
                })
            })
            .then(response => response.json())
            .then(data => {
                setResponse("")
                console.log("Would noramlly email response to user")
            })
            .catch(error => {
                console.error("Error updating response:", error);
            });
        } else {
            fetch(`/addResponse/${userComplaint.id}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/JSON"
                },
                body: JSON.stringify({
                    "response": response
                })
            })
            .then(response => response.json())
            .then(data => {
                setResponse("")
                console.log("Would noramlly email response to user")
            })
        }  
        window.location.reload()
    }

    console.log("user complaint", userComplaint)

    return (
        <div className ="flex items-center justify-center h-screen bg-purple-200/50">
            <div className="max-w-xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
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
                    <h3 class="mb-3 font-normal text-gray-700 dark:text-gray-400">{userComplaint.admin_response}</h3>
                </div>

                <form onSubmit={postAndPatchResponse}>
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
                    <div class="flex items-center justify-center">
                    <button class="shadow w-1/2 bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple text-white font-bold py-1 px-4 rounded" 
                        type="submit">
                        Add Response
                    </button>
                    </div>     
                </form>
            <div class=" text-center mt-4 underline">
                <Link to= '/admin'> Return to Admin Page</Link>
            </div>
        </div>
        </div>
    )
};

export default ComplaintPage



