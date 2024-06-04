import { styled } from "@mui/material/styles";
import { Typography, Grid, Link } from "@mui/material";
import Logo from "../assets/logo2.jpg";

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
    <FooterContainer sx={{ marginTop: "70px" }}>
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
            <Link href="#">Home</Link> | <Link href="#">About</Link> |{" "}
            <Link href="#">Book</Link> | <Link href="#">Contact</Link>
          </Typography>
          <Typography variant="body2">
            <b>Links to Important Pages:</b>
            <br />
            <Link href="#">Terms of Service</Link>
            <br />
            <Link href="#">Privacy Policy</Link>
            <br />
            <Link href="#">FAQ</Link>
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
              <Typography variant="body2">Adventure Šibenik</Typography>
              <Typography variant="body2">
                Address: 123 Main Street, Šibenik
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
