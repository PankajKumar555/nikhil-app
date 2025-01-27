import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router";
import { endpoints, fetchData } from "../../api/apiMethod";

export default function SearchBarMobileView({ open, close }) {
  const [searchServices, setSearchServices] = React.useState("");
  const [optionList, setOptionList] = useState([]);
  const navigate = useNavigate();
  const uniqueKeyOptions = optionList?.map((item, index) => ({
    id: index,
    label: item,
  }));

  const toggleDrawer = (newOpen) => () => {
    close(newOpen);
    setSearchServices("");
    setOptionList([]);
  };

  const handleSelectedSearchService = (serviceName) => {
    close(false);
    setSearchServices("");
    setOptionList([]);
    navigate(`/products/productName/${serviceName}`, {
      state: { categoryName: serviceName },
    });
  };

  const handleClearSearch = () => {
    setSearchServices("");
    setOptionList([]);
  };

  const handleSearchInputServices = (e) => {
    setSearchServices(e.target.value.toLowerCase());
  };

  React.useEffect(() => {
    if (searchServices) {
      const loadSearchData = async () => {
        try {
          const result = await fetchData(
            endpoints.getProductListByNameSearch + searchServices
          );
          setOptionList(result?.list);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
      loadSearchData();
    }
  }, [searchServices]);

  const DrawerList = (
    <Box sx={{ width: "100vw" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          padding: "0.5rem 0.5rem 0.6rem",
          position: "fixed",
          background: "white",
          width: "100%",
          boxShadow: "1px 1px 5px 1px rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            background: "#fff",
            borderRadius: "10rem",
            padding: "4px",
            fontSize: "30px",
            cursor: "pointer",
            color: "black",
            border: "1px solid gray",
          }}
          onClick={toggleDrawer(false)}
        />
        <TextField
          id="standard-basic"
          label="Search for services"
          variant="standard"
          color="success"
          sx={{ width: "100%", marginLeft: "1rem" }}
          value={searchServices}
          onChange={handleSearchInputServices}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClearSearch}>
                  <CloseIcon sx={{ color: "gray", marginRight: "0.5rem" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        sx={{
          marginTop: "4rem",
        }}
      >
        <List>
          {uniqueKeyOptions && uniqueKeyOptions?.length > 0 ? (
            uniqueKeyOptions?.map((item, i) => (
              <ListItem
                key={i}
                disablePadding
                onClick={() => handleSelectedSearchService(item?.label)}
              >
                <ListItemButton>
                  <ListItemText
                    primary={item?.label}
                    sx={{ paddingLeft: "0.5rem" }}
                  />
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
              }}
            >
              <Typography variant="body1">Search For Products...</Typography>
            </Box>
          )}
        </List>
      </Box>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
