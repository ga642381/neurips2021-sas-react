import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { Paper } from '@material-ui/core';

import styles from "assets/jss/material-kit-react/views/landingPageSections/summaryStyle.js";

const useStyles = makeStyles(styles);

export default function SummarySection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Workshop Description</h2>
          <h5 className={classes.description}>
          TBD
          </h5>
          {/*}
          <h5 className={classes.description}>
          There is a trend in the machine learning community to adopt self-supervised approaches to pre-train deep networks. Self-supervised learning utilizes proxy supervised learning tasks, for example, distinguishing parts of the input signal from distractors, or generating masked input segments conditioned on the unmasked ones, to obtain training data from unlabeled corpora. These approaches make it possible to use a tremendous amount of unlabeled data on the web to train large networks and solve complicated tasks. <strong>ELMo</strong>, <strong>BERT</strong>, and <strong>GPT</strong> in NLP are famous examples in this direction. Recently self-supervised approaches for speech and audio processing are also gaining attention. These approaches combine methods for utilizing no or partial labels, unpaired text and audio data, contextual text and video supervision, and signals from user interactions. Although the research direction of self-supervised learning is active in speech and audio processing, current works are limited to several problems such as automatic speech recognition, speaker identification, and speech translation, partially due to the diversity of modeling in various speech and audio processing problems. There is still much unexplored territory in the research direction for self-supervised learning.
          </h5>
          <h5 className={classes.description}>
          This workshop will bring concentrated discussions on self-supervision for the field of speech and audio processing via several invited talks, oral and poster sessions with high-quality papers, and a panel of leading researchers from academia and industry. Alongside research work on new self-supervised methods, data, applications, and results, this workshop will call for novel work on understanding, analyzing, and comparing different self-supervision approaches for speech and audio processing. The workshop aims to:
          </h5>
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Review</strong> existing and inspire new self-supervised methods and results,</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Motivate</strong> the application of self-supervision approaches to more speech and audio processing problems in <strong>academia and industry</strong>, and encourage discussion amongst experts and practitioners from the two realms,</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Encourage</strong> works on studying methods for understanding learned representations, comparing different self-supervision methods and comparing self-supervision to other self-training as well as transfer learning methods that low-resource speech and audio processing have long utilized,</span>)} />
          <Paper className={classes.paper} elevation={3} children={(<span><strong>Facilitate</strong> communication within <strong>the field of speech and audio processing</strong> (e.g., people who attend conferences such as INTERSPEECH and ICASSP) as well as between the field and the <strong>whole machine learning community</strong> for sharing knowledge, ideas, and data, and encourage future collaboration to inspire innovation in the field and the whole community.</span>)} />
          */}
          </GridItem>
      </GridContainer>
    </div>
  );
}
