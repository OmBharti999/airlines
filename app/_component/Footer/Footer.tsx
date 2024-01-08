import React from "react";
import "./index.css";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="footer">© {currentYear} Copyright. All right reserved to Om.</footer>;
}
