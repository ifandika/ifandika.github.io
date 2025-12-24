import React from "react";
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
  Icon,
} from "@mui/material";
import ifandikaImg from "../assets/ifandika.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import certificateData from "../assets/certificate.json";
import galleriesData from "../assets/galleries.json";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  const isMobileLayout = useMediaQuery(useTheme().breakpoints.down("sm"));
  const ifandikaImgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
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
  const imgDailyStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  };

  return (
    <>
      <main>
        <Container sx={{ marginTop: "60px" }}>
          {/* START: INTRODUCTION */}
          <Box sx={{ flexGrow: 2 }}>
            <Grid container {...(isMobileLayout ? { columns: true } : {})}>
              <Grid
                item
                size={7}
                sx={{ padding: isMobileLayout ? "0 0 20px 0" : "40px 0 0 0" }}>
                <p>Hey, i'am</p>
                <h1>Maulana Ifandika</h1>
                <h4>Student | Developer | IT Enthusiast</h4>
                <p
                  style={{
                    textAlign: "justify",
                  }}>
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
                  }}>
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

              {/* START: IMAGE IFANDIKA */}
              <Grid
                item
                size={5}
                sx={{ padding: isMobileLayout ? "0" : "40px" }}>
                <img src={ifandikaImg} style={ifandikaImgStyle} />
                <p>This is me, I'm coding HTML bro...</p>
              </Grid>
            </Grid>
          </Box>

          {/* START: SOCIAL MEDIA */}
          <Box sx={{ flexGrow: 2 }}>
            <h1>Social Media</h1>
            <Grid container {...(isMobileLayout ? { columns: true } : {})} spacing={2}>
              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://www.instagram.com/ifandika.m/" style={{ textDecoration: "none", color: "white" }}>
                  <InstagramIcon sx={{ fontSize: 35 }} />
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://www.youtube.com/@be.expertz" style={{ textDecoration: "none", color: "white" }}>
                  <YouTubeIcon sx={{ fontSize: 35 }} />
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://www.linkedin.com/in/maulana-ifandika/" style={{ textDecoration: "none", color: "white" }}>
                  <LinkedInIcon sx={{ fontSize: 35 }} />
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://github.com/ifandika/" style={{ textDecoration: "none", color: "white" }}>
                  <GitHubIcon sx={{ fontSize: 35 }} />
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://www.threads.com/@ifandika.m" style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-threads"
                    viewBox="0 0 16 16">
                    <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                  </svg>
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://medium.com/@ifandika" style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-medium"
                    viewBox="0 0 16 16">
                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
                  </svg>
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://discord.com/users/ifandika" style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-discord"
                    viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                  </svg>
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://stackoverflow.com/users/21181594/maulana-ifandika" style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    class="bi bi-stack-overflow"
                    viewBox="0 0 16 16">
                    <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z" />
                    <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z" />
                  </svg>
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://leetcode.com/u/Ifandika/" style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35"
                    height="35"
                    id="leetcode">
                    <path
                      fill="#ffffffff"
                      d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"></path>
                    <path
                      fill="#ffffffff"
                      d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"></path>
                    <path
                      fill="#ffffffff"
                      d="M8.115 22.814a2.109 2.109 0 0 1-.474-.361c-1.327-1.333-2.66-2.66-3.984-3.997-1.989-2.008-2.302-4.937-.786-7.32a6 6 0 0 1 .839-1.004L13.333.489c.625-.626 1.498-.652 2.079-.067.56.563.527 1.455-.078 2.066-.769.776-1.539 1.55-2.309 2.325-.041.122-.14.2-.225.287-.863.876-1.75 1.729-2.601 2.618-.111.116-.262.186-.372.305-1.423 1.423-2.863 2.83-4.266 4.272-1.135 1.167-1.097 2.938.068 4.127 1.308 1.336 2.639 2.65 3.961 3.974.067.067.136.132.204.198.468.303.474 1.25.183 1.671-.321.465-.74.75-1.333.728-.199-.006-.363-.086-.529-.179z"></path>
                  </svg>
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://www.hackerrank.com/profile/Ifandika" style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35"
                    height="35">
                    <path
                      fill="#ffffff"
                      d="M11.999 0C10.626 0 2.195 4.818 1.513 6c-.682 1.182-.686 10.819 0 12 .686 1.181 9.115 6 10.486 6 1.371 0 9.8-4.824 10.487-6 .686-1.176.686-10.83 0-12-.687-1.17-9.115-6-10.487-6zm2.841 19.415v.002c-.188 0-1.939-1.677-1.8-1.814.041-.041.296-.069.832-.086 0-1.23.028-3.215.045-4.046.002-.095-.021-.161-.021-.274h-3.787c0 .333-.022 1.697.065 3.416.011.213-.075.279-.272.278-.48-.001-.96-.005-1.44-.004-.194 0-.278-.072-.272-.286.043-1.567.14-3.938-.007-9.969v-.149c-.46-.016-.778-.045-.82-.086C7.225 6.26 9 4.583 9.187 4.583c.187 0 1.951 1.677 1.813 1.814-.041.041-.374.07-.795.086v.148c-.114 1.207-.096 3.731-.124 4.94h3.803c0-.213.018-1.628-.057-3.921-.005-.159.046-.242.199-.244.525-.004 1.049-.006 1.575-.003.164.001.216.081.213.252-.173 8.967-.031 8.341-.031 9.86.42.016.797.045.838.086.136.136-1.593 1.814-1.781 1.814z"
                      class="svgShape color2fc363-0 selectable"></path>
                  </svg>
                </a>
              </Grid>

              <Grid
                item
                size={2}
                sx={{
                  padding: isMobileLayout
                    ? "0 40px 0 40px"
                    : "40px 15px 15px 15px",
                  textAlign: "center",
                }}>
                <a href="https://codeforces.com/profile/Ifandika" style={{ textDecoration: "none", color: "white" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="35"  
                    height="35">
                    <path
                      fill="#ffffff"
                      d="M24 19.5V12a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 18 12v7.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5z"
                      class="svgShape colorf44336-0 selectable"></path>
                    <path
                      fill="#efefef"
                      d="M13.5 21a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 13.5 3h-3C9.673 3 9 3.672 9 4.5v15c0 .828.673 1.5 1.5 1.5h3z"
                      class="svgShape color2196f3-1 selectable"></path>
                    <path
                      fill="#e0e0e0"
                      d="M0 19.5c0 .828.673 1.5 1.5 1.5h3A1.5 1.5 0 0 0 6 19.5V9a1.5 1.5 0 0 0-1.5-1.5h-3C.673 7.5 0 8.172 0 9v10.5z"
                      class="svgShape colorffc107-2 selectable"></path>
                  </svg>
                </a>
              </Grid>
            </Grid>
          </Box>

          {/* START: GALLERIES */}
          <Box sx={{ flexGrow: 2 }}>
            <h1>Galleries</h1>
            <Grid container {...(isMobileLayout ? { columns: true } : {})}>
              {galleriesData.slice(-4).map((item) => (
                <Grid
                  key={item.id}
                  item
                  size={6}
                  sx={{
                    padding: isMobileLayout
                      ? "0 0 20px 0"
                      : "40px 15px 15px 15px",
                  }}>
                  <img style={imgDailyStyle} src={item.link} />
                  <h4>{item.desc}</h4>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* START: CERTIFICATES */}
          <div>
            <h1>Certificate</h1>
            <div>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}>
                {certificateData
                  .slice(-7)
                  .reverse()
                  .map((item) => (
                    <TimelineItem key={item.id}>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <span style={{ fontSize: "14px" }}>
                          <span style={labelCertificateStyle}>
                            {item.result}
                          </span>{" "}
                          <b>{item.name}</b> -<a href={item.link}> View</a>
                        </span>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
              </Timeline>
              <Typography
                style={{
                  textDecoration: "none",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
                variant="h6">
                <a href="">Load more...</a>
              </Typography>
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
