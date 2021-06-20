import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import TransitionsModal from "components/Modal/Modal.js"

import {Button} from "@material-ui/core"
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

function Person(props) {
  const {classes, imageClasses, name, title, description, imgurl, page} = props
  return (
    <GridItem xs={12} sm={12} md={4}>
    <Card plain>
      <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
        <img src={imgurl} alt="..." className={imageClasses} style={{width:150, height:150, objectFit: "cover"}} />
      </GridItem>
      <h4 className={classes.cardTitle}>
        {name}
        <br />
      <small className={classes.smallTitle}>{title}</small>
      </h4>
      <CardBody>
        <p className={classes.description}>
          {description}
        </p>
        <TransitionsModal page={page} description={description} />
      </CardBody>
    </Card>
  </GridItem>
  )
}

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const infos = [
    [
      "Hung-yi Lee",
      "National Taiwan University",
      <span><strong>Hung-yi Lee</strong> received the M.S. and Ph.D. degrees from National Taiwan University (NTU), Taipei, Taiwan, in 2010 and 2012, respectively. From September 2012 to August 2013, he was a postdoctoral fellow in Research Center for Information Technology Innovation, Academia Sinica. From September 2013 to July 2014, he was a visiting scientist at the Spoken Language Systems Group of MIT Computer Science and Artificial Intelligence Laboratory (CSAIL). He is currently an associate professor of the Department of Electrical Engineering of National Taiwan University, with a joint appointment at the Department of Computer Science & Information Engineering of the university. His research focuses on machine learning (especially deep learning), spoken language understanding and speech recognition. He is the special session co-organizer about "Meta Learning for Human Language Technology" and “New Trends in self-supervised speech processing” at Interspeech (2020).</span>
      ,"https://yt3.ggpht.com/a/AATXAJyD-nikDxFYMS26xENSwBrdycxguBTdocSATQ=s900-c-k-c0xffffffff-no-rj-mo"
      ,"https://speech.ee.ntu.edu.tw/~tlkagk/"
    ]
  ]
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Organizers</h2>
      <div>
        <GridContainer>
          {infos.map(info => <Person classes={classes} imageClasses={imageClasses} name={info[0]} title={info[1]} description={info[2]} imgurl={info[3]} page={info[4]} />)}
        </GridContainer>
      </div>
    </div>
  );
}
