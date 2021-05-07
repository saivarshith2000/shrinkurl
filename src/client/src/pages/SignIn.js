import { useState } from "react";
import AuthFormField from "../components/AuthFormField";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function SignIn({ setMessage }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const onSubmit = async (e) => {
        e.preventDefault();

        // clear any previous messages
        setMessage({ isError: false, msg: null });

        // validate form
        if (validateForm(setMessage) === false) return;

        // send POST request to AUTH service
        try {
            const resp = await axios.post("/auth/signin", {email, password})
            console.log(resp.data.username)
            // store new JWT logic here
            setMessage({isError: false, msg: "Signed in successfully!"})
            // redirect to dashboard
            history.push('/')
        } catch (e) {
            console.log(e.response.data)
            // if application error
            if (e.response.data.status === 'error') {
                setMessage({isError: true, msg: e.response.data.msg})
            } else {
                // network error
                setMessage({isError: true, msg: "Error reaching our servers!"})
            }
        }
    };

    // simple form validation. On errors, the first error is set using setMessage and false is returned
    const validateForm = (setMessage) => {
        // check if all fields are present
        if (email === "" || password === "") {
            setMessage({
                isError: true,
                msg: "All of the fields are required. Please try again !",
            });
            return false;
        }
        return true;
    };

    return (
        <div className="flex flex-col w-2/3 m-auto mt-16">
            <div className="p-4 m-auto text-4xl">Sign In</div>
            <form className="flex flex-col w-1/3 m-auto" onSubmit={onSubmit}>
                <AuthFormField
                    placeholder="E-mail"
                    setField={setEmail}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></AuthFormField>
                <AuthFormField
                    placeholder="Password"
                    setField={setPassword}
                    value={password}
                    isPassword={true}
                ></AuthFormField>
                <button className="w-1/3 p-4 m-auto text-xl bg-blue-600 rounded-sm text-gray-50">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default SignIn;
