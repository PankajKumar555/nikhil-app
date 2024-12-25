import * as React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Divider,
  IconButton,
  Skeleton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchProductsList from "./SearchProductsList";

const SearchProducts = ({
  openSearchDialog,
  handleCloseSearchDialog,
  searchServiceList,
  setSearchServiceList,
  setServiceName,
  setInputValue,
}) => {
  const theme = useTheme();
  const screenWidth = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseDialog = () => {
    handleCloseSearchDialog();
    setSearchServiceList([]);
    setServiceName("");
  };

  return (
    <React.Fragment>
      <Dialog
        open={openSearchDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll={screenWidth ? "paper" : "body"}
        maxWidth="sm"
        fullWidth
        sx={{
          display: { xs: "none", sm: "block" },
          "@media (max-width: 600px)": {
            "& .MuiDialog-paper": {
              width: "100%",
              height: "100%",
              maxHeight: "100%",
              maxWidth: "100%",
              margin: 0,
            },
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Box
            sx={{
              width: "-webkit-fill-available",
              textAlign: "end",
              padding: "0.5rem 0.5rem 0px 0px",
              position: "absolute",
            }}
          >
            <IconButton onClick={handleCloseDialog}>
              <CloseIcon sx={{ cursor: "pointer", color: "#15741a" }} />
            </IconButton>
          </Box>
          {searchServiceList && searchServiceList.length > 0
            ? searchServiceList?.map((item, index) => (
                <SearchProductsList
                  item={item}
                  key={index}
                  setInputValue={setInputValue}
                  handleCloseDialog={handleCloseDialog}
                />
              ))
            : Array.from({ length: 5 }).map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    margin: "2rem 1rem",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "left",
                      alignItems: "center",
                    }}
                  >
                    <Skeleton
                      variant="rounded"
                      sx={{
                        margin: "0.5rem",
                        width: "5rem",
                        height: "5rem",
                      }}
                    />
                    <Box>
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          margin: "0.5rem",
                          width: "300px",
                          height: "40px",
                        }}
                      />
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          margin: "0.5rem",
                          width: "300px",
                          height: "30px",
                        }}
                      />
                    </Box>
                    <Skeleton
                      variant="rectangular"
                      sx={{
                        margin: "0.5rem",
                        width: "7rem",
                        height: "2rem",
                      }}
                    />
                  </Box>
                  <br />
                  <Divider />
                </Box>
              ))}
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

export default SearchProducts;
