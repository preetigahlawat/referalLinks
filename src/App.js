import "./App.css";

import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export default function ImgMediaCard() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Grid
          container
          wrap="nowrap"
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <Typography variant="h2" component="h2" className="page-title">
              Preeti's Referral Links
            </Typography>
          </Grid>
          <Grid item xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="tiktok"
                height="140"
                image="/referralLinks/static/images/logo512.png"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="app-title"
                >
                  TikTok
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="app-details"
                >
                  TikTok is a popular social media platform which is majorly
                  based on users viewing, creating and sharing short form videos
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href="https://www.google.com"
                  underline="hover"
                  target="_blank"
                  className="app-link"
                >
                  Get 25$ when you install TikTok
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="flip"
                height="140"
                image="/referralLinks/static/images/logo512.png"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="app-title"
                >
                  Flip
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="app-details"
                >
                  Flip is a popular social media platform which is majorly
                  based on users viewing, creating and sharing short form videos
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href="https://www.google.com"
                  underline="hover"
                  target="_blank"
                  className="app-link"
                >
                  Get 25$ when you install Flip
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="doordash"
                height="140"
                image="/referralLinks/static/images/logo512.png"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="app-title"
                >
                  DoorDash
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="app-details"
                >
                  DoorDash is a popular social media platform which is majorly
                  based on users viewing, creating and sharing short form videos
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  href="https://www.google.com"
                  underline="hover"
                  target="_blank"
                  className="app-link"
                >
                  Get 25$ when you install DoorDash
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
