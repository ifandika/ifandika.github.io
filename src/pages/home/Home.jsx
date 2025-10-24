import React from "react";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import {
  Grid,
  Container,
  Box,
  Chip,
  Stack,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import ifandikaImg from "../../assets/ifandika.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import certificateData from "../../assets/certificate.json";

export default function Home() {
  const isMobileLayout = useMediaQuery(useTheme().breakpoints.down("sm"));
  const ifandikaImgStyle = {
    width: "100%",
    height: "auto",
  };
  const chipValue = [
    "Front-End",
    "Back-End",
    "Java",
    "Graphic Design",
    "Software Engineering",
    "IoT",
    "Computer Networking",
  ];
  const chipStyle = {
    color: "white",
    margin: "5px",
  };
  const labelCertificateStyle = {
    color: "#595eeeff",
    fontWeight: "bold",
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Container sx={{ marginTop: "60px" }}>
          <Box sx={{ flexGrow: 2 }}>
            <Grid container {...(isMobileLayout ? { columns: true } : {})}>
              <Grid
                item
                size={7}
                sx={{ padding: isMobileLayout ? "0 0 20px 0" : "40px 0 0 0" }}
              >
                <p>Hey, i'am</p>
                <h1>Maulana Ifandika</h1>
                <h4>Student | Developer | IT Enthusiast</h4>
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  Welcome to my personal website. I love science, technology,
                  and mathematics, especially in the field of software
                  development. I prefer systems or back-end work, especially
                  those related to logic. Some of my interests include Software
                  Development (Mobile, Web), IoT, Artificial Intelligence,
                  Linux, Computer Networks, Graphic Design, Video Editing, and
                  more. I'm open to new things and always want to improve and be
                  useful.
                </p>
                <Stack
                  spacing={1}
                  direction={{ xs: "row", sm: "row" }}
                  sx={{
                    flexWrap: "wrap",
                    justifyContent: { xs: "center", sm: "flex-start" },
                    alignItems: { xs: "center", sm: "flex-start" },
                  }}
                >
                  {chipValue.map((value, key) => (
                    <Chip
                      key={key}
                      style={chipStyle}
                      variant="outlined"
                      label={value}
                    />
                  ))}
                </Stack>
              </Grid>
              <Grid
                item
                size={5}
                sx={{ padding: isMobileLayout ? "0" : "40px" }}
              >
                <img src={ifandikaImg} style={ifandikaImgStyle} />
                <p>This is me, I'm coding HTML bro...</p>
              </Grid>
            </Grid>
          </Box>

          <div>
            <h1>Certificate</h1>
            <div>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                {certificateData.slice().reverse().map((item) => (
                  <TimelineItem key={item.id}>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <span style={{ fontSize: "14px" }}>
                        <span style={labelCertificateStyle}>{item.result}</span>{" "}
                        <b>{item.name}</b> -<a href={item.link}> View</a>
                      </span>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          </div>
        </Container>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
