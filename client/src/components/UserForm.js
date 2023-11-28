import React, {useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';
import background from '../assets/background.png'


function UserForm () {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [description, setDescription] = useState("")

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    //submit user info 
    function submitUserForm(e) {
        e.preventDefault()
        console.log("did we make it?")
        axios.post('/submit_user_form', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            description: description
        })
        .then(response => {
            console.log(response);
            setShowSuccessModal(true);
        })
        .catch(error => {
            console.error(error);
            setShowErrorModal(true);
        });
    }

    console.log("success",showSuccessModal)

    return (
        <div className=" flex items-center justify-center h-screen bg-purple-200/50">
            <form class="mx-auto my-auto max-w-lg p-8 bg-gray-100 shadow-md rounded" onSubmit={submitUserForm}>
            <h2 className="text-center mb-8 text-purple-500 font-bold text-2xl">Enter Your Information Below</h2>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grah\y-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" 
                    type="text" 
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)} />
                </div>

                <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" 
                    type="text" 
                    placeholder="Doe"
                    value={lastName} 
                    onChange={(e)=> setLastName(e.target.value)} />
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                    Email Address
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-password" 
                    type="email" 
                    placeholder="email@example.com"
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}/>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
                    Please enter your complaint 
                </label>
                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-password" 
                    type="text" 
                    placeholder="enter description there"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}/>
                </div>
            </div>

            <div class="items-center">
                <button class="shadow w-full bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple text-white font-bold py-2 px-4 rounded" 
                    type="submit">
                    Submit Complaint
                </button>
            </div>

            <div class=" text-center mt-4 underline">
                <Link to= '/admin'> Not a user? Click here to view Admin Page</Link>
            </div>
            </form>

            {showSuccessModal ? <SuccessModal setShowSuccessModal={setShowSuccessModal} /> : null }
            

            {showErrorModal && (
                <ErrorModal />
            ) }

        </div>    
        
    )
}

export default UserForm 