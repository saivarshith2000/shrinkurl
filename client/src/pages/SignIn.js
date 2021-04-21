import { useState } from "react";
import AuthFormField from "../components/AuthFormField";

function SignIn({ setMessage }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        // clear any previous messages
        setMessage({ msg: null });

        // validate form
        if (validateForm(setMessage) === false) return;
        console.log(email);
        console.log(password);
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
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignIn;
