import React, {useState, useEffect} from 'react'
import { Card, Typography } from "@material-tailwind/react";
//import axios from 'axios'

const TABLE_HEAD = ["Name", "Email", "Complaint", "Status"];
    
    // const TABLE_ROWS = [
    // {
    //     name: "John Michael",
    //     job: "Manager",
    //     date: "23/04/18",
    // },
    // {
    //     name: "Alexa Liras",
    //     job: "Developer",
    //     date: "23/04/18",
    // },
    // {
    //     name: "Laurent Perrier",
    //     job: "Executive",
    //     date: "19/09/17",
    // },
    // {
    //     name: "Michael Levi",
    //     job: "Developer",
    //     date: "24/12/08",
    // },
    // {
    //     name: "Richard Gran",
    //     job: "Manager",
    //     date: "04/10/21",
    // },
    // ];

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
        <table class="table-auto">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {userInfo.map(user => (
            <tr key={user.id}>
                <td>{user.first_name} {user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.description}</td>
                <td>{user.status}</td>
            </tr>
        ))}
        </tbody>
        </table>
    )
    }
export default AdminPage 