import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectOrderId } from "../../redux/slice/orderIdSlice";
import {
  Box,
  Typography,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { endpoints, fetchData } from "../../api/apiMethod";
import { styled } from "@mui/system";
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
  const orderId = useSelector(selectOrderId); // Access the orderId from Redux
  const router = useNavigate();

  React.useEffect(() => {
    if (orderId) {
      const getOrderDetails = async () => {
        try {
          const result = await fetchData(endpoints.getOrderDetails + orderId);
          setOrderData(result?.data);
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
      getOrderDetails(); // Call the async function
    }
  }, [orderId]);

  const handleNavigateHome = () => {
    router("/");
  };

  const handleNavigateContact = () => {
    router("/contact-us");
  };

  const downloadPDF = async () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const rightMargin = 15;

    // Add logo and company details
    const logoWidth = 30;
    const logoHeight = 35;
    const logoX = 15;
    const logoY = 10;
    const companyNameX = 90;
    const companyNameY = 30;

    doc.addImage(ThankYou, "JPEG", logoX, logoY, logoWidth, logoHeight);
    doc.setFontSize(16);
    doc.text("Shubhiksha", companyNameX, companyNameY);

    // Add date
    doc.setFontSize(10);
    doc.text(
      new Date().toLocaleDateString(),
      pageWidth - rightMargin,
      companyNameY,
      {
        align: "right",
      }
    );

    // Add customer details
    const detailsStartY = logoY + logoHeight + 10;
    doc.setFontSize(11);
    doc.text(`Name: ${orderData?.custName}`, 15, detailsStartY);
    doc.text(`Phone: ${orderData?.custPhone}`, 15, detailsStartY + 5);
    doc.text(`Email: ${orderData?.custEmail}`, 15, detailsStartY + 10);
    doc.text(`Order ID: ${orderData?.orderId}`, 15, detailsStartY + 15);

    // Add customer address
    const addressStartY = detailsStartY + 25;
    doc.setFontSize(12);
    doc.text("Address:", 15, addressStartY);
    doc.setFontSize(11);
    doc.text(`House: ${orderData?.custAddress}`, 15, addressStartY + 5);
    doc.text(`City: ${orderData?.custCity}`, 15, addressStartY + 10);
    doc.text(`State: ${orderData?.custState}`, 15, addressStartY + 15);
    doc.text(`Pincode: ${orderData?.custPincode}`, 15, addressStartY + 20);
    doc.text(`GST: ${orderData?.custGst}`, 15, addressStartY + 25);

    // Prepare the table columns
    const tableColumn = [
      "#",
      "Product ID",
      "Product Name",
      "Image",
      "Unit Price",
      "Qty",
      "Total Price",
    ];
    const tableRows = [];

    // Function to fetch the image in base64 format
    const fetchImageBase64 = async (url) => {
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      } catch (error) {
        console.error("Error fetching image:", error);
        return ""; // Return empty string if there's an error
      }
    };

    // Add product details to the table rows
    for (const [
      index,
      item,
    ] of orderData?.cartDetails?.productList?.entries()) {
      if (item?.productImg) {
        const imageBase64 = await fetchImageBase64(item?.productImg);
        tableRows.push([
          index + 1,
          item?.productId,
          item?.productName,
          imageBase64, // Store Base64 for the image
          item.unitPrice,
          item.noOfUnit,
          item.unitPrice * item.noOfUnit,
        ]);
      } else {
        tableRows.push([
          index + 1,
          item?.productId,
          item?.productName,
          "", // No image if not available
          item.unitPrice,
          item.noOfUnit,
          item.unitPrice * item.noOfUnit,
        ]);
      }
    }

    // Add the table with the fetched images
    const tableStartY = addressStartY + 35;

    await doc.autoTable({
      head: [tableColumn],
      body: tableRows.map((row) => {
        const [
          index,
          productId,
          productName,
          imageBase64,
          unitPrice,
          qty,
          totalPrice,
        ] = row;
        return [
          index,
          productId,
          productName,
          "", // Placeholder for the image
          unitPrice,
          qty,
          totalPrice,
        ];
      }),
      startY: tableStartY,
      styles: {
        minCellHeight: 15, // Set minimum cell height for rows
      },
      didDrawCell: (data) => {
        console.log("Cell Data:", data); // Log the cell data to check its structure

        if (
          data?.column?.index === 3 && // Check if it's the "Image" column
          data?.row?.section === "body" // Ensure it's a body row
        ) {
          const rowIndex = data.row.index;
          const imageBase64 = tableRows[rowIndex]
            ? tableRows[rowIndex][3]
            : null;
          const cellHeight = data.cell.height;
          const cellWidth = data.cell.width;

          if (imageBase64) {
            const imgWidth = 10; // Desired image width
            const imgHeight = 10; // Desired image height

            const x = data.cell.x + (cellWidth - imgWidth) / 2; // Center align horizontally
            const y = data.cell.y + (cellHeight - imgHeight) / 2; // Center align vertically

            try {
              doc.addImage(
                imageBase64,
                "JPEG",
                x,
                y,
                imgWidth,
                imgHeight,
                undefined,
                "FAST"
              );
            } catch (err) {
              console.error("Error adding image:", err);
            }
          }
        }
      },
    });

    // Add summary below the table
    const tableEndY = doc.lastAutoTable.finalY + 10;
    const discount = orderData?.discount || 0;
    const totalAmount = orderData?.orderAmount || 0;

    doc.setFontSize(12);
    doc.text(`Discount: ${discount}`, pageWidth - rightMargin, tableEndY, {
      align: "right",
    });
    doc.text(
      `Total Amount: ${totalAmount}`,
      pageWidth - rightMargin,
      tableEndY + 10,
      {
        align: "right",
      }
    );

    // Save the PDF
    doc.save(`Invoice_${orderData?.orderId}.pdf`);
  };

  return (
    <StyledContainer>
      <Box mb={1} mt={1}>
        <img
          src={ThankYou}
          alt="Thank You"
          style={{
            height: "auto",
            width: "5rem",
          }}
        />
      </Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Thank you for shooping!
      </Typography>
      <br />
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
          "&::-webkit-scrollbar": { display: "none" },
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
              <TableCell>Product Name</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Unit Price</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>Total price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderData &&
              orderData?.cartDetails?.productList.map((item, index) => (
                <TableRow
                  key={item.productId}
                  sx={{
                    backgroundColor:
                      index % 2 === 0 ? "rgba(0, 0, 0, 0.04)" : "transparent",
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item?.productId}</TableCell>
                  <TableCell>{item?.productName}</TableCell>
                  <TableCell>
                    <img
                      src={item?.productImg}
                      alt={item?.productName}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "contain",
                      }}
                    />
                  </TableCell>
                  <TableCell>{item?.unitPrice}</TableCell>
                  <TableCell>{item?.noOfUnit}</TableCell>
                  <TableCell>{item?.unitPrice * item?.noOfUnit}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledButton onClick={handleNavigateHome}>← Back Home</StyledButton>
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
