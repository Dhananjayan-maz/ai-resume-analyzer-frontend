import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";


function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!credentials.username.trim() || !credentials.password.trim()) {
            toast.error("Please enter username and password");
            return;
        }

        setLoading(true);

        try {

            const response = await api.post("login/", credentials);

            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);

            // alert("Login Successful");
            navigate("/dashboard")

        } catch (error) {

            toast.error("Invalid username or password");
        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container vh-100 d-flex justify-content-center align-items-center">

            <div className="card shadow p-4" style={{ width: "400px" }}>

                <h2 className="text-center mb-4">
                    AI Resume Analyzer
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter Username"
                            value={credentials.username}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={credentials.password}
                            onChange={handleChange}
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm me-2"
                                    role="status"
                                ></span>
                                Logging in...
                            </>
                        ) : (
                            "Login"
                        )}
                    </button>

                </form>

                <p className="text-center mt-3">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-decoration-none"
                    >
                        {" "}Register
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;