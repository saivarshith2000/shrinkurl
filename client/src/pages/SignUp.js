import { useState } from "react";
import AuthFormField from "../components/AuthFormField";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function SignUp({ setMessage }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        // clear any previous messages
        setMessage({ msg: null });

        // validate form
        if (validateForm(setMessage) == false) return;
        console.log(username);
        console.log(email);
        console.log(password);
        console.log(confirmPwd);
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
        if (password != confirmPwd) {
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
        // validate email
        if (emailRegex.test(email)) return true;
        setMessage({
            isError: true,
            msg: "Invalid E-mail address. Please try again !",
        });
        return false;
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
