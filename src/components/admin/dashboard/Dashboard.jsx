import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Summary from "../summery/Summery";
import { Bar } from "react-chartjs-2"; // Assuming you use chart.js for the growth graph
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import RecentOrdersTable from "../recent-orders/RecentOrders";
// import RecentOrdersTable from "./recent-orders/RecentOrders";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Dashboard = () => {
  // Sample data for the growth graph
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
    ],
    datasets: [
      {
        label: "Growth",
        data: [0, 10, 5, 2, 20, 30, 45, 2, 20, 30, 45, 50],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,0.2)",
      },
    ],
  };
  return (
    <>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography
          variant="h4"
          sx={{ margin: "1rem", color: "#808080b3", fontWeight: "bold" }}
        >
          DashBoard
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={5}>
        <Summary />
      </Grid>
      <Grid item xs={12} sm={12} md={8} lg={7}>
        <Paper style={{ padding: 20, margin: "1rem" }}>
          <Typography variant="h5">Growth Chart</Typography>
          <Bar data={data} />
        </Paper>
      </Grid>
      <Grid
        item
        spacing={3}
        style={{ padding: 20 }}
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <RecentOrdersTable />
      </Grid>
    </>
  );
};
