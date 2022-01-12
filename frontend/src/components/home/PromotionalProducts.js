import React from "react"
import { Button, Grid, IconButton, Typography } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Carousel from "react-spring-3d-carousel"
import clsx from "clsx"

import promoAdornment from "../../images/promo-adornment.svg"
import explore from "../../images/explore.svg"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    backgroundImage: `url(${promoAdornment})`,
    backgroundPosition: "top",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70rem",
    paddingLeft: "10rem",
    paddingRight: "10rem",
    paddingTop: "30rem",
    paddingBottom: "30rem",
  },
}))

const PromotionalProducts = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query GetPromo {
      allStrapiProduct(filter: { promo: { eq: true } }) {
        edges {
          node {
            strapiId
            name
            description
            variants {
              images {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      classes={{ root: classes.mainContainer }}
    >
      <Grid item>Carousel</Grid>
      <Grid item>Description</Grid>
    </Grid>
  )
}

export default PromotionalProducts
