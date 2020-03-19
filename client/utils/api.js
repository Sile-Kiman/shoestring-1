import axios from "axios";

export default {
  // Gets all users
  getSignUpData: function() {
    return axios.get("/api/books");
  },
  // Gets a user with the given id
  getSignUpData: function(id) {
    return axios.get("/api/signup/" + id);
  },
  // Remove a  user with the given id
  deleteSignUpData: function(id) {
    return axios.delete("/api/signup/" + id);
  },
  // Saves a new user to the database
  saveSignUpData: function(signupData) {
    return axios.post("/api/signup", signupData);
  }
};
