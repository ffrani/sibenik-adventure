import React from "react";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";

import "../components/AboutTour.css";

import AboutImage from "../assets/gallery2.jpg";

export default function AccordionExpandDefault() {
  const [expanded, setExpanded] = React.useState(1);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : 0);
  };

  return (
    <Box p={2}>
      <Grid container spacing={2} className="accordion-container">
        <Grid item xs={12} md={6}>
          <div className="image-container">
            <img
              src={AboutImage}
              alt="Tour Image"
              style={{
                border: "8px solid white",
                width: "80%",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            <h1>About tour</h1>
          </Typography>
          <div className="text-container">
            <div className="accordion-heading"></div>
            <Accordion expanded={expanded === 1} onChange={handleChange(1)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography variant="h5">General info</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This tour begins at a small place called Jakiruša – Brela.
                  Beautiful Jakiruša bay is surrounded by the spectacular
                  mountain of Biokovo. There is a sandy beach in Jakiruša,
                  popular with locals and tourists for swimming and on the west
                  side, there is a rocky coast and one of the last untouched
                  bays in this part of the Riviera – bay Vrulja. We launch our
                  sea kayaks on the beach and paddle lightly towards the
                  deserted sandy beaches of Vrulja bay. We stop to observe the
                  submarine groundwater source that brings 50 m3 of drinking
                  water per second to this place even in the summer. Our paddle
                  takes us to Vrulja beach where we pause to swim and snorkel in
                  crystal blue waters. After the kayaking adventure, we can
                  arrange a delicious meal in a local restaurant (not included
                  in the price).
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 2} onChange={handleChange(2)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography variant="h5">Tour summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Distance from start to finish: 4.6 km Sea temperature: Between
                  19°C and 27°C. It depends on the season. Cliff diving: You can
                  jump in the seawater in places allowed by the guide. Fitness
                  Level: A minimum level of fitness is required. Previous
                  experience: Not necessary. Age: Minimum age is 6 years Number
                  of people per day: Minimum of 4 and a maximum of 60.
                  Availability: Every day from the 1st of May to the end of
                  October. This trip runs if there are 2 or more people. E-mail
                  us regarding dates and tell us the number of people in your
                  group. We also need to know if you need transfers. We will
                  inform you about the dates available. Starts from:
                  Brela/Jakiruša Sea kayaking & snorkeling tour departure times:
                  Between 9 AM and 10 AM (or as agreed for each group). Duration
                  of the tour: 3.30 – 4h
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 3} onChange={handleChange(3)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography variant="h5">Additional info</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Special Conditions: The operator has the right to cancel
                  tours, without notice at their discretion depending on the
                  weather or sea conditions. All safety instructions from
                  Šibenik Adventure staff must be adhered to. Duration of the
                  transfer: 3 hours – one way (60 km from Split) or 20 min
                  Organized transfers: Every day from Split and Makarska city
                  centers. For more information, visit the FAQ page
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 4} onChange={handleChange(4)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <Typography variant="h5">Pricing model</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Activity price: 40€ per person The price includes: Equipment,
                  insurance, and guide assistance. Price of transfer: 20€ per
                  person – both directions included. Payment: Cash.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Box mt={2}>
              <button style={{ marginTop: "20px" }}>Reservation</button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
