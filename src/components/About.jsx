function About() {

    return (

        <section
            id="about"
            className="py-5 bg-light"
        >

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-lg-6">

                        <img
                            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700"
                            alt="About"
                            className="img-fluid rounded shadow"
                        />

                    </div>

                    <div className="col-lg-6">

                        <h2 className="fw-bold mb-4">

                            About AI Resume Analyzer

                        </h2>

                        <p>

                            AI Resume Analyzer helps students and job seekers improve
                            their resumes using Machine Learning and Google Gemini AI.

                        </p>

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item">
                                ✔ Resume Parsing
                            </li>

                            <li className="list-group-item">
                                ✔ ATS Resume Evaluation
                            </li>

                            <li className="list-group-item">
                                ✔ Job Role Prediction
                            </li>

                            <li className="list-group-item">
                                ✔ Live Job Recommendations
                            </li>

                            <li className="list-group-item">
                                ✔ Resume History
                            </li>

                        </ul>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default About;