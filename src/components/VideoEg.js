import React from "react";
import Box from "@mui/material/Box";

const VideoEg = () => {
  return (
    <div style={{whiteSpace:'nowrap'}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position:'relative'
        }}
      >
        <Box sx={{ flexBasis: {xs:'100%',sm:'50%',md:'33.33%',lg:'33.33%',xl:'33.33%'},display:'inline-block'  }}>
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
          sx={{ flexBasis: {xs:'100%',sm:'50%',md:'33.33%',lg:'33.33%',xl:'33.33%'},display:'inline-block'  }}
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
          sx={{ flexBasis: {xs:'100%',sm:'50%',md:'33.33%',lg:'33.33%',xl:'33.33%'},display:'inline-block'  }}
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

    </div>
  );
};

export default VideoEg;
