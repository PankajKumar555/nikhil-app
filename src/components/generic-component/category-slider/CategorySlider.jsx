import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { endpoints, fetchData } from "../../../api/apiMethod";
import { useNavigate } from "react-router";

const CircularImage = styled("img")({
  borderRadius: "50%",
  width: "55px",
  height: "55px",
  objectFit: "cover",
  margin: "0 auto",
});

const GiftItemSlider = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData(endpoints.getProductIdentifier);
        setData(result?.list);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    loadData();
  }, []);

  const handleNavigate = (item, index) => {
    if (item?.identifierId) {
      navigate(`/identifier/${item.identifierId}`);
    } else {
      console.log("No path defined for index:", index);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        textAlign: "center",
        marginBottom: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          overflow: "auto",
          alignItems: "center",
        }}
      >
        {data?.map((item, index) => (
          <Box
            key={index}
            sx={{ padding: "1rem", width: "auto", cursor: "pointer" }}
            onClick={() => handleNavigate(item, index)}
          >
            <CircularImage src={item?.imgLink} alt={item?.identifierName} />
            <Typography
              variant="body2"
              sx={{ marginTop: "0.5rem", textWrap: "nowrap" }}
            >
              {item?.identifierName}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GiftItemSlider;
