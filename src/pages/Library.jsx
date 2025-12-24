import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  Grid,
  Container,
  Box,
  Chip,
  Stack,
  Card,
  CardContent,
  Typography,
  Link,
} from "@mui/material";

export default function Library() {
  return (
    <>
      <Header />
      <main>
        <Container sx={{ marginTop: "100px" }}>
          <Typography variant="h4">Library</Typography>

          <hr />
          
          {/* COMPUTER SCIENCE */}
          <Typography variant="h6"><i>1. Computer Science</i></Typography>
          <ul>
            <li><a href=""></a></li>
          </ul>

          {/* PYTHON PROGRAMMING LANGUAGE */}
          <Typography variant="h6"><i>2. Python Programming Language</i></Typography>
          <ul>
            <li><a
              href="https://docs.google.com/document/d/1U0nx3Wwed_DiWe5mHQSM002UQTdY9G0nJ9oPU9vyzIk/edit?usp=sharing">
              Tutorial Bahasa Pemrograman Python</a></li>
          </ul>

          {/* ENGLISH LANGUAGE */}
          <Typography variant="h6"><i>3. English Language</i></Typography>
          <ul>
            <li><a
              href="https://docs.google.com/document/d/1Kp-yWuB7kd75DcvQsX9KcB4nHzNna9j_Q1ipAa_6-m4/edit?usp=sharing">
              Tutorial Bahasa Inggris</a></li>
          </ul>

          {/* Applications */}
          <Typography variant="h6"><i>3. Applications</i></Typography>
          <ul>
            <li><a
              href="https://docs.google.com/document/d/1rmpfANIikvl8pVXDhdMXRBkfIZtFads-t3GeTjQo35Y/edit?usp=sharing">
              Tutorial Git Bash</a></li>
          </ul>

        </Container>
      </main>
      <Footer />
    </>
  );
}
