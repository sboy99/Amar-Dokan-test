import axios from "axios";
import auth from "../auth/firebase.config";

const needsAuthorization = ["/user/showMe", "/auth/logout"];

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (req) => {
    if (needsAuthorization.includes(req.url)) {
      const idToken = await auth.currentUser.getIdToken(true);
      // console.log(idToken);
      if (idToken) {
        req.headers["Authorization"] = `Bearer ${idToken}`;
      }
    }
    return req;
  },
  (error) => Promise.reject(error)
);

export default instance;
