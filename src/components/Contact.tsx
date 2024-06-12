import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";

function Contact() {
  const theme = useTheme();

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Hi there,feel free to connect :)</p>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              p: 2,
              bgcolor: theme.palette.background.paper,
              boxShadow: 1,
              borderRadius: 1,
              color: theme.palette.text.primary,
            }}
          >
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <EmailIcon sx={{ mr: 1 }} style={{ color: "black" }} />
              {/* Email:{" "} */}
              <span style={{ color: "black" }}>Email:</span>{" "}
              <a
                href="mailto:sujithsam.joseph@gmail.com"
                style={{ marginLeft: 5, color: theme.palette.primary.main }}
              >
                sujithsam.joseph@gmail.com
              </a>
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
            >
              <PhoneIcon sx={{ mr: 1 }} style={{ color: "black" }} />
              {/* Mobile:{" "} */}
              <span style={{ color: "black" }}>Mobile:</span>{" "}
              <a
                href="tel:+918921129735"
                style={{ marginLeft: 5, color: theme.palette.primary.main }}
              >
                +91-8921129735
              </a>
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <WhatsAppIcon sx={{ mr: 1 }} style={{ color: "black" }} />
              {/* WhatsApp:{" "} */}
              <span style={{ color: "black" }}>WhatsApp:</span>{" "}
              <a
                href="https://wa.me/919447417831"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: 5, color: theme.palette.primary.main }}
              >
                +91-9447417831
              </a>
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
