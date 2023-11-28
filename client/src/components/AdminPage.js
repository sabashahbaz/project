import React, {useState, useEffect} from 'react'

function  AdminPage () {

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {
        console.log("HELLOOOO");
        fetch('/userInfo')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUserInfo(data.user_info);
            });
    }, []);
    
    console.log("userInfo", userInfo)
    

    return (
        <div className="flex items-center justify-center h-screen">
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                            <tr>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Complaint</th>
                            <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                            {userInfo.map(user => (
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{user.first_name} {user.last_name}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.email}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.description}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{user.status}</td>
                            {/* <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                            </td> */}
                            </tr>

                            ))}
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        
    )
    }
export default AdminPage 