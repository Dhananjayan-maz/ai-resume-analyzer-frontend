import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";

function Dashboard() {

    // const [message, setMessage] = useState("");

    const [dashboard, setDashboard] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchDashboard = async () => {

            try {

                const response = await api.get("/dashboard/");

                setDashboard(response.data);

            } catch (error) {

                console.log(error.response?.data);

                navigate("/login");

            }

        };

        fetchDashboard();

    }, [navigate]);

    const handleLogout = () => {

        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");

        toast.info("Logged out successfully");

        navigate("/login");

    };

    return (

        <div className="container mt-5">

            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2>AI Resume Analyzer</h2>

                <button
                    className="btn btn-danger"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

            <div className="card shadow p-4">

                <h2>
                    {dashboard?.message} 👋
                </h2>

                <h3>Uploaded Resume's : {dashboard?.total_resumes || "No Resume Uploaded"}</h3>

                <h5>Predicted Role : {dashboard?.latest_role || "No Resume Uploaded"}</h5>

                <p className="text-muted">
                    Welcome to your AI Resume Analyzer Dashboard.
                </p>

                <hr />

                <div className="row">

                    <div className="col-md-4">

                        <div className="card text-center p-3 shadow-sm">

                            <h5>📄 Resume</h5>

                            <p>Upload and analyze your resume.</p>

                            <button
                                className="btn btn-primary"
                                onClick={() => navigate("/upload")}
                            >
                                Upload Resume
                            </button>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card text-center p-3 shadow-sm">

                            <h5>📊 Resume History</h5>

                            <p>
                                View your previous resume analyses.
                            </p>

                            <button
                                className="btn btn-info"
                                onClick={() => navigate("/history")}
                            >
                                View History
                            </button>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card text-center p-3 shadow-sm">

                            <h5>💼 Job Recommendation</h5>

                            <p>Find jobs based on your skills.</p>

                            <button
                                className="btn btn-success"
                                onClick={() => navigate("/jobs")}
                            >
                                View Jobs
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;