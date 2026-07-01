import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const response = await api.post("/register/", formData);

            console.log(response.data);

            toast.success("Registration Successful!");

            navigate("/login");

        } catch (error) {

            console.log(error);

            console.log(error.response);

            console.log(error.response?.data);

            toast.error(JSON.stringify(error.response?.data));
        }

        // catch (error) {

        //     console.log(error.response?.data);

        //     toast.error("Registration Failed");


        // }

    };

    return (

        <div className="container vh-100 d-flex justify-content-center align-items-center">

            <div className="card shadow p-4" style={{ width: "450px" }}>

                <h2 className="text-center mb-4">
                    AI Resume Analyzer
                </h2>

                <h4 className="text-center mb-4">
                    Create Account
                </h4>

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
                            value={formData.username}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={formData.email}
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
                            value={formData.password}
                            onChange={handleChange}
                        />

                    </div>

                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center mt-3">

                    Already have an account?

                    <Link
                        to="/login"
                        className="text-decoration-none"
                    >
                        {" "}Login
                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;