import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexGrow: 1,
    padding: "1rem",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  question: {
    textAlign: "center",
    fontSize: "1.8rem",
    color: "#0888C7",
  },
  button: {
    backgroundColor: "#D05C27",
    color: "#ffffff",
    fontWeight: "bold",
  },
  response: {
    padding: "1rem",
    color: "#0889C6",
  },
  error: {
    padding: "1rem",
    color: "#D05D26",
    textTransform: "capitalize",
  }
}));