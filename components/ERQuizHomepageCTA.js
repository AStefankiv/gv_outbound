import React from "react";

const ERQuizHomepageCTA = () => {
  return (
    <div className="w-full mx-auto px-6 sm:px-8 lg:px-16" id="erQuizCTA">
      <div className="va-section program-page text-center" style={{ margin: "32px auto", padding: "2rem" }}>
        <h2 className="va-heading" style={{ fontSize: "28px", fontWeight: "bold" }}>
          Is Travel/Work Experience Right For You? Find Out!
        </h2>
        <h3 className="va-sub-heading" style={{ fontSize: "18px" }}>
          <a
            className="va-link"
            target="_blank"
            href="https://cr-gve.virtualadviser.com/?lead_src=w-body"
            style={{ color: "#EFA334", fontWeight: "bold", textDecoration: "underline" }}
            rel="noopener"
          >
            Take the Global Village English "Travel/Work Experience Readiness Quiz"
          </a>
        </h3>
        <p className="va-text" style={{ maxWidth: "820px", margin: "0 auto", fontSize: "18px" }}>
          This fun, online quiz takes 3 minutes to complete and you’ll get a personalized report. Identify your strengths, goals, and other details to find out if pursuing a travel/work experience is right for you.
          <a
            className="py-2 lg:py-3 px-4 lg:px-6 font-semibold rounded-lg bg-orange-500 transition-all outline-none hover:shadow-dark-grey-lg"
            target="_blank"
            href="https://cr-gve.virtualadviser.com/?lead_src=w-body"
            style={{ color: "black", maxWidth: "600px", margin: "16px auto 0", display: "block" }}
          >
            Get Your Travel/Work Experience Readiness Score Now
          </a>
        </p>
      </div>
    </div>
  );
};

export default ERQuizHomepageCTA;