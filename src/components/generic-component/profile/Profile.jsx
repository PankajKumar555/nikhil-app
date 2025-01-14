import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("1234567890");
  const [address, setAddress] = useState("123 Main St, Springfield");
  console.log("address", address);
  const [addresses, setAddresses] = useState([
    "123 Main St, Springfield",
    "456 Oak Ave, Rivertown",
  ]);

  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");
  const [openAddressDialog, setOpenAddressDialog] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [editingAddress, setEditingAddress] = useState(null);

  // Handle file upload (for profile picture)
  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle input changes for name, email, and phone
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);

  // Open address change dialog for adding a new address or editing
  const handleChangeAddress = () => {
    setOpenAddressDialog(true);
  };

  // Close address change dialog
  const handleCloseDialog = () => {
    setOpenAddressDialog(false);
    setNewAddress("");
    setEditingAddress(null);
  };

  // Save new address or edited address
  const handleSaveNewAddress = () => {
    if (newAddress) {
      if (editingAddress !== null) {
        // Edit existing address
        const updatedAddresses = addresses.map((addr, index) =>
          index === editingAddress ? newAddress : addr
        );
        setAddresses(updatedAddresses);
      } else {
        // Add new address
        setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
      }
      setAddress(newAddress); // Set the selected address as the current address
      handleCloseDialog();
    } else {
      setError("Address cannot be empty.");
    }
  };

  // Delete address
  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) =>
      prevAddresses.filter((_, i) => i !== index)
    );
  };

  // Handle profile update
  const handleSaveProfile = () => {
    // Validation logic for name, email, and phone
    if (!name || !email || !phone) {
      setError("All fields are required.");
      return;
    }
    alert("Profile updated successfully!");
  };

  return (
    <Container
      sx={{
        mt: 2,
      }}
    >
      <Grid container spacing={3} mt={5} margin="auto">
        {/* Left Section: Profile Picture */}
        <Grid item xs={12} sm={5} container justifyContent="center">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              sx={{ width: 250, height: 250, mb: 2 }}
              src={profilePic || "/default-avatar.png"}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="profile-pic-input"
              type="file"
              onChange={handleProfilePicChange}
            />
            <label htmlFor="profile-pic-input">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCameraIcon />
              </IconButton>
            </label>
          </Box>
        </Grid>

        {/* Right Section: User Details and Address */}
        <Grid item xs={12} sm={5} margin="auto">
          <Box>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phone}
              onChange={handlePhoneChange}
              margin="normal"
              inputProps={{ maxLength: 10 }}
            />

            {/* Display Address */}
            {/* <Typography variant="h6" gutterBottom mt={3}>
              Address: {address}
            </Typography> */}

            {error && <Typography color="error">{error}</Typography>}

            {/* Address List */}
            <Box mt={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "1rem",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Saved Addresses:
                </Typography>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleChangeAddress}
                >
                  Add New Address
                </Button>
              </Box>
              <Box>
                {addresses.map((address, index) => (
                  <Paper
                    key={index}
                    elevation={3}
                    sx={{
                      p: 2,
                      mb: 2,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography>{address}</Typography>
                    <Box>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                          setNewAddress(address);
                          setEditingAddress(index);
                          setOpenAddressDialog(true);
                        }}
                        sx={{ marginRight: 1 }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => handleDeleteAddress(index)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* Save Profile Button */}
      <Box
        mt={8}
        sx={{
          margin: "1rem auto",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          color="success"
          onClick={handleSaveProfile}
          sx={{
            width: "50%",
            padding: "8px",
            margin: "auto",
          }}
        >
          Save Profile
        </Button>
      </Box>
      {/* Address Change Dialog */}
      <Dialog
        open={openAddressDialog}
        onClose={handleCloseDialog}
        fullWidth="sm"
      >
        <DialogTitle>
          {editingAddress !== null ? "Edit Address" : "Add New Address"}
        </DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="New Address"
            variant="outlined"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
            margin="normal"
            error={!!error}
            helperText={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="error" variant="contained">
            Cancel
          </Button>
          <Button
            onClick={handleSaveNewAddress}
            color="success"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ProfilePage;
