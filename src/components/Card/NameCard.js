import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function NameCard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const {name, org, imgurl} = props

  return (
    <Card className={classes.root} style={{height: 130}}>
      <div className={classes.details} style={{width: 260}}>
        <CardContent className={classes.content}>
          <h4 style={{fontSize: 18}}>
            {name}
          </h4>
          <p style={{fontSize: 13}}><strong>{org}</strong></p>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={imgurl}
        title="Live from space album cover"
      />
    </Card>
  );
}
