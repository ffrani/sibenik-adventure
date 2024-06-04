import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Container = styled("div")({
  padding: "20px",
});

const Side = styled("div")(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  // padding: "50px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
    textAlign: "left",
  },
}));

const AddressContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "8px",
});

const SplitTextContainer = () => {
  return (
    <Container sx={{ marginTop: "50px", padding: "20px 0" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Side sx={{ paddingLeft: "90px" }}>
            <Typography variant="h5">Meeting Point</Typography>
            <Typography variant="body1" sx={{ paddingTop: "40px" }}>
              <AddressContainer>
                <RoomRoundedIcon />
                <span style={{ marginLeft: "8px" }}>
                  Uvala Sv. Petar bb, 22000, Šibenik, Hrvatska
                </span>
              </AddressContainer>
            </Typography>
            <a href="https://www.google.com/maps/place/Kayaking+%C5%A0ibenik/@43.7142408,15.9021255,17z/data=!3m1!4b1!4m6!3m5!1s0x1335252b80c98461:0x67189804d8418fe3!8m2!3d43.7142408!4d15.9021255!16s%2Fg%2F11h1yvmk39?entry=ttu">
              <button style={{ marginTop: "40px" }}>See Location</button>
            </a>
          </Side>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Side sx={{ paddingRight: "90px" }}>
            <Typography variant="h5">What to bring</Typography>
            <Typography
              variant="body1"
              sx={{
                paddingTop: "40px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <ArrowRightAltIcon />
                <span style={{ marginLeft: "8px" }}>Swimming suit</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <ArrowRightAltIcon />
                <span style={{ marginLeft: "8px" }}>Towel, water</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <ArrowRightAltIcon />
                <span style={{ marginLeft: "8px" }}>Dry clothes</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArrowRightAltIcon />
                <span style={{ marginLeft: "8px" }}>Hat and sunscreen</span>
              </div>
            </Typography>
          </Side>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SplitTextContainer;
