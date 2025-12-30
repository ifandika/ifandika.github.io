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
            {/* DSA (Data Structure and Algorithms) */}
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>DSA (Data Structure and Algorithms) - Basics</i></a>
            </li>
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>DSA (Data Structure and Algorithms) - Asymptotic Notation</i></a>
            </li>
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>DSA (Data Structure and Algorithms) - Books, Magazine, Video, etc.</i></a>
            </li>
            
            <br />

            {/* System Design */}
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>System Design - UML (Unified Modeling Language)</i></a>
            </li>
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>System Design - Books, Magazine, Video, etc.</i></a>
            </li>

            <br />

            {/* Design Pattern */}
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>Design Pattern - Basics</i></a>
            </li>
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>Design Pattern - Books, Magazine, Video, etc.</i></a>
            </li>

            <br />

            {/* Database */}
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>Database/DBMS - Basics</i></a>
            </li>
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>Database/DBMS - Books, Magazine, Video, etc.</i></a>
            </li>

            <br />

            {/* Web Technology */}
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>Web Technology - Basics</i></a>
            </li>
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>Web Technology - Books, Magazine, Video, etc.</i></a>
            </li>

            <br />

            {/* API (Application Programming Interface) */}
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>API (Application Programming Interface) - Basics</i></a>
            </li>
            <li><a
              href="https://docs.google.com/document/d/1Dg_UEbevQCmsXydzccVvlxpZXkkmLjD2BXxncpj5hHs/edit?usp=sharing">
              <i>API (Application Programming Interface) - Books, Magazine, Video, etc.</i></a>
            </li>
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

          {/* Graphic Design */}
          <Typography variant="h6"><i>4. Graphic Design</i></Typography>
          <ul>
            <li><a
              href="https://docs.google.com/document/d/1JZ1qPHul7Gz1Byftann7_xralYDtk9qdQuubQKuo5wI/edit?usp=sharing">
              Tutorial Desain Grafis</a></li>
          </ul>
          
          {/* OPERATING SYSTEM */}
          <Typography variant="h6"><i>5. Operating Systems</i></Typography>
          <ul>
            <li><a
              href="https://docs.google.com/document/d/1U0nx3Wwed_DiWe5mHQSM002UQTdY9G0nJ9oPU9vyzIk/edit?usp=sharing">
              Tutorial Sistem Operasi Dasar</a></li>
          </ul>

          {/* ELEKTRONICS */}
          <Typography variant="h6"><i>5. Electronic</i></Typography>
          <ul>
            <li><a
              href="https://docs.google.com/document/d/1sFVDkWI6mUpwqvpid063zxIl0LdTTYqwc1ORVUF4FfI/edit?usp=sharing">
              Tutorial Elektronika Dasar</a></li>
          </ul>

          {/* ARDUINO */}
          <Typography variant="h6"><i>6. Arduino</i></Typography>
          <ul>
            <li><a
              href="https://docs.google.com/document/d/1U0nx3Wwed_DiWe5mHQSM002UQTdY9G0nJ9oPU9vyzIk/edit?usp=sharing">
              Tutorial Arduino Dasar</a></li>
          </ul>

        </Container>
      </main>
      <Footer />
    </>
  );
}
