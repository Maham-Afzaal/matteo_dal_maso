import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import LayoutHome from "../LayoutHome";

const Schedule = () => {
  const matches = useMediaQuery("(max-width:780px)");
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    padding: "40px 0px",
    background: "linear-gradient(180deg, #000000 15%, #404040 100%)",
  };
  if (matches) {
    containerStyle.display = "block";
  }
  return (
    <LayoutHome>
      <div>
        <div>
          {/* <Box sx={{color:'white',display:{xs:'block',sm:'block',md:'flex',lg:'flex',xl:'flex'}}}> */}
          <div style={containerStyle}>
            <div style={{ flex: "30%", padding: "0px 20px" }}>
              <p>June 6,7</p>
              <br/>
            </div>
            <div style={{ flex: "60%", padding: "0px 20px" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut!
                <br />
                <br />
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
              </p>
            </div>
          </div>
          <div style={containerStyle}>
            <div style={{ flex: "30%", padding: "0px 20px" }}>
              <p>July 6,7</p>
              <br/>
            </div>
            <div style={{ flex: "60%", padding: "0px 20px" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque <br />
                <br />
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla,
                placeat.um! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut!
              </p>
            </div>
          </div>
          <div style={containerStyle}>
            <div style={{ flex: "30%", padding: "0px 20px" }}>
              <p>Jan 6,7</p>
              <br/>
            </div>
            <div style={{ flex: "60%", padding: "0px 20px" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                <br />
                <br />
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla,
                placeat.consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut!
              </p>
            </div>
          </div>
          <div style={containerStyle}>
            <div style={{ flex: "30%", padding: "0px 20px" }}>
              <p>May 6,7</p>
              <br/>
            </div>
            <div style={{ flex: "60%", padding: "0px 20px" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate <br />
                <br />
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                aliquam nihil, eveniet aliquid culpa officia aut!
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
};

export default Schedule;
