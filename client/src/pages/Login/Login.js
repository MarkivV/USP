import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/features/auth/authSlice";

const Login = () => {
    const dispatch = useDispatch()

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSaveUserClicked = () =>{
        const formData = {email, password}
        console.log(formData)
        dispatch(login(formData))
        // setName('')
        // setEmail('')
        // setPassword('')
    }


    return (
        <div>
            <section>
                <h2>Login</h2>
                <form>
                    <label htmlFor="postAuthor">Email:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <label htmlFor="postContent">Password:</label>
                    <input
                        type="password"
                        id="postTitle"
                        name="postTitle"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={onSaveUserClicked}
                    >Login</button>
                </form>
            </section>
        </div>
    );
};

export default Login;
