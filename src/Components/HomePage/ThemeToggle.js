import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        position: "fixed",
        top: "50%", // Vertical center
        left: "20px", // Distance from the left side of the screen
        transform: "translateY(-50%)", // Centering vertically
        zIndex: 1000, // Ensure it appears above other elements
      }}
    >
      <div
        onClick={toggleTheme}
        style={{
          position: "relative",
          width: "80px",
          height: "40px",
          backgroundColor: theme === "dark" ? "#fff" : "#333",
          borderRadius: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "5px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <FaSun
          style={{
            color: "#EAB308",
            position: "absolute",
            left: "10px",
            transition: "all 0.3s ease",
            opacity: theme === "light" ? 1 : 1,
          }}
          size={20}
        />

        <FaMoon
          style={{
            color: "#FFF",
            position: "absolute",
            right: "10px",
            transition: "all 0.3s ease",
            opacity: theme === "dark" ? 1 : 0.5,
          }}
          size={20}
        />

        <div
          style={{
            position: "absolute",
            top: "5px",
            left: theme === "light" ? "5px" : "calc(100% - 35px)",
            width: "30px",
            height: "30px",
            backgroundColor: theme === "dark" ? "#000" : "orange",
            borderRadius: "50%",
            transition: "all 0.3s ease",
          }}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;
