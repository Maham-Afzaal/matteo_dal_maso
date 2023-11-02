import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import LayoutHome from "../LayoutHome";

const Videos = () => {
  return (
    <LayoutHome>
      <div>
        <Box sx={{ margin: "5px" }}>
          <Box sx={{ padding: "40px 20px" }}>
            <Typography variant="h5" color="white" textAlign="center">
              You can join us on our{" "}
              <a
                href="https://www.youtube.com/channel/UCUSWQpMGuUNueEqmw02citg/feed?app=desktop&activity_view=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>YOUTUBE</b>
              </a>{" "}
              Channel
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              padding: "70px 0px 70px 0px",
            }}
          >
            <Box
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "50%",
                  md: "33.33%",
                  lg: "31.33%",
                  xl: "31.33%",
                },
                padding: "10px 20px",
                height: {
                  xs: "300px",
                  sm: "auto",
                  md: "auto",
                  lg: "auto",
                  xl: "auto",
                },
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5YwDQrVcTAM"
                title='Mozart -  Symphony no. 31 "Paris" K. 297 / Allegro assai'
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
            <Box
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "50%",
                  md: "33.33%",
                  lg: "31.33%",
                  xl: "31.33%",
                },
                padding: "10px 20px",
                height: {
                  xs: "300px",
                  sm: "auto",
                  md: "auto",
                  lg: "auto",
                  xl: "auto",
                },
              }}
            >
              <iframe
                class="iframe js-consent-gated-iframe iframe--video  youtube__iframe"
                width="100%"
                height="100%"
                data-src="https://www.youtube.com/embed/ZoLxVA0NEVg?wmode=transparent"
                allowfullscreen=""
                aria-label="Interactive video"
                src="https://www.youtube.com/embed/ZoLxVA0NEVg?wmode=transparent"
              ></iframe>
            </Box>
            <Box
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "50%",
                  md: "33.33%",
                  lg: "31.33%",
                  xl: "31.33%",
                },
                padding: "10px 20px",
                height: {
                  xs: "300px",
                  sm: "auto",
                  md: "auto",
                  lg: "auto",
                  xl: "auto",
                },
              }}
            >
              <iframe
                class="iframe js-consent-gated-iframe iframe--video  youtube__iframe"
                width="100%"
                height="100%"
                data-src="https://www.youtube.com/embed/RtEglVdIbt8?wmode=transparent"
                allowfullscreen=""
                aria-label="Interactive video"
                src="https://www.youtube.com/embed/RtEglVdIbt8?wmode=transparent"
              ></iframe>
            </Box>
          </Box>
        </Box>
      </div>
    </LayoutHome>
  );
};

export default Videos;
