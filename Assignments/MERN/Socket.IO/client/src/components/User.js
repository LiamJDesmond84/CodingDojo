import { navigate } from '@reach/router';
import {useEffect, useState} from 'react';






const User = (props)=>{

    const [username, setUsername] = useState("");



    const login = (e)=>{
        e.preventDefault();

        navigate("/chat", {state: {username}})
    }





    return (
        <div style={{border:"2px solid black", margin:"auto"}}>
            <h1>Get started now!</h1>
            <h2>I want to start chatting with the name...</h2>
            <form onSubmit={login}>
                <input
                    type="text"
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                />
                <button>Submit</button>
            </form>


        </div>
    );
}




export default User;