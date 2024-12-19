import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartId } from "../../redux/slice/orderSlice";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  Grid,
  Chip,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { endpoints, fetchData, postData } from "../../api/apiMethod";
import { Link } from "@mui/material";
import { styled } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import ThankYou from "../../assets/thank-you.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import { useNavigate } from "react-router";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Custom Styled Components
const StyledContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  textAlign: "center",
  backgroundColor: "#fff",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "green",
  color: "#fff",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "green",
  },
}));

const ThankYouPage = () => {
  const [orderData, setOrderData] = useState();
  const cartId = useSelector(selectCartId); // Access the cartId from Redux
  const router = useNavigate();
  console.log("-----cartIdThank", cartId);

  React.useEffect(() => {
    if (cartId) {
      const getCartDetails = async () => {
        try {
          const result = await fetchData(endpoints.getCartDetails + cartId);
          setOrderData(result?.data);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };

      getCartDetails(); // Call the async function
    }
  }, [cartId]);

  React.useEffect(() => {
    if (cartId) {
      const getOrderDetails = async () => {
        try {
          const result = await fetchData(endpoints.getOrderDetails + cartId);
          // setOrderData(result?.data);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
      getOrderDetails(); // Call the async function
    }
  }, [cartId]);

  const handleNavigateHome = () => {
    router("/");
  };

  const handleNavigateContact = () => {
    router("/contact-us");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width; // Get the page width
    const rightMargin = 15; // Right margin offset

    // Adding company logo and name with the date at the top of the PDF
    doc.addImage(ThankYou, "JPEG", 15, 10, 30, 30); // Replace with actual company logo
    doc.setFontSize(16);
    doc.text("Your Company Name", 70, 30);
    doc.setFontSize(12);
    doc.text(new Date().toLocaleDateString(), 170, 30);

    // Add a new line for user info
    doc.setFontSize(11); // Font size for 'Order ID'
    doc.text(`Name: ${"Pankaj"}`, 15, 50);
    doc.text(`Phone: ${"123456789"}`, 15, 55);
    doc.text(`Email: ${"test@gmail.com"}`, 15, 60);
    doc.text(`Order ID: ${orderData?.cartId}`, 15, 65);

    // const userInfo = orderData.userInfo; // Assuming userInfo contains name, phone, email, and orderId
    const tableColumn = ["#", "Product ID", "Qty", "Unit Price"];
    const tableRows = [];

    orderData?.productList.forEach((item, index) => {
      const row = [index + 1, item.productId, item.noOfUnit, item.unitPrice];
      tableRows.push(row);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 75,
    });

    // Calculate Y-position below the table
    const tableEndY = doc.lastAutoTable.finalY + 5;

    // Add discount and total amount below the table
    const discount = orderData?.discount || 0; // Add discount from your data
    const totalAmount = orderData?.totalAmount || 0; // Add total amount from your data

    doc.setFontSize(12);
    doc.text(`Discount: ${discount}`, pageWidth - rightMargin, tableEndY, {
      align: "right",
    });
    doc.text(
      `Total Amount: ${totalAmount}`,
      pageWidth - rightMargin,
      tableEndY + 8,
      {
        align: "right",
      }
    );

    // Save the PDF
    doc.save(`Invoice_${orderData?.cartId}.pdf`);
  };

  return (
    <StyledContainer>
      {/* Icon */}
      <Box mb={1} mt={1}>
        {/* <EmailIcon sx={{ fontSize: 100, color: "#ff5e5e" }} /> */}
        <img
          src={ThankYou}
          alt="Thank You"
          style={{
            height: "auto",
            width: "5rem",
          }}
        />
      </Box>

      {/* Main Text */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Thank you for shooping!
      </Typography>
      <br />

      {/* Subtitle */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "90%",
        }}
      >
        <Typography variant="body1" color="textSecondary">
          Download Your Invoice.
        </Typography>{" "}
        &nbsp; &nbsp;
        <DownloadIcon
          fontSize="small"
          onClick={downloadPDF}
          sx={{ cursor: "pointer" }}
        />
      </Box>

      <TableContainer
        component={Paper}
        sx={{
          margin: "20px auto",
          maxWidth: "90%",
          "&::-webkit-scrollbar": { display: "none" }, // Hides the scrollbar for webkit browsers
        }}
      >
        <Typography variant="h6" sx={{ padding: "16px" }}>
          Order Details
        </Typography>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Unit Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData &&
              orderData.productList.map((item, index) => (
                <TableRow
                  key={item.productId}
                  sx={{
                    backgroundColor:
                      index % 2 === 0 ? "rgba(0, 0, 0, 0.04)" : "transparent",
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.productId}</TableCell>
                  <TableCell>{item.noOfUnit}</TableCell>
                  <TableCell>{item.unitPrice}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Back Home Button */}
      <StyledButton onClick={handleNavigateHome}>← Back Home</StyledButton>

      {/* Contact Link */}
      <Box mt={4}>
        <Typography variant="body2">
          If you have any issues{" "}
          <span
            onClick={handleNavigateContact}
            style={{
              cursor: "pointer",
              color: "blue",
            }}
          >
            contact us
          </span>
          .
        </Typography>
      </Box>
    </StyledContainer>
  );
};

export default ThankYouPage;
