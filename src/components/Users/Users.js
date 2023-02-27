import {userList} from "../../data";
import User from "../user/User"
import {useState} from "react";

export default function Users (){
    let [users, setUsers] = useState([]);  // --> [get(),set()]


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value=>value.json())
        .then(value=>{
            setUsers(value);
    })


    return (
    <div>
        {userList.map(user => (<User item={user} key={user.id}/>))}
    </div>

    )
};
