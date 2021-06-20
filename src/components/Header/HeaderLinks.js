/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import { HashLink as Link } from 'react-router-hash-link';

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/#description" style={{color: "inherit"}}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        Description
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/#call" style={{color: "inherit"}}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        Call for Papers
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/#deadlines" style={{color: "inherit"}}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        Deadlines
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/#schedule" style={{color: "inherit"}}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        Schedule
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/#organizers" style={{color: "inherit"}}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        Organizers
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/#papers" style={{color: "inherit"}}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        Accepted Papers
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/#contact" style={{color: "inherit"}}>
        <Button
          color="transparent"
          className={classes.navLink}
        >
        Contact
        </Button>
        </Link>
      </ListItem>
      {/* <ListItem>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}
