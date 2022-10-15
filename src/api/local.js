import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 2000,
  headers: {
    Accept: "application/json",
  },
});
