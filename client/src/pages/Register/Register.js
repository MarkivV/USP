import React, {useState} from 'react';
import CardMain from "../../components/CardMain/CardMain";
import {useDispatch, useSelector} from "react-redux";
import {createPost} from "../../redux/features/posts/postsSlice";
import {login, register} from "../../redux/features/auth/authSlice";

const Register = () => {
    const dispatch = useDispatch()

    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");

    const onSaveUserClicked = () =>{
        const formData = {username, password}
        console.log(formData)
        dispatch(register(formData))
        // setName('')
        // setEmail('')
        // setPassword('')
    }


    return (
        <div>
            <section>
                <h2>Register</h2>
                <form>
                    <label htmlFor="postTitle">Name:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={username}
                        onChange={(e)=>setName(e.target.value)}
                    />
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
                    <input
                        type="password"
                        id="postTitle"
                        name="postTitle"
                        value={passwordCheck}
                        onChange={(e)=>setPasswordCheck(e.target.value)}
                    />
                    <button
                        type="button"
                        onClick={onSaveUserClicked}
                        disabled={!(password === passwordCheck)}
                    >Register</button>
                </form>
            </section>
        </div>
    );
};

export default Register;
