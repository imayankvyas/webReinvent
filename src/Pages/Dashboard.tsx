import * as React from "react";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {Data} from "../utils/service";
import {getData} from "../store/slices/dataSlice";
import {logout} from "../store/slices/authSlice";
import {useNavigate} from "react-router";

export default function Dashboard() {
    const [users, setUsers] = React.useState([]);
    const [error,setError] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = ()=>{
        try{
            dispatch(logout())
            navigate("/");
        }
        catch (err:any){
            console.log("Error",err);
        }
    }
    const handleGetData=async ()=>{
        try {
            const response = await Data();
            dispatch(getData(response));
            setUsers(response?.data)
        } catch (err:any) {
            setError(err);

        }
    }

    useEffect(() => {
        handleGetData()
    }, []);

    return(
        <div className="App">

            <h3 className='flex justify-end px-3 font-bold' onClick={handleLogout}>Logout</h3>
            <div className="flex justify-center align-middle ">
                {users.length &&
                    users?.map((user:any) => {
                        return (
                            <div key={user?.id} className='px-3.5 pt-3'>
                                <img key={user?.avatar} src={user?.avatar}/>
                                <p>
                                    <strong>{user?.first_name}</strong>
                                </p>
                                <p>{user?.email}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    )
}
