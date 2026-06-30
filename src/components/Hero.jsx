import { Link } from "react-router-dom";

function Hero() {

    return (

        <section className="py-5 bg-light">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <h1 className="display-4 fw-bold">

                            AI-Powered Resume Analysis

                        </h1>

                        <p className="lead mt-3">

                            Upload your resume, receive ATS feedback,
                            predict your job role using Machine Learning,
                            and discover real-time job opportunities.

                        </p>

                        <div className="mt-4">

                            <Link
                                to="/register"
                                className="btn btn-primary btn-lg me-3"
                            >
                                Get Started
                            </Link>

                            <a
                                href="#about"
                                className="btn btn-outline-dark btn-lg"
                            >
                                Learn More
                            </a>

                        </div>

                    </div>

                    <div className="col-lg-6 text-center mt-3">

                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
                            alt="Resume Analysis"
                            className="img-fluid rounded shadow"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;