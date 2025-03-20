import React, { useState } from "react";
import { postData } from "api/api";

const PostDataPage = () => {
  const [coverageId, setCoverageId] = useState("");
  const [coverageName, setCoverageName] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const [annualCoverageAmount, setAnnualCoverageAmount] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handlePostData = async () => {
    try {
      const result = await postData({
        coverageId,
        coverageName,
        coverageAmount,
        annualCoverageAmount,
      });
      setSuccessMessage(`Data successfully posted for the policy ${coverageName}`);
      console.log("Data posted:", result);
    } catch (error) {
      console.error("Error posting data:", error);
      setError("An error occurred while posting data.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={coverageId}
        onChange={(e) => setCoverageId(e.target.value)}
        placeholder="Enter Coverage ID"
      />
      <input
        type="text"
        value={coverageName}
        onChange={(e) => setCoverageName(e.target.value)}
        placeholder="Enter Coverage Name"
      />
      <input
        type="text"
        value={coverageAmount}
        onChange={(e) => setCoverageAmount(e.target.value)}
        placeholder="Enter Coverage Amount"
      />
      <input
        type="text"
        value={annualCoverageAmount}
        onChange={(e) => setAnnualCoverageAmount(e.target.value)}
        placeholder="Enter Annual Coverage Amount"
      />
      <button onClick={handlePostData}>Add Policy</button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default PostDataPage;
