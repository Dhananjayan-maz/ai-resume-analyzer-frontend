import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";

function UploadResume() {

    const [resume, setResume] = useState(null);
    const [message, setMessage] = useState("");
    const [predictedRole, setPredictedRole] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleUpload = async () => {


        if (!resume) {
            toast.error("Please select a resume");
            return;
        }

        setLoading(true);

        const formData = new FormData();

        formData.append("resume", resume);

        try {

            const response = await api.post(
                "/api/resume/upload/",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setPredictedRole(response.data.predicted_role);

            setMessage(response.data.message);

            toast.success("Resume Uploaded Successfully!");

            navigate("/dashboard");

        } catch (error) {

            console.log(error.response?.data);

            toast.error("Upload Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="container mt-5">

            <div className="card shadow p-4 mb-3">

                <h2 className="mb-4">
                    Upload Resume
                </h2>

                <input
                    type="file"
                    className="form-control mb-3"
                    accept=".pdf"
                    onChange={handleFileChange}
                />

                <button
                    className="btn btn-primary"
                    onClick={handleUpload}
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                            ></span>
                            Analyzing Resume...
                        </>
                    ) : (
                        "Upload Resume"
                    )}
                </button>

                <p className="mt-3 text-success">
                    {message}
                </p>

            </div>

            <button
                className="btn btn-secondary mb-5"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

        </div>

    );

}

export default UploadResume;