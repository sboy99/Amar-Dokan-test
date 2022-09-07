import axios from "axios";

export default axios.create({
  baseURL: "https://course-api.com",
  timeout: 1500,
  headers: {
    Accept: "application/json",
  },
});
