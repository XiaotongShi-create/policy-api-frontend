import React, { useState } from "react";
import { deleteData } from "api/api";

const DeleteDataPage = () => {
  const [coverageId, setCoverageId] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleDeleteData = async () => {
    try {
      const result = await deleteData(coverageId);
      setSuccessMessage(`Data successfully deleted!`);
      console.log("Data deleted:", result);
    } catch (error) {
      console.error("Error deleting data:", error);
      setError("An error occurred while deleting data.");
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
      <button onClick={handleDeleteData}>Delete Policy</button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default DeleteDataPage;
