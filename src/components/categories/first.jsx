import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { data } from "../../dummy-data/DummyData.js";
import { useLocation, useNavigate, useParams } from "react-router";
import ProductCard from "../generic-component/card/ProductCard.jsx";
import FilterBar from "../generic-component/card/FilterBar.jsx";
import { endpoints, fetchData } from "../../api/apiMethod.js";

export const First = ({}) => {
  // const navigate = useNavigate();
  const { slug } = useParams();
  const location = useLocation(); // Get the current route

  console.log(
    "slug----",
    slug,
    typeof slug,
    location,
    location.pathname.startsWith("/categories")
  );

  const [categoryData, setCategoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // Filtered data
  const [priceRange, setPriceRange] = useState({ min: null, max: null }); // Price range
  const [loading, setLoading] = useState(true); // Price range

  const [selectedCheckBox, setSelectedCheckBox] = useState(null);

  console.log("---------priceRange", priceRange, categoryData);

  useEffect(() => {
    const loadCategoryData = async () => {
      try {
        let result;
        if (location.pathname.startsWith("/categories")) {
          result = await fetchData(endpoints.getAllProductsByCategoryId + slug);
        } else if (location.pathname.startsWith("/products/productName")) {
          result = await fetchData(endpoints.getSearchProducts + slug);
        } else if (location.pathname === "/all-products") {
          result = await fetchData(endpoints.getAllProducts);
        } else {
          console.error("Unhandled route or slug type");
          result = { list: [] };
        }

        setCategoryData(result?.list || []);
        setFilteredData(result?.list || []); // Initialize filtered data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    loadCategoryData();
  }, [slug]);

  useEffect(() => {
    if (selectedCheckBox === "inStock") {
      const inStockProducts = categoryData.filter(
        (item) => item.inStock === true
      );
      setFilteredData(inStockProducts);
    } else if (selectedCheckBox === "outOfStock") {
      const inStockProducts = categoryData.filter(
        (item) => item.inStock === false
      );
      setFilteredData(inStockProducts);
    } else {
      setFilteredData(categoryData);
    }
  }, [selectedCheckBox, categoryData]);

  useEffect(() => {
    const { min, max } = priceRange;

    // Apply price range filter
    if (min || max) {
      const filtered = categoryData.filter((item) => {
        const price = item.offerPrice || 0;
        const isMinValid = min ? price >= min : true;
        const isMaxValid = max ? price <= max : true;
        return isMinValid && isMaxValid;
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(categoryData); // Reset filter if no price range is selected
    }
  }, [priceRange, categoryData]);

  return (
    <div>
      <Grid container item xs={11} sm={11} md={11} lg={11} margin="auto">
        <Typography variant="h4" sx={{ margin: "2rem" }}>
          First
        </Typography>
      </Grid>
      <Box sx={{ background: "#f3f3f3", padding: "1rem" }}>
        <Grid container item md={11} sx={{ margin: "auto" }}>
          <FilterBar
            selectedCheckBox={setSelectedCheckBox}
            minPrice={priceRange?.min}
            maxPrice={priceRange?.max}
            setPriceRange={setPriceRange}
          />
        </Grid>

        <Grid container item md={11} sx={{ margin: "auto" }}>
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <Box key={i}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    margin: "0.5rem",
                    width: "320px",
                    height: "370px",
                  }}
                />
              </Box>
            ))
          ) : filteredData?.length > 0 ? (
            filteredData?.map((data, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{ margin: "auto", padding: "0.5rem" }}
                // onClick={() => handleNavigate(index)}
              >
                <ProductCard
                  // url={data?.productImgUrl}
                  // label={data?.productImgCaption}
                  // heading={data?.productTitle}
                  // price={data?.offerPrice}
                  // description={data?.description}
                  // listPrice={data?.listPrice}
                  // name={data?.productName}
                  data={data}
                />
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
    </div>
  );
};
