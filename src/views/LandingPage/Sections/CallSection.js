import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { Paper } from '@material-ui/core';

import styles from "assets/jss/material-kit-react/views/landingPageSections/callStyle.js";

const useStyles = makeStyles(styles);

export default function CallSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Call for Papers</h2>
          <h5 className={classes.description}>
          TBD
          </h5>
          {/*
          <h5 className={classes.description}>
          We welcome submissions that work in the area of self-supervised learning for audio and speech processing. Relevant research directions include, but not limited to:
          </h5>
          <Paper className={classes.paper} elevation={3} children={(<span>New self-supervised <strong>training approaches</strong></span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Application</strong> of self-supervised models to downstream tasks, such as automatic speech recognition, speech enhancement, speech augmentation, and spoken language understanding</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Generalizability</strong> of self-supervised models across domains, tasks, or languages</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<block><strong>Understanding</strong> of why do self-supervision methods work for speech and audio, for example:
            <ul>
              <li>What does the model learn in self-supervised learning tasks?</li>
              <li>Why unrelated self-supervised proxy tasks improve downstream speech application performance?</li>
              <li>Are there some self-supervision proxy tasks that are suitable for some downstream applications but not others?</li>
            </ul>
          </block>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Comparative study</strong> on self-supervised learning approaches</span>)} />
          <h5 className={classes.description}>
          The submissions should be in <strong>NeurIPS</strong> style between <strong>4 to 8 pages, excluding the references</strong>. Authors can add supplementary material in addition to the 8 pages, but reviewers are not required to review the extra material. Original works are preferred. Submissions that are published on <strong>arXiv</strong> or similar repositories are acceptable. Papers submitted to other conferences or workshops can be submitted, but <strong>the authors must contact the organizers.</strong> Submissions will be reviewed by at least three reviewers. Authors and reviewers are asked to disclose any possible conflict of interest, and the organizers will manage the conflict of interest when assigning submissions for reviews. The review will be <strong>double blind</strong>. Note that our workshop is not archival, but the accepted papers will be hosted on the workshop website. For reproducibility, we also encourage the authors to release the code of their experiments publicly.
          </h5>
          */}
        </GridItem>
      </GridContainer>
    </div>
  );
}
