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

export default function Speaker(props) {
  const {name, object} = props
  const classes = useStyles();
  const infos = [
    [
      "TBD",
      "",
      "[Photo Link]",
    ],
    [
      "TBD",
      "",
      "[Photo Link]",
    ]
  ]
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Invited Speakers</h2>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          {/* <h4 className={classes.description} style={{textAlign: "center"}}>
          Following is the list of invited speakers:
          </h4>   */}
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <GridContainer>
            {
              infos.map(info =>
              <GridItem xs={12} sm={12} md={12} lg={6}>
                <div style={{padding: 10, maxWidth: 400, margin: "auto"}}>
                <NameCard name={info[0]} org={info[1]} imgurl={info[2]} />
                </div>
              </GridItem>
            )
            }
        </GridContainer>
        </GridItem>
      </GridContainer>
      <p style={{height: 30}}></p>
    </div>
  );
}
