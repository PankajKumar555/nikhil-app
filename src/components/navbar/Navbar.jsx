import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import SideDrawer from "../drawer/Drawer";
import { useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Autocomplete, createFilterOptions, TextField } from "@mui/material";
import { endpoints, fetchData } from "../../api/apiMethod";
import SearchProducts from "../generic-component/search-product/SearchProducts";
import LoginPopup from "../login/LoginPopup";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: "10rem",
//   backgroundColor: alpha(theme.palette.common.white, 1),
//   border: "1px solid gray",
//   // "&:hover": {
//   //   backgroundColor: alpha(theme.palette.common.black, 0.25),
//   // },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   margin: "1.5rem auto",
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1.2, 1.2, 1.2, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "50ch",
//     },
//   },
// }));

// const top100Films = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Godfather: Part II", year: 1974 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "12 Angry Men", year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: "Pulp Fiction", year: 1994 },
// ];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  // const [keyWord, setKeyWord] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [optionList, setOptionList] = React.useState([]);
  // const [openSearchDialog, setOpenSearchDialog] = React.useState(false);
  // const [searchServiceList, setSearchServiceList] = React.useState([]);

  // const [serviceName, setServiceName] = React.useState("");

  const route = useNavigate();
  // const filter = createFilterOptions();
  // const [close, setClose] = React.useState();
  const uniqueKeyOptions = optionList?.map((item, index) => ({
    id: index,
    label: item,
  }));

  console.log("---------value", inputValue);

  React.useEffect(() => {
    if (inputValue) {
      const loadSearchData = async () => {
        try {
          const result = await fetchData(
            endpoints.getProductListByNameSearch + inputValue
          );
          console.log("---------resultSearch", result);
          setOptionList(result?.list);
          // setCategoryData(result?.list);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      loadSearchData();
    }
  }, [inputValue]); // Re-run when the slug changes

  // React.useEffect(() => {
  //   if (serviceName) {
  //     const loadSearchData = async () => {
  //       try {
  //         const result = await fetchData(
  //           endpoints.getSearchProducts + serviceName
  //         );
  //         console.log("---------serviceName", result);
  //         setSearchServiceList(result?.list);
  //         // setCategoryData(result?.list);
  //       } catch (error) {
  //         console.error("Error fetching service Name:", error);
  //       }
  //     };

  //     loadSearchData();
  //   }
  // }, [serviceName]); // Re-run when the slug changes

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawer = () => {
    setOpen(true);
  };

  const setClose = () => {
    setOpen(false);
  };
  const handleNavigateToHome = () => {
    route("/");
  };
  const handleLogin = () => {
    // route("/login");
    setOpenLogin(true);
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleAdmin = () => {
    route("/admin");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfile = () => {
    route("/profile");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNavigateCart = () => {
    route("/cart");
  };

  const handleSelectedSearchService = (serviceName) => {
    console.log("---------search", serviceName);
    // setOpenSearchDialog(true);
    // setServiceName(serviceName);
    // route("/products/productName/:slug");
    route(`/products/productName/${serviceName}`);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      // anchorOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
      id={menuId}
      keepMounted
      // transformOrigin={{
      //   vertical: "top",
      //   horizontal: "right",
      // }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      slotProps={{
        paper: {
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
      <MenuItem onClick={handleLogin} sx={{ width: "10rem" }}>
        Login
      </MenuItem>
      <MenuItem onClick={handleAdmin}>Admin</MenuItem>
      <MenuItem onClick={handleProfile}>Profile</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        {/* <p>Notifications</p> */}
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SideDrawer handleOpen={open} setClose={setClose} />
      <AppBar
        position="static"
        sx={{
          background: "#fff",
        }}
      >
        <Toolbar
          sx={{
            minHeight: "90px !important",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
                cursor: "pointer",
                color: "black",
              },
            }}
            onClick={handleNavigateToHome}
          >
            MUI
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "black" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Products"
              inputProps={{ "aria-label": "search" }}
              sx={{ color: "#000" }}
            />
          </Search> */}
          <Autocomplete
            freeSolo={true}
            onInputChange={(event, newInputValue, reason) => {
              if (reason === "clear") {
                setInputValue("");
                setOptionList([]);
              } else {
                setInputValue(newInputValue.toLowerCase());
              }
            }}
            onChange={(event, newValue) => {
              if (newValue) {
                // Update input value with full label of the selected option
                handleSelectedSearchService(newValue?.label);
              }
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={uniqueKeyOptions ?? []}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              }
              return option?.label ?? "";
            }}
            renderOption={(props, option) => (
              <Box
                component="li"
                {...props}
                key={option?.id}
                // onClick={() => handleSelectedSearchService(option?.label)}
              >
                <Typography variant="body1">{option?.label}</Typography>
              </Box>
            )}
            sx={{
              width: "35%",
              // borderRadius: "10rem", // Set border radius here
              // border: "1px solid #000", // Set border color
              "& .MuiOutlinedInput-root": {
                // border: "1px solid #000",
                borderRadius: "20rem",
              },
              "& .MuiOutlinedInput-input": {
                color: "#000", // Set text color inside the input field
              },
              // "& .MuiAutocomplete-listbox": {
              //   backgroundColor: "red", // Set background color for the dropdown
              // },
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search Item..." />
            )}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNavigateCart}
            >
              <Badge badgeContent={17} color="error">
                <ShoppingCartIcon sx={{ color: "#000" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: "#000" }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* <SearchProducts
        openSearchDialog={openSearchDialog}
        handleCloseSearchDialog={() => setOpenSearchDialog(false)}
        searchServiceList={searchServiceList}
        setSearchServiceList={setSearchServiceList}
        setServiceName={setServiceName}
        setInputValue={setInputValue}
      /> */}
      <LoginPopup open={openLogin} setOpen={setOpenLogin} />
    </Box>
  );
}
