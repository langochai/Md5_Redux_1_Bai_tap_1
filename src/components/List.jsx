import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setValue} from "../redux/reducer/userSlice.js";

export const List = () => {
    const userlist = useSelector(state => state.user.list)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(result => {
                dispatch(setValue(result.data))
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {userlist.length > 0 && (
                <>
                    <table>
                        <thead>
                        <td>ID</td>
                        <td>name</td>
                        </thead>
                        <tbody>
                        {userlist.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    )
}