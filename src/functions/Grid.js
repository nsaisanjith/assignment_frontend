import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    height: "200px",
  },
  root1: {
    width: 200,
    height: 190,
  },
}));
function Grid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ margin: 10 }}>
      <Paper className={classes.paper}>
        <div>
          <div style={{ display: "inline-block" }}>
            <Card className={classes.root1} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {props.borrower.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {props.borrower.loan_amount}
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div style={{ float: "right", display: "inline-block" }}>
            <Card className={classes.root1} variant="outlined">
              <CardContent>
                <Typography variant="h6" component="h2">
                  {props.lender.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {props.lender.address}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </Paper>
    </div>
  );
}
export default Grid;
