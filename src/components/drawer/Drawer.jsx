import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./index.css";
import { useNavigate } from "react-router";

const SideDrawer = ({ handleOpen, setClose }) => {
  const route = useNavigate();

  const toggleDrawer = () => {
    setClose(false);
  };

  const handleNavigate = () => {
    route("/all-collections");
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        {["Catalog", "All Collections", "Shop By Name", "Drafts"].map(
          (text, index) => (
            <ListItem key={text} disablePadding onClick={handleNavigate}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={handleOpen} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideDrawer;
