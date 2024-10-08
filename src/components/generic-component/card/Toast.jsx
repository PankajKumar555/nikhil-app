import React from "react";
import { ToastContainer } from "react-toastify";

function Toast() {
  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition="Bounce"
      />
      <ToastContainer />
    </div>
  );
}

export default Toast;
