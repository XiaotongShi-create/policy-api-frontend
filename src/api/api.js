import axios from "axios";
const API_BASE_URL = "https://policy-api-708404858810.us-east4.run.app";

export const getData = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/policies/${id}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error("Data not found:", error);
      return { error: "The ID is not found" };
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
};

export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/policies/addPolicy`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export const updateData = async (id, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/policies/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/policies/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
