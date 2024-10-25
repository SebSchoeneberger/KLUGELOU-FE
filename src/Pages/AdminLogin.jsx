import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { useNavigate, Navigate } from "react-router-dom";


function AdminLogin() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {setForm((prev) => ({...prev, [e.target.name]: e.target.value}));}

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(form.email, form.password);
        if (success) {
            navigate("/admin"); 
        } else {
            console.error("Login unsuccessful");
        }
    };


    return ( 
        <>
        <section className=" w-full max-h-96 h-96 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>
                        <input
                          type="text"
                          className="grow"
                          placeholder="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input
                          type="password"
                          className="grow"
                          name="password"
                          required
                          value={form.password}
                          onChange={handleChange}/>
                    </label>

                    <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </section>
        </>
    );
}

export default AdminLogin;