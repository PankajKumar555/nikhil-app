import React from "react";
import { RotatingLines } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div
      style={{
        position: "fixed", // Make the loader fixed on the screen
        top: "50%", // Center vertically
        left: "50%", // Center horizontally
        transform: "translate(-50%, -50%)", // Adjust to ensure exact centering
        zIndex: 9999, // Ensure it is above all other elements
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Optional: Semi-transparent background
        width: "100vw", // Full-screen width
        height: "100vh", // Full-screen height
        display: "flex", // Use flex for centering
        justifyContent: "center", // Horizontal centering
        alignItems: "center", // Vertical centering
      }}
    >
      <RotatingLines
        visible={true}
        height="90"
        width="90"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};
