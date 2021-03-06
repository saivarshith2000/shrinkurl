import { useState } from "react";
import AuthFormField from "../components/AuthFormField";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function SignUp({ setMessage }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault();

        // clear any previous messages
        setMessage({ msg: null });

        // validate form
        if (validateForm(setMessage) === false) return;

        // send POST request to AUTH service
        try {
            const resp = await axios.post("/auth/signup", {username, email, password})
            // store JWT logic here
            setMessage({isError: false, msg: "Signed up successfully. Sign In to proceed"})
            // wait for 1 sec and redirect to signin page
            setTimeout(() => history.push('/signin'), 1000)
        } catch (e) {
            // if application error
            if (e.response.data.status === 'error') {
                setMessage({isError: true, msg: e.response.data.msg})
            } else {
                // network error
                setMessage({isError: true, msg: "Error reaching our servers"})
            }
        }
     };

    // simple form validation. On errors, the first error is set using setMessage and false is returned
    const validateForm = (setMessage) => {
        // check if all fields are present
        if (
            username === "" ||
            email === "" ||
            password === "" ||
            confirmPwd === ""
        ) {
            setMessage({
                isError: true,
                msg: "All of the fields are required. Please try again !",
            });
            return false;
        }
        // see if both passwords match
        if (password !== confirmPwd) {
            setMessage({
                isError: true,
                msg: "Passwords do not match. Please try again !",
            });
            return false;
        }
        // validate password length
        if (password.length > 16 || password.length < 6) {
            setMessage({
                isError: true,
                msg: "Password must be between 6 and 16 characters",
            });
            return false;
        }
        // validate username length
        if ((username.length > 16) | (username.length < 6)) {
            setMessage({
                isError: true,
                msg: "Username must be between 6 and 16 characters",
            });
            return false;
        }
        return true;
    };

    return (
        <div className="flex flex-col w-2/3 m-auto mt-16">
            <div className="p-4 m-auto text-4xl">Sign Up</div>
            <form className="flex flex-col w-1/3 m-auto" onSubmit={onSubmit}>
                <AuthFormField
                    placeholder="Username (between 6 and 16 characters)"
                    setField={setUsername}
                    value={username}
                />
                <AuthFormField
                    placeholder="E-mail"
                    setField={setEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></AuthFormField>
                <AuthFormField
                    placeholder="Password (between 6 and 16 characters)"
                    setField={setPassword}
                    value={password}
                    isPassword={true}
                ></AuthFormField>
                <AuthFormField
                    placeholder="Confirm Password"
                    setField={setConfirmPwd}
                    value={confirmPwd}
                    isPassword={true}
                ></AuthFormField>
                <button className="w-1/3 p-4 m-auto text-xl bg-green-600 rounded-sm text-gray-50">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp;
