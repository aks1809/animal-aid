import axios from "axios";

const instance = axios.create({
  baseURL: "https://animalaid0.herokuapp.com" || "http://localhost:9000",
});

export default instance;
