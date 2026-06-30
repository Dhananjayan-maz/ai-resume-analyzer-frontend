import {
    BiFile,
    BiBrain,
    BiTargetLock,
    BiBriefcase,
    BiHistory,
    BiShield
} from "react-icons/bi";

function Features() {

    const features = [
        {
            icon: <BiFile size={40} />,
            title: "Resume Upload",
            description: "Upload your PDF resume securely for AI analysis."
        },
        {
            icon: <BiBrain size={40} />,
            title: "AI ATS Analysis",
            description: "Receive detailed ATS feedback powered by Gemini AI."
        },
        {
            icon: <BiTargetLock size={40} />,
            title: "Role Prediction",
            description: "Predict your most suitable job role using Machine Learning."
        },
        {
            icon: <BiBriefcase size={40} />,
            title: "Job Recommendation",
            description: "Discover real-time jobs matching your predicted role."
        },
        {
            icon: <BiHistory size={40} />,
            title: "Resume History",
            description: "View all your previous resume analyses anytime."
        },
        {
            icon: <BiShield size={40} />,
            title: "Secure Platform",
            description: "JWT Authentication keeps your data safe and secure."
        }
    ];

    return (

        <section className="py-5">

            <div className="container">

                <h2 className="text-center mb-5 fw-bold">
                    Our Features
                </h2>

                <div className="row">

                    {
                        features.map((feature, index) => (

                            <div
                                className="col-md-4 mb-4"
                                key={index}
                            >

                                <div className="card h-100 shadow-sm border-0 text-center p-4">

                                    <div className="text-primary mb-3">
                                        {feature.icon}
                                    </div>

                                    <h4>{feature.title}</h4>

                                    <p className="text-muted">
                                        {feature.description}
                                    </p>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>

        </section>

    );

}

export default Features;