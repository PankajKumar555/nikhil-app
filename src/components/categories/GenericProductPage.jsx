import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import ProductCard from "../generic-component/card/ProductCard.jsx";
import FilterBar from "../generic-component/card/FilterBar.jsx";
import { endpoints, fetchData } from "../../api/apiMethod.js";
import CloseIcon from "@mui/icons-material/Close";
import { currencySymbol } from "../generic-component/helper-function/HelperFunction.js";
import { UpIcon } from "../generic-component/up-icon/UpIcon.jsx";
import "./index.css";

export const GenericProductPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const categoryName = location?.state?.categoryName;
  const [dynamicSlug, setDynamicSlug] = useState(null);
  const [categoryData, setCategoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [childCategoryData, setChildCategoryData] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: null, max: 10000 });
  const [loading, setLoading] = useState(true);
  const [chlidCategoryName, setChlidCategoryName] = useState("");
  const [selectedCheckBox, setSelectedCheckBox] = useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedSort, setSelectedSort] = React.useState("none");
  const [selectedOption, setSelectedOption] = React.useState("");

  useEffect(() => {
    setDynamicSlug(slug);
  }, [slug]);

  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        if (dynamicSlug) {
          let result;
          if (location.pathname.startsWith("/categories")) {
            result = await fetchData(
              endpoints.getAllProductsByCategoryId + dynamicSlug
            );
          } else if (location.pathname.startsWith("/products/productName")) {
            result = await fetchData(endpoints.getSearchProducts + dynamicSlug);
          } else if (location.pathname.startsWith("/identifier")) {
            result = await fetchData(
              endpoints.getAllProductsIdentifier + dynamicSlug
            );
          } else {
            console.error("Unhandled route or dynamicSlug type");
            result = { list: [] };
          }
          setCategoryData(result?.list || []);
          setFilteredData(result?.list || []);
          setLoading(false);
        } else if (location.pathname === "/all-products") {
          let result = await fetchData(endpoints.getAllProducts);
          setCategoryData(result?.list || []);
          setFilteredData(result?.list || []);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };
    loadCategoryData();
  }, [dynamicSlug, location.pathname]);

  React.useEffect(() => {
    const loadChildCategoryData = async () => {
      try {
        if (
          dynamicSlug !== undefined &&
          dynamicSlug !== null &&
          !isNaN(dynamicSlug)
        ) {
          const result = await fetchData(
            endpoints.getChildCategories + dynamicSlug
          );
          setChildCategoryData(result?.list);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    loadChildCategoryData();
  }, [dynamicSlug]);

  useEffect(() => {
    let sortedData = [...categoryData];
    // Apply inStock or outOfStock filter
    if (selectedCheckBox === "inStock") {
      sortedData = sortedData.filter((item) => item.inStock === true);
    } else if (selectedCheckBox === "outOfStock") {
      sortedData = sortedData.filter((item) => item.inStock === false);
    }
    // Apply price range filter on top of the stock filter
    const { min, max } = priceRange;
    if (min || max) {
      sortedData = sortedData.filter((item) => {
        const price = item.offerPrice || 0;
        const isMinValid = min ? price >= min : true;
        const isMaxValid = max ? price <= max : true;
        return isMinValid && isMaxValid;
      });
    }
    setFilteredData(sortedData);
  }, [selectedCheckBox, priceRange, categoryData]);

  const handleSort = (type) => {
    let sortedData = [...filteredData];
    if (type === "lowToHigh") {
      sortedData.sort((a, b) => a.offerPrice - b.offerPrice);
    } else if (type === "highToLow") {
      sortedData.sort((a, b) => b.offerPrice - a.offerPrice);
    } else if (type === "aToZ") {
      sortedData.sort((a, b) => a.productName.localeCompare(b.productName));
    } else if (type === "zToA") {
      sortedData.sort((a, b) => b.productName.localeCompare(a.productName));
    } else if (type === "none") {
      sortedData = filteredData;
    }
    setFilteredData(sortedData);
    setSelectedSort(type);
  };

  const handleRemoveFilter = () => {
    setSelectedCheckBox(null);
    setChlidCategoryName("");
    setPriceRange({ min: null, max: 10000 });
    setSelectedOption("");
    setChlidCategoryName("");
    setDynamicSlug(slug);
    setSelectedCategory(null);
    setSelectedSort(null);
  };

  return (
    <div>
      <Grid container item xs={11} sm={11} md={11} lg={11} margin="auto">
        <Typography
          variant="h4"
          sx={{ margin: "2rem 0rem" }}
          className="categories-page-heading"
        >
          {categoryName}
        </Typography>
      </Grid>
      <Box
        sx={{
          background: "#f3f3f3",
          width: "100%",
        }}
      >
        <Grid container item md={11} sx={{ margin: "auto" }}>
          <FilterBar
            selectedCheckBox={setSelectedCheckBox}
            minPrice={priceRange?.min}
            maxPrice={priceRange?.max}
            setPriceRange={setPriceRange}
            childCategoryData={childCategoryData}
            setChlidCategoryId={setDynamicSlug}
            onSort={handleSort}
            setChlidCategoryName={setChlidCategoryName}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            selectedSort={selectedSort}
          />
        </Grid>
      </Box>
      <Box
        sx={{
          background: "#fff",
          // background: "#f3f3f3",
          padding: { xs: "4px", sm: "1rem" },
        }}
      >
        <Grid container item md={11} sx={{ margin: "auto" }}>
          <Box
            sx={{
              display: "contents",
              justifyContent: "left",
              alignItems: "center",
              margin: "0.5rem 0px 1rem",
            }}
          >
            {selectedCheckBox ? (
              <Typography
                variant="body2"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5rem",
                  padding: "4px 12px",
                  cursor: "pointer",
                  margin: "4px",
                }}
              >
                Availability: {selectedCheckBox} &nbsp;
                <CloseIcon
                  sx={{ fontSize: "16px" }}
                  onClick={() => {
                    setSelectedCheckBox(null);
                    setSelectedOption("");
                  }}
                />
              </Typography>
            ) : (
              ""
            )}
            {chlidCategoryName ? (
              <Typography
                variant="body2"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5rem",
                  padding: "4px 12px",
                  cursor: "pointer",
                  margin: "4px",
                }}
              >
                Category: {chlidCategoryName} &nbsp;
                <CloseIcon
                  sx={{ fontSize: "16px" }}
                  onClick={() => {
                    setChlidCategoryName("");
                    setDynamicSlug(slug);
                    setSelectedCategory(null);
                  }}
                />
              </Typography>
            ) : (
              ""
            )}
            {priceRange?.min && priceRange?.max ? (
              <Typography
                variant="body2"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5rem",
                  padding: "4px 12px",
                  cursor: "pointer",
                  margin: "4px",
                }}
              >
                {currencySymbol}
                {priceRange?.min} - {currencySymbol}
                {priceRange?.max} &nbsp;
                <CloseIcon
                  sx={{ fontSize: "16px" }}
                  onClick={() => setPriceRange({ min: null, max: 10000 })}
                />
              </Typography>
            ) : (
              ""
            )}
            {selectedSort !== "none" && selectedSort ? (
              <Typography
                variant="body2"
                sx={{
                  border: "1px solid gray",
                  borderRadius: "5rem",
                  padding: "4px 12px",
                  cursor: "pointer",
                  margin: "4px",
                }}
              >
                Sort by: {selectedSort} &nbsp;
                <CloseIcon
                  sx={{ fontSize: "16px" }}
                  onClick={() => {
                    setSelectedSort(null);
                    handleSort("none");
                  }}
                />
              </Typography>
            ) : (
              ""
            )}
            {priceRange?.min ||
            selectedCheckBox ||
            chlidCategoryName ||
            (selectedSort !== "none" && selectedSort) ? (
              <Typography
                variant="body2"
                sx={{
                  margin: "4px",
                  textDecoration: "underline",
                  cursor: "pointer",
                  alignContent: "center",
                }}
                onClick={handleRemoveFilter}
              >
                Remove All
              </Typography>
            ) : (
              ""
            )}
          </Box>
        </Grid>

        <Grid container item md={11} sx={{ margin: "auto" }}>
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <Box key={i} sx={{ margin: "auto" }}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    margin: "0.5rem",
                    width: { xs: "165px", sm: "320px" },
                    height: { xs: "300px", sm: "370px" },
                  }}
                />
              </Box>
            ))
          ) : filteredData?.length > 0 ? (
            filteredData?.map((data, index) => (
              <Grid
                key={index}
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                sx={{ margin: "", padding: "0.5rem" }}
              >
                <ProductCard data={data} />
              </Grid>
            ))
          ) : (
            <Typography
              variant="h5"
              sx={{ textAlign: "center", margin: "auto" }}
            >
              "No Data Found"
            </Typography>
          )}
        </Grid>
      </Box>
      <UpIcon />
    </div>
  );
};
