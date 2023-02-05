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
              Referral Links
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
                    Get 30$ when you join Rakuten
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open("https://www.flashfood.com/", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="flashfood"
                  height="200"
                  image="/referralLinks/static/images/flashfood.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Flashfood
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Flashfood helps you save massively on fresh produce and
                    baked goods. Here's my personal Flashfood referral code:
                    $GAHL4718X. If your first purchase is over $10, you'll get
                    $5 off! Use the code when you sign up or on the Rewards tab.
                    Download the app today, search for Flashfood wherever you
                    get your apps
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://www.flashfood.com/"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 5$ off when you install Flashfood and use my personal
                    Flashfood referral code: $GAHL4718X
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
                  id="door-dash-image"
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
                    From dinner to groceries, get the best of your neighborhood
                    delivered with DoorDash. Sign up now and earn CA$15 off each
                    of your first 3 orders when you use my referral link
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://drd.sh/1rRxuZQh2IQ2OHjH"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 15$ off on your first 3 orders when you install DoorDash
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
                    order delicious food anytime of the day, Hungry? Get CA$10
                    off your first Uber Eats order of CA$35 or more. Terms
                    apply. Use my code at checkout: eats-preetig5427ui
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="http://ubr.to/EatsGiveGet"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 10$ off your first order of 35$ or more when you install
                    Uber Eats and use my code at checkout: eats-preetig5427ui
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open(
                  "https://www.lyft.com/i/PREETI02562?utm_medium=p2pi_iacc",
                  "_blank"
                );
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="lyft"
                  height="200"
                  image="/referralLinks/static/images/lyft.gif"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Lyft
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Lyft offers mobility as a service, ride-hailing, vehicles
                    for hire, motorized scooters, a bicycle-sharing system,
                    rental cars, and food delivery in the United States and
                    select cities in Canada
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="hhttps://www.lyft.com/i/PREETI02562?utm_medium=p2pi_iacc"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get $10 off in ride credit with code PREETI02562
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open(
                  "https://www.skipthedishes.com/r/mzTGV3Y055",
                  "_blank"
                );
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="skipTheDishes"
                  height="200"
                  image="/referralLinks/static/images/skip-the-dishes.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Skip The Dishes
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Skip The Dishes is another popular canadian food delivery
                    app with which you can order delicious food anytime of the
                    day from tons of local eateries. Sign up with this link to
                    get $5 off your first order over $40
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://www.skipthedishes.com/r/mzTGV3Y055"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Get 5$ off your first order of 40$ or more
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open("https://www.receiptjar.com/", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="receiptJar"
                  height="200"
                  id="receipt-jar-image"
                  image="/referralLinks/static/images/receiptJar.png"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    ReceiptJAR
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    ReceiptJar is a fun and easy way to get paid for saving your
                    receipts. Use code PREEGWWKV to get 200 points on uploading
                    your first receipt
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://www.receiptjar.com/"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Use code PREEGWWKV to get 200 points on uploading your first
                    receipt
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open("https://ampli.ca/", "_blank");
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="ampli"
                  height="200"
                  image="/referralLinks/static/images/ampli.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    Ampli
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Ampli is a cash back app that gets you more from your
                    everyday purchases, working alongside other loyalty or cash
                    back programs you might already participate in. Give $5 Get
                    $5 with code PREETI96135
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://ampli.ca/"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Give $5 Get $5 with code PREETI96135
                  </Link>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>

          <Grid item xs>
            <CardActionArea
              onClick={() => {
                window.open(
                  "https://www.pcfinancial.ca/en/pc-money-account/",
                  "_blank"
                );
              }}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="pcFinancial"
                  height="200"
                  image="/referralLinks/static/images/pcFinancial.jpg"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="app-title"
                  >
                    PC Money Account
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="app-details"
                  >
                    Fund, shop and earn PC Optimum™ points with the PC Money™
                    Account. Copy and paste referral code PG16860584 and spend
                    at least $100 within 60 days
                  </Typography>
                </CardContent>
                <CardActions>
                  <Link
                    href="https://www.pcfinancial.ca/en/pc-money-account/"
                    underline="hover"
                    target="_blank"
                    className="app-link"
                  >
                    Use code PG16860584 and spend at least $100 within 60 days
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
