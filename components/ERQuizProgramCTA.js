import React from "react";

const ERQuizProgramCTA = ({
  heading = "Is Travel/Work Experience Right for You?",
  subHeading = "Take the Global Village English \"Travel/Work Experience Readiness Quiz\"",
  description = "This fun, online quiz takes 3 minutes to complete and you\’ll get a personalized report. Identify your strengths and social style plus some details about your readiness for this degree.",
  quizUrl = "https://cr-gve.virtualadviser.com/?lead_src=w-body",
  linkText = "Get Your Teaching Travel/Work Experience Readiness Score Now >>"
}) => {
  return (
    <div className="w-full" id="erQuizCTA">
      <div className="va-section program-page" style={{ textAlign: "left" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ color: "rgb(79 86 101/var(--tw-text-opacity,1))", fontSize: "24px", fontWeight: "500" }}>
            {heading}
          </h3>
          <h4 className="va-sub-heading" style={{ color: "#EFA334" }}>
            <a className="va-link" target="_blank" href={quizUrl} rel="noopener">
              {subHeading}
            </a>
          </h4>
          <div className="program-desc__desc" style={{ color: "rgb(79 86 101/var(--tw-text-opacity,1))" }}>
            <p className="va-text">
              {description}
              <a target="_blank" href={quizUrl} style={{ fontWeight: "bold", color: "#EFA334" }}>
                {" "+linkText}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERQuizProgramCTA;