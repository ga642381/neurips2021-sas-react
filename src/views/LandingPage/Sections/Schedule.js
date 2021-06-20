import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import CustomizedTables from "components/Table/Table.js"

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {Paper} from "@material-ui/core";
import NameCard from "components/Card/NameCard";

import styles from "assets/jss/material-kit-react/views/landingPageSections/scheduleStyle.js";

const useStyles = makeStyles(styles);

export default function Information(props) {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Schedule</h2>
      <p style={{height: 10}}></p>
      <CustomizedTables />
      <p style={{height: 30}}></p>
    </div>
  );
}
