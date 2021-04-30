function AuthFormField({ setField, value, placeholder, isPassword }) {
    return (
        <input
            className="p-2 mb-8 text-gray-600 border-b-2 border-solid outline-none text-m border-opacity-60"
            placeholder={placeholder}
            onChange={(e) => setField(e.target.value)}
            value={value}
            type={isPassword ? "password" : "text"}
        ></input>
    );
}

export default AuthFormField;
