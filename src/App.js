import './App.css';
import React, { useState } from 'react';
import { getData, postData, deleteData, updateData } from './api';


function App() {
  const [data, setData] = useState(null);
  const [postResponse, setPostResponse] = useState(null);
  const [coverageId, setCoverageId] = useState('');
  const [coverageName, setCoverageName] = useState('');
  const [coverageAmount, setCoverageAmount] = useState('');
  const [annualCoverageAmount, setAnnualCoverageAmount] = useState('');

  const fetchData = async (id) => {
    try {
      const result = await getData(id);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleGetData = () => {
    fetchData(coverageId);
  };

  const handlePostData = async () => {
    try {
      const result = await postData({
        coverageId,
        coverageName,
        coverageAmount,
        annualCoverageAmount
      });
      setPostResponse(result);
      console.log('Data posted:', result);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleUpdateData = async () => {
    try {
      const result = await updateData(coverageId, {
        coverageName,
        coverageAmount,
        annualCoverageAmount
      });
      setPostResponse(result);
      console.log('Data updated:', result);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDeleteData = async () => {
    try {
      const result = await deleteData(coverageId);
      setPostResponse(result);
      console.log('Data deleted:', result);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={coverageId}
          onChange={(e) => setCoverageId(e.target.value)}
          placeholder="Enter Coverage ID"
        />
        <button onClick={handleGetData}>Get Data</button>
        <button onClick={handleDeleteData}>Delete Data</button>
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
        <button onClick={handlePostData}>Post Data</button>
        <button onClick={handleUpdateData}>Update Data</button>
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        {postResponse && <pre>{JSON.stringify(postResponse, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default App;
