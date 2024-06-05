import { styled } from "@mui/material/styles";
import { Typography, Grid, Link } from "@mui/material";
import Logo from "../assets/logo3.png";

const FooterContainer = styled("footer")({
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px",
});

const LogoImage = styled("img")({
  width: "100px", // Adjust the width as needed
  marginBottom: "10px",
});

const Footer = () => {
  return (
    <FooterContainer sx={{ marginTop: "70px", backgroundColor: "#1976D2" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" sx={{ marginBottom: "10px" }}>
            <Link style={{ color: "white" }} href="#">
              Home
            </Link>{" "}
            |{" "}
            <Link style={{ color: "white" }} href="#">
              About
            </Link>{" "}
            |{" "}
            <Link style={{ color: "white" }} href="#">
              Book
            </Link>{" "}
            |{" "}
            <Link style={{ color: "white" }} href="#">
              Contact
            </Link>
          </Typography>
          <Typography variant="body2">
            <b>Links to Important Pages:</b>
            <br />
            <Link style={{ color: "white" }} href="#">
              Terms of Service
            </Link>
            <br />
            <Link style={{ color: "white" }} href="#">
              Privacy Policy
            </Link>
            <br />
            <Link style={{ color: "white" }} href="#">
              FAQ
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={1}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <LogoImage src={Logo} alt="Logo" />
            </Grid>
            <Grid item>
              <Typography variant="body2">Name: Adventure Šibenik</Typography>
              <Typography variant="body2">
                Address: Piramatovci 32, Skradin
              </Typography>
              <Typography variant="body2">Phone: +385 99 478 3868</Typography>
              <Typography variant="body2">
                Email: adventuresibenik@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ marginTop: "20px" }}>
        © 2024 Adventure Šibenik
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
