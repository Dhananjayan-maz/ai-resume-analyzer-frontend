import { useEffect, useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function ResumeHistory() {

    const navigate = useNavigate();

    const [resumes, setResumes] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchHistory = async () => {

            try {

                const response = await api.get("resume/history/");

                setResumes(response.data);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);

            }

        };

        fetchHistory();

    }, []);

    if (loading) {

        return (

            <div className="container mt-5 text-center">

                <div className="spinner-border text-primary"></div>

                <p className="mt-3">
                    Loading Resume History...
                </p>

            </div>

        );

    }

    return (

        <div className="container mt-5">

            <h2>Resume History</h2>

            {resumes.length === 0 ? (

                <div className="card shadow-sm p-5 text-center mt-4 mb-4">

                    <h3>📄 No Resume Found</h3>

                    <p className="text-muted">
                        You haven't uploaded any resume yet.
                    </p>

                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => navigate("/upload")}
                    >
                        Upload Your First Resume
                    </button>

                </div>

            ) : (

                <table className="table table-bordered table-hover mt-4">

                    <thead className="table-primary">

                        <tr>
                            <th>S.No</th>
                            <th>Resume</th>
                            <th>Predicted Role</th>
                            <th>Uploaded At</th>
                            <th>Action</th>
                        </tr>

                    </thead>

                    <tbody>

                        {resumes.map((resume, index) => (

                            <tr key={resume.id}>

                                <td>{index + 1}</td>

                                <td>
                                    {resume.resume.split("/").pop()}
                                </td>

                                <td>
                                    {resume.predicted_role}
                                </td>

                                <td>
                                    {new Date(resume.uploaded_at).toLocaleString()}
                                </td>

                                <td>

                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => navigate(`/history/${resume.id}`)}
                                    >
                                        View
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>
            )}

            <button
                className="btn btn-secondary mb-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

        </div>

    );

}

export default ResumeHistory;