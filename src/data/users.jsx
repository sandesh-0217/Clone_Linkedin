// File: /src/data/users.js
import CryptoJS from "crypto-js";

const secret = "linkedin-secret-key";

export const users = [
  {
    id: 1,
    name: "Profile 1",
    email: "profile1@gmail.com",
    password: CryptoJS.AES.encrypt("password1", secret).toString(),
    role: "Frontend Developer",
  }
];