import axios from "axios";

const instance = axios.create({
  // local instance of firebase functions
  baseURL: "http://127.0.0.1:5001/clone-a3913/us-central1/api",
  // baseURL: "http://localhost:5000",

  // deployed version of amazon server on render.com
  // baseURL: "https://amazon-clone-backend-p3jr.onrender.com"
});

export { instance };
