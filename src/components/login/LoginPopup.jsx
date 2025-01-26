import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";

function LoginPopup({ open, setOpen, setReloadDropDown }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  // Sign-up related states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle input value change (email or phone)
  const handleInputChange = (event) => {
    setValue(event.target.value);
    setError(""); // Clear error on input change
  };

  // Handle OTP value change
  const handleOtpChange = (event) => {
    setOtp(event.target.value);
    setError(""); // Clear error on OTP input change
  };

  // Handle username, password, and confirm password for signup
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) =>
    setConfirmPassword(event.target.value);

  // Send OTP logic for signup
  const sendOtp = () => {
    alert("This Service is not available right now.");
    return;
    // if (!validateInput(value)) {
    //   setError(
    //     "Please enter a valid email address or a 10-digit phone number."
    //   );
    //   return;
    // }

    // console.log("Sending OTP to:", value);
    // setOtpSent(true); // Simulate OTP sending
  };

  // OTP validation logic for signup
  const handleSubmitOtp = () => {
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    console.log("Validating OTP:", otp);
    alert("OTP validated! Please complete the signup.");
  };

  // Login logic (with email or phone and password)
  const handleLoginSubmit = () => {
    if (password === "admin" && value === "nikhil@gmail.com") {
      console.log("Logging in with:", value, password);
      localStorage.setItem("isAlreadyLogin", "true");
      alert("Login successful!");
      setOpen(false); // Close the dialog
      setReloadDropDown(true);
    } else {
      setError("Password or email is incorrect.");
      alert("Password or email is incorrect!");
    }
  };

  // Sign Up validation and logic
  // const handleSignUp = () => {
  //   if (!username || !password || !confirmPassword) {
  //     setError("All fields are required for sign up.");
  //     return;
  //   }

  //   if (password !== confirmPassword) {
  //     setError("Passwords do not match.");
  //     return;
  //   }

  //   if (!isValidEmail(value) && !isValidPhone(value)) {
  //     setError("Please enter a valid email or phone number.");
  //     return;
  //   }

  //   // Simulate sign-up logic
  //   alert("Sign up successful!");
  //   setIsSignUp(false); // Switch back to login
  // };

  // Input validation (for both email and phone)
  const validateInput = (input) => {
    if (isValidEmail(input)) {
      return true; // Valid email
    } else if (isValidPhone(input)) {
      return true; // Valid phone number
    } else {
      return false; // Invalid input
    }
  };

  // Email validation regex
  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Phone validation for 10 digits
  const isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Handle toggle between Login and SignUp
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setError(""); // Reset any existing errors when toggling forms
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="sm"
      sx={{
        maxWidth: "37rem", // Set max width to 33rem
        margin: "auto", // Center the dialog horizontally
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontSize: "24px" }}>
        {isSignUp ? "Sign Up" : "Login"}
        <IconButton
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            color: "gray",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box>
          {/* Input for email or phone number */}
          <TextField
            fullWidth
            label={"Email or Phone Number"}
            variant="outlined"
            value={value}
            onChange={handleInputChange}
            type={isValidEmail(value) ? "email" : "tel"}
            sx={{
              margin: "8px auto 8px",
            }}
            error={!!error} // Display error if there's any
            helperText={error}
            inputProps={{
              maxLength: isValidPhone(value) ? 10 : undefined, // Limit phone input to 10 digits
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PhoneAndroidIcon />
                </InputAdornment>
              ),
            }}
          />

          {/* Conditional fields based on the form (OTP for SignUp, Password for Login) */}
          {isSignUp ? (
            <>
              {/* Show OTP field only after OTP is sent */}
              {otpSent ? (
                <TextField
                  fullWidth
                  label="OTP"
                  variant="outlined"
                  value={otp}
                  onChange={handleOtpChange}
                  sx={{
                    margin: "0px auto 8px",
                  }}
                  error={!!error}
                  helperText={error}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <VisibilityIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              ) : (
                <Button
                  onClick={sendOtp}
                  color="success"
                  variant="contained"
                  sx={{
                    margin: "0px auto 8px",
                  }}
                >
                  Send OTP
                </Button>
              )}
            </>
          ) : (
            // Password field for login
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              sx={{
                margin: "0px auto 8px",
              }}
              error={!!error}
              helperText={error}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOffIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}

          {/* SignUp specific fields */}
          {isSignUp && (
            <>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                sx={{
                  margin: "0px auto 8px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                sx={{
                  margin: "0px auto 8px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityOffIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                sx={{
                  margin: "0px auto 8px",
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <VisibilityOffIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: "inline-block",
          textAlign: "center",
          padding: "0px 24px 8px",
        }}
      >
        <Box>
          {/* <Button
            onClick={() => setOpen(false)}
            color="error"
            variant="outlined"
          >
            Cancel
          </Button>
          &nbsp; &nbsp; */}
          {/* Conditional buttons based on form (Send OTP or Submit OTP for SignUp, Login for Login) */}
          {!isSignUp ? (
            <Button
              onClick={handleLoginSubmit}
              color="success"
              variant="contained"
              fullWidth
              sx={{ borderRadius: "10rem" }}
            >
              Login
            </Button>
          ) : (
            <>
              {!otpSent ? (
                <Button
                  onClick={sendOtp}
                  color="success"
                  variant="contained"
                  fullWidth
                  sx={{ borderRadius: "10rem" }}
                >
                  Send OTP
                </Button>
              ) : (
                <Button
                  onClick={handleSubmitOtp}
                  color="success"
                  variant="contained"
                  fullWidth
                  sx={{ borderRadius: "10rem" }}
                >
                  Submit
                </Button>
              )}
            </>
          )}
        </Box>
        <Divider
          sx={{
            margin: "1rem auto 4px",
            borderColor: "gray",
          }}
        />
        <Box>
          {/* Toggle between Login and Sign Up */}
          <Button
            onClick={toggleForm}
            color="primary"
            variant="text"
            style={{ marginLeft: "auto", textTransform: "capitalize" }}
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

export default LoginPopup;
