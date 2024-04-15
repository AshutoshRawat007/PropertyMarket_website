import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        backgroundColor: "#f0f0f0", // Lighter background color
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ width: "200px", height: "200px", marginBottom: "20px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <path
          d="M256 8C119.039 8 8 119.039 8 256s111.039 248 248 248 248-111.039 248-248S393.961 8 256 8zM353.854 208.146L272 272L190.146 208.146c-12.509-12.509-32.475-12.509-44.985 0s-12.509 32.475 0 44.985L224 317.015l83.854 83.854c12.509 12.509 32.475 12.509 44.985 0s12.509-32.475 0-44.985zM256 352c-75.69 0-136-60.31-136-136 0-75.69 60.31-136 136-136 75.69 0 136 60.31 136 136 0 75.69-60.31 136-136 136z"
        />
      </motion.svg>

      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Oops! We can't seem to find that page.
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Looks like you've stumbled upon a broken link or an incorrect URL. Don't worry, these things happen!
      </p>
      <nav style={{ marginBottom: "30px" }}>
        <ul style={{ listStyle: "none", padding: "0", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <li style={{ marginBottom: "10px" }}>
            <Link to="/" style={{ color: "#333", textDecoration: "none" }}>
              Return to Homepage
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NotFound;
