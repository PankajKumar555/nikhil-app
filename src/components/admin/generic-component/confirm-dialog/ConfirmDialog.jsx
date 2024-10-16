import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, Button, Typography } from "@mui/material";

const ConfirmDialog = ({ openDialog, handleClose, handleDeleteOrder }) => {
  return (
    <React.Fragment>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xs"
        fullWidth
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "red", fontWeight: "bold" }}
            >
              Warning
            </Typography>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ color: "black" }}>
              Are you sure want to delete the item?
              <br />
              <br />
              <br />
            </Typography>
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="success" onClick={handleClose}>
              Cancel
            </Button>
            &nbsp; &nbsp;
            <Button
              variant="contained"
              color="success"
              onClick={handleDeleteOrder}
            >
              Confirm
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ConfirmDialog;
