import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Arrow icon for dropdown
import { Collapse } from "@mui/material"; // For collapsible submenus
import { useNavigate } from "react-router";
import { endpoints, fetchData } from "../../api/apiMethod";
import QuizIcon from "@mui/icons-material/Quiz";
import InfoIcon from "@mui/icons-material/Info";
import "./index.css";

const SideDrawer = ({ handleOpen, setClose }) => {
  const navigate = useNavigate();

  const [openDrafts, setOpenDrafts] = React.useState(false); // State to control "Drafts" dropdown
  const [openSubMenu, setOpenSubMenu] = React.useState(null); // State for controlling which category's submenu is open
  const [data, setData] = React.useState([]); // State for sub-menu

  const toggleDrawer = () => {
    setClose(false);
  };

  const handleNavigate = (path) => {
    toggleDrawer();
    navigate(path);
  };

  const toggleSubMenu = (categoryId) => {
    // Toggle the submenu for the clicked category
    setOpenSubMenu((prev) => (prev === categoryId ? null : categoryId)); // If the same submenu is clicked, close it, otherwise open the new one
  };

  React.useEffect(() => {
    // Fetching data when the component mounts
    const loadData = async () => {
      try {
        const result = await fetchData(endpoints.getAllCategoriesByDropdown); // Replace '/items' with your actual endpoint
        console.log("dropdown----->>>>", result);
        setData(result?.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {["🪟  Home Page", "🥷🏻  All Products"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            // onClick={() => handleNavigate(text)}
            onClick={() => handleNavigate(index === 0 ? "/" : "all-products")}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Drafts Item with dropdown toggle */}
        <ListItem disablePadding onClick={() => setOpenDrafts(!openDrafts)}>
          <ListItemButton>
            <ListItemText primary="🗂️  All Categories" />
            {/* Arrow Icon to indicate dropdown */}
            <ListItemIcon>
              <ExpandMoreIcon
                sx={{
                  transform: openDrafts ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        {/* Sub-menu for Drafts */}
        <Collapse in={openDrafts} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {data &&
              data.map((item) => (
                <div key={item.categoryId}>
                  {/* Category Item */}
                  <ListItem
                    sx={{
                      padding: "4px 16px",
                    }}
                    button
                    onClick={() =>
                      handleNavigate(`/categories/${item.categoryId}`)
                    }
                  >
                    <ListItemText primary={item.categoryName} sx={{ pl: 4 }} />
                    {/* Show dropdown arrow only if there are child categories */}
                    {item.childCategories &&
                      item.childCategories.length > 0 && (
                        <ListItemIcon>
                          <ExpandMoreIcon
                            onClick={(event) => {
                              event.stopPropagation(); // Prevent the click event from reaching the parent ListItem
                              toggleSubMenu(item.categoryId); // Toggle the submenu for this category
                            }}
                            // onClick={() => toggleSubMenu(item.categoryId)} // Toggle the submenu for this category
                            sx={{
                              transform:
                                openSubMenu === item.categoryId
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                              transition: "transform 0.3s",
                            }}
                          />
                        </ListItemIcon>
                      )}
                  </ListItem>

                  {/* Submenu for the category */}
                  {item.childCategories && item.childCategories.length > 0 && (
                    <Collapse
                      in={openSubMenu === item.categoryId}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {item.childCategories.map((subItem) => (
                          <ListItem
                            sx={{
                              padding: "4px 16px",
                            }}
                            key={subItem.categoryId}
                            button
                            onClick={() =>
                              handleNavigate(
                                `/categories/${subItem.categoryId}`
                              )
                            }
                          >
                            <ListItemText
                              primary={subItem.categoryName}
                              sx={{ pl: 8 }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </div>
              ))}
          </List>
        </Collapse>

        {["Faq", "About Us"].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            onClick={() => handleNavigate(text.toLowerCase().replace(" ", "-"))}
          >
            <ListItemButton>
              {index === 0 ? (
                <QuizIcon sx={{ color: "green" }} />
              ) : (
                <InfoIcon sx={{ color: "green" }} />
              )}{" "}
              &nbsp;
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={handleOpen} onClose={toggleDrawer}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideDrawer;
