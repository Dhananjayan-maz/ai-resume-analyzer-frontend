import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";


function Jobs() {

    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noResume, setNoResume] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        fetchJobs();

    }, []);

    const fetchJobs = async () => {

        try {

            const resumeResponse = await api.get("resume/history/");

            const resumes = resumeResponse.data;

            if (resumes.length === 0) {

                setNoResume(true);
                return;

            }

            const latestResume = resumes[0];

            const role = latestResume.predicted_role;

            const jobResponse = await api.get(`jobs/?role=${role}`);

            setJobs(jobResponse.data.data.jobs);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading)

        return <h3 className="text-center mt-5">Loading Jobs...</h3>;

    if (noResume) {

        return (

            <div className="container mt-5">

                <div className="card shadow p-5">

                    <h2>📄 No Resume Found</h2>

                    <p className="text-muted mt-3">
                        Upload your resume to receive AI-based job recommendations.
                    </p>

                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => navigate("/upload")}
                    >
                        Upload Resume
                    </button>

                </div>

                <button
                    className="btn btn-secondary mt-4"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>

            </div>

        );

    }

    return (

        <div className="container mt-5">

            <button
                className="btn btn-secondary mb-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <h2 className="mb-4">
                Recommended Jobs
            </h2>

            {
                jobs.map((job) => (

                    <div
                        className="card mb-3 shadow"
                        key={job.job_id}
                    >

                        <div className="card-body">

                            <h4>{job.job_title}</h4>

                            <h6>{job.employer_name}</h6>

                            <p>{job.job_location}</p>

                            <a
                                href={job.job_apply_link}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-success"
                            >
                                Apply Now
                            </a>

                        </div>

                    </div>

                ))
            }

        </div>

    );

}

export default Jobs;