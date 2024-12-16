// src/utils/auth.js

// Simulate a login API call
export const loginUser = async (email, password) => {
    // Replace this with an actual API call to your backend
    if (email === "user@example.com" && password === "password123") {
      return { success: true, message: "Login successful!" };
    } else {
      return { success: false, message: "Invalid email or password." };
    }
  };
  
  // Simulate a registration API call
  export const registerUser = async (name, email, password) => {
    // Replace this with an actual API call to your backend
    if (email === "user@example.com") {
      return { success: false, message: "Email is already in use." };
    } else {
      return { success: true, message: "Registration successful!" };
    }
  };
  