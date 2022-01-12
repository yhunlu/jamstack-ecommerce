import React from "react"
import { Grid, Typography, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link, navigate } from "gatsby"

import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: "2rem",
  },
  link: {
    color: "#fff",
    fontSize: "1.25rem",
  },
  linkColumn: {
    width: "20rem",
  },
  linkContainer: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "3rem",
    },
  },
  icon: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  "@global": {
    body: {
      margin: 0,
    },
    a: {
      textDecoration: "none",
    },
  },
}))

const footer = () => {
  const classes = useStyles()

  const socialMedia = [
    {
      icon: facebook,
      alt: "facebook",
      link: "http://www.facebook.com",
    },
    {
      icon: twitter,
      alt: "twitter",
      link: "http://www.twitter.com",
    },
    {
      icon: instagram,
      alt: "instagram",
      link: "http://www.instagram.com",
    },
  ]

  const routes = {
    "Contact Us": [
      { label: "(555) 555-5555", href: "tel:(555) 555-5555" },
      { label: "yunlu@carsibazaar.com", href: "mailto:yunlu@carsibazaar.com" },
    ],
    "Customer Service": [
      { label: "Contact Us", link: "/contact" },
      { label: "My Account", link: "/account" },
    ],
    Information: [
      { label: "Privacy Policy", link: "/privacy-policy" },
      { label: "Terms and Conditions", link: "/terms-conditions" },
    ],
  }

  return (
    <footer className={classes.footer}>
      <Grid container justifyContent="space-between">
        {/* Links */}
        <Grid item classes={{ root: classes.linkContainer }}>
          <Grid container>
            {Object.keys(routes).map(category => (
              <Grid
                key={category}
                item
                container
                direction="column"
                classes={{ root: classes.linkColumn }}
              >
                <Grid item>
                  <Typography variant="h5">{category}</Typography>
                </Grid>
                {routes[category].map(route => (
                  <Grid item key={route.label}>
                    <Typography
                      component={route.link ? Link : "a"}
                      to={route.link ? route.link : undefined}
                      href={route.href ? route.href : undefined}
                      variant="body1"
                      classes={{ body1: classes.link }}
                    >
                      {route.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* Social Media Icons */}
        <Grid item>
          <Grid container direction="column" alignItems="center">
            {socialMedia.map(platform => (
              <Grid item key={platform.link}>
                <IconButton
                  classes={{ root: classes.icon }}
                  component="a"
                  disableRipple
                  href={platform.link}
                >
                  <img src={platform.icon} alt={platform.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}

export default footer
