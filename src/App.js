import "./App.css";

import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";

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
            <CardActionArea
              onClick={() => {
                window.open("https://vm.tiktok.com/ZMYLwYgYR/", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="tiktok"
                  height="200"
                  image="/referralLinks/static/images/tik-tok.gif"
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
                    based on users viewing, creating and sharing short form
                    videos. Join TikTok and we can each receive up to $25 in
                    rewards! Discover videos, rewards, and more!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href=" https://vm.tiktok.com/ZMYLwYgYR/"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 25$ when you install TikTok
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open("https://google.com", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="flipp"
                  height="200"
                  image="/referralLinks/static/images/flipp.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Flipp
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Flip is an essential app to check out deals from all major
                    grocery shopes and retailers
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://www.google.com"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 25$ when you install Flipp
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open("https://drd.sh/1rRxuZQh2IQ2OHjH", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="doorDash"
                  height="200"
                  image="/referralLinks/static/images/door-dash.gif"
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
                    DoorDash is a popular food delivery app with which you can
                    order delicious food anytime of the day. From dinner to
                    groceries, get the best of your neighborhood delivered with
                    DoorDash. Sign up now and earn CA$15 off each of your first
                    3 orders when you use my referral link:
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://drd.sh/1rRxuZQh2IQ2OHjH"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 15$ off when you install DoorDash
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open("http://ubr.to/EatsGiveGet", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="uberEats"
                  height="200"
                  image="/referralLinks/static/images/uber-eats.gif"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Uber Eats
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Uber Eats is a popular food delivery app with which you can
                    order delicious food anytime of the day, Hungry? Get CA$10 off your first Uber Eats order of CA$35 or more.
                    Terms apply. Use my code at checkout:
                    eats-preetig5427ui   
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="http://ubr.to/EatsGiveGet"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 25$ when you install Uber Eats
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open("https://google.com", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="uber"
                  height="200"
                  image="/referralLinks/static/images/uber.gif"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Uber
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Uber is widely used app to order a ride anytime of the day
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://www.google.com"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 25$ when you install Uber
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open(
                  "https://www.rakuten.ca/referrer?referrerid=mTPKdJS42aQ%3D",
                  "_blank"
                );
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="rakuten"
                  height="200"
                  image="/referralLinks/static/images/rakuten.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Rakuten
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Rakuten helps you save money while shopping online. You can
                    add it as an extension in your browser and earn cash back on
                    various offers. It's an awesome site that gives you Cash
                    Back when you shop online. With over 750 stores, including
                    The Bay, Sport Chek, Canadian Tire, Old Navy, and Sephora,
                    you get paid to shop for things you're already buying. Plus,
                    get a $30 Cash Bonus when you join today!
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://www.rakuten.ca/referrer?referrerid=mTPKdJS42aQ%3D"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 30$ when you install Rakuten
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
