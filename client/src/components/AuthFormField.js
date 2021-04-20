function AuthFormField({ setField, value, placeholder, isPassword }) {
    return (
        <input
            className="p-2 mb-8 text-lg text-gray-600 border-b-2 border-solid outline-none border-opacity-60"
            placeholder={placeholder}
            onChange={(e) => setField(e.target.value)}
            value={value}
            type={isPassword ? "password" : "text"}
        ></input>
    );
}

export default AuthFormField;
