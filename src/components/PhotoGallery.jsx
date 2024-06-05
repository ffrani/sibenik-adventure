import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import YouTube from "react-youtube";
import Gallery1 from "../assets/gallery4.jpg";
import Gallery2 from "../assets/gallery2.jpg";
import Gallery3 from "../assets/gallery3.jpg";
import Gallery4 from "../assets/gallery4.jpg";
import Gallery5 from "../assets/gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";
import Gallery7 from "../assets/gallery7.jpg";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../components/PhotoGallery.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Section = styled("section")({
  textAlign: "center",
});

const Container = styled(Box)(({ theme }) => ({
  padding: "20px", // Default padding
  [theme.breakpoints.up("md")]: {
    padding: "0 300px", // Padding for larger screens
  },
}));

const images = [
  {
    original: Gallery1,
    thumbnail: Gallery1,
  },
  {
    original: Gallery2,
    thumbnail: Gallery2,
  },
  {
    original: Gallery3,
    thumbnail: Gallery3,
  },
  {
    original: Gallery4,
    thumbnail: Gallery4,
  },
  {
    original: Gallery5,
    thumbnail: Gallery5,
  },
  {
    original: Gallery6,
    thumbnail: Gallery6,
  },
  {
    original: Gallery7,
    thumbnail: Gallery7,
  },
];

export default function ColumnsGrid() {
  const opts = {
    height: "315",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Section>
      <Typography>
        <h1>Gallery</h1>
      </Typography>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                  <Item>
                    <img
                      src={Gallery1}
                      alt="Description of the image"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Item>
                    <img
                      src={Gallery2}
                      alt="Description of the image"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <img
                      src={Gallery3}
                      alt="Description of the image"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
            {/* Right Side */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item>
                    <img
                      src={Gallery7}
                      alt="Description of the image"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Item>
                  {/* YouTube Video */}
                  {/* <YouTube videoId="JoLu1BJuIho" opts={opts} /> */}
                </Grid>
                <Grid item xs={12}>
                  <h1>
                    Pictures say <br /> more than <br /> words
                  </h1>
                  <button
                    style={{
                      backgroundColor: "#FFFF49",
                      color: "black",
                      fontSize: "1.1rem",
                    }}
                    onClick={handleOpenModal}
                  >
                    Show photo gallery
                  </button>
                  <Modal
                    className="modal"
                    open={open}
                    onClose={handleCloseModal}
                    center
                    styles={{
                      modal: {
                        maxWidth: "100%",
                        width: "80%",
                        padding: "10px",
                      },
                    }}
                  >
                    <ImageGallery
                      items={images}
                      showBullets
                      showPlayButton
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Modal>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}
