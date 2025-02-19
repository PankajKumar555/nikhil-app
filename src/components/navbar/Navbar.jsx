import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import SideDrawer from "../drawer/Drawer";
import { useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Autocomplete,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { endpoints, fetchData } from "../../api/apiMethod";
import LoginPopup from "../login/LoginPopup";
import { useDispatch, useSelector } from "react-redux";
import { selectCount, setCount } from "../../redux/slice/countSlice";
import Logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import SearchBarMobileView from "./SearchBarMobileView";

export default function Navbar({ setReloadIsLoggedIn }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openSearchBar, setOpenSearchBar] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [optionList, setOptionList] = React.useState([]);
  const [reloadDropDown, setReloadDropDown] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState("");
  const [countValue, setCountValue] = React.useState(null);
  const navigate = useNavigate();
  const countreloadObject = useSelector(selectCount); // Access the orderId from Redux
  const countreloadFlag = countreloadObject?.count; // Access the orderId from Redux
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const uniqueKeyOptions = optionList?.map((item, index) => ({
    id: index,
    label: item,
  }));

  React.useEffect(() => {
    if (inputValue) {
      const loadSearchData = async () => {
        try {
          const result = await fetchData(
            endpoints.getProductListByNameSearch + inputValue
          );
          setOptionList(result?.list);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      loadSearchData();
    }
  }, [inputValue]);

  React.useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAlreadyLogin");
    setIsLoggedIn(isLoggedIn);
    setReloadDropDown(false);
    setReloadIsLoggedIn(true);
  }, [reloadDropDown, setReloadIsLoggedIn]);

  React.useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const totalCount = cart?.reduce((sum, obj) => sum + (obj.count || 0), 0);
    setCountValue(totalCount);
    dispatch(setCount(false));
  }, [countreloadFlag, dispatch]);

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
    navigate("/");
  };
  const handleLogin = () => {
    setOpenLogin(true);
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleLogout = () => {
    localStorage.removeItem("isAlreadyLogin");
    setAnchorEl(null);
    handleMobileMenuClose();
    setReloadDropDown(true);
    navigate("/");
  };
  const handleAdmin = () => {
    navigate("/admin");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleProfile = () => {
    navigate("/profile");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleNavigateCart = () => {
    navigate("/cart");
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSelectedSearchService = (serviceName) => {
    navigate(`/products/productName/${serviceName}`, {
      state: { categoryName: serviceName },
    });
  };

  const handleSearchBarMobile = () => {
    setOpenSearchBar(true);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
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
      {isLoggedIn === "true" ? (
        <MenuItem onClick={handleLogout} sx={{ width: "10rem" }}>
          Logout
        </MenuItem>
      ) : (
        <MenuItem onClick={handleLogin} sx={{ width: "10rem" }}>
          Login
        </MenuItem>
      )}
      {isLoggedIn === "true" ? (
        <MenuItem onClick={handleAdmin}>Admin</MenuItem>
      ) : (
        ""
      )}
      {isLoggedIn === "true" ? (
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
      ) : (
        ""
      )}
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
      sx={{
        top: "70px",
        left: "10px",
        width: "15rem",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleNavigateCart}>
        Cart
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={countValue} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>{" "}
      </MenuItem>
      {isLoggedIn === "true" ? (
        <MenuItem onClick={handleLogout} sx={{ width: "10rem" }}>
          Logout
        </MenuItem>
      ) : (
        <MenuItem onClick={handleLogin} sx={{ width: "10rem" }}>
          Login
        </MenuItem>
      )}
      {isLoggedIn === "true" ? (
        <MenuItem onClick={handleAdmin}>Admin</MenuItem>
      ) : (
        ""
      )}
      {isLoggedIn === "true" ? (
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
      ) : (
        ""
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <SideDrawer handleOpen={open} setClose={setClose} />
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          boxShadow: "0px 5px 10px -5px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar
          sx={{
            minHeight: { xs: "70px !important", sm: "90px !important" },
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
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
          {/* <Typography
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
          </Typography> */}
          <Box>
            <img
              onClick={handleNavigateToHome}
              src={Logo}
              alt="Logo"
              style={{
                height: isSmallScreen ? "3rem" : "4rem",
                width: "auto",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
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
              <Box component="li" {...props} key={option?.id}>
                <Typography variant="body1">{option?.label}</Typography>
              </Box>
            )}
            sx={{
              width: { xs: "100%", sm: "35%" },
              display: { xs: "none", sm: "block" },
              "& .MuiOutlinedInput-root": {
                borderRadius: "20rem",
              },
              "& .MuiOutlinedInput-input": {
                color: "#000",
              },
            }}
            renderInput={(params) => (
              <TextField {...params} label="Search Item..." />
            )}
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="search Items"
              aria-haspopup="true"
              onClick={handleSearchBarMobile}
              color="inherit"
              sx={{ display: { xs: "flex", sm: "none" } }}
            >
              <SearchIcon sx={{ color: "#000" }} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNavigateCart}
            >
              <Badge badgeContent={countValue} color="error">
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
          <Box sx={{ display: { xs: "none", md: "none" } }}>
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
      <LoginPopup
        open={openLogin}
        setOpen={setOpenLogin}
        setReloadDropDown={setReloadDropDown}
      />
      <SearchBarMobileView
        open={openSearchBar}
        close={() => setOpenSearchBar(false)}
      />
    </Box>
  );
}
