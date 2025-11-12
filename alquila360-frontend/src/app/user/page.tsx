"use client";

import {useEffect, useState} from "react";
import styles from "./page.module.css";
import { getUsers } from "../services/user.service";


export default function User(){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsers();
            console.log(usersData);
            setUsers(usersData);
            console.log(users);
        }
        fetchUsers();
    }, []);



    return(

        <div className={styles.userContainer}>
            <h1>Users</h1>
            
                {users.map((user:any) => (
                    <div key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.nombre}</p>
                        <p>{user.apellido}</p>
                        <p>{user.email}</p>

                    </div>
                ))}
            
        </div>
    );

}