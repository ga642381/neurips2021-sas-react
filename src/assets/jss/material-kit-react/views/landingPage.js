import { container, title } from "assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    fontSize: "2.5em",
    display: "inline-block",
    position: "relative",
    minHeight: "32px",
    maxWidth: "600px",
    marginTop: "0px",
    marginBottom: "30px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    marginTop: "30px",
    fontSize: "2rem",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 3% 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
