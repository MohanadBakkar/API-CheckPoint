import React, { useState, useEffect} from "react";
import axios from "axios";
import "./App.css"
const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                
                setListOfUsers(response.data);
            }
            catch(error) {
                console.error("error fetching users:", error);
            }
        }
        fetchUsers();
    }, []);
    return (
        <div className= "user-list-container">
            {listOfUsers.map(user => (
                <div className="user-card" key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
        </div>
    )
};
export default UserList;