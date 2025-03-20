import React, { useState } from "react";
import { getData } from "api/api";

const GetDataPage = () => {
  const [data, setData] = useState(null);
  const [coverageId, setCoverageId] = useState("");
  const [error, setError] = useState("");

  const fetchData = async (id) => {
    try {
      const result = await getData(id);
      if (result.error) {
        setError(result.error);
        setData(null);
      } else {
        setData(result);
        setError("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data.");
    }
  };

  const handleGetData = () => {
    fetchData(coverageId);
  };

  return (
    <div className="GetDataPage">
      <input
        type="text"
        value={coverageId}
        onChange={(e) => setCoverageId(e.target.value)}
        placeholder="Enter Coverage ID"
      />
      <button onClick={handleGetData}>Get Policy</button>
      {error && <p>{error}</p>}
      <div>
        {data && (
          <div className="message">
            <h3>Policy Details</h3>
            <p>Coverage Name: {data.coverageName}</p>
            <p>Coverage Amount: {data.coverageAmount}</p>
            <p>Annual Coverage Amount: {data.annualCoverageAmount}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetDataPage;
