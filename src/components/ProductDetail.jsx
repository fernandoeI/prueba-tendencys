import { Grid, Typography } from "@mui/material";
import React from "react";

const ProductDetail = ({ title, value }) => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="overline"
          color="GrayText"
          sx={{ textDecoration: "underline" }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">{value}</Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
