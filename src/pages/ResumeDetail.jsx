import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

function ResumeDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [resume, setResume] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchResume();

    }, []);

    const fetchResume = async () => {

        try {

            const response = await api.get(`resume/history/${id}/`);

            setResume(response.data);

        }

        catch (error) {

            console.log(error);

            navigate("/history");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="text-center mt-5">

                <div className="spinner-border text-primary"></div>

            </div>

        );

    }

    return (

        <div className="container mt-4">

            <button
                className="btn btn-secondary mb-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <div className="card shadow p-4 mb-4">

                <h2 className="mb-4">
                    Resume Details
                </h2>

                <p>
                    <strong>Predicted Role:</strong>
                    {" "}
                    {resume.predicted_role}
                </p>

                <p>
                    <strong>Uploaded At:</strong>
                    {" "}
                    {new Date(resume.uploaded_at).toLocaleString()}
                </p>

                <p>
                    <strong>Resume PDF:</strong>
                </p>

                <a
                    href={`http://127.0.0.1:8000${resume.resume}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mb-4"
                >
                    Open Resume
                </a>

                <hr />

                <h4>Gemini ATS Feedback</h4>

                <div
                    className="border rounded p-5 "
                    style={{
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {resume.gemini_feedback}
                </div>

            </div>

        </div>

    );

}

export default ResumeDetails;