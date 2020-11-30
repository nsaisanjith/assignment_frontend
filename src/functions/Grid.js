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
    width: 350,
    height: 190,
  },
}));
function Grid(props) {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ margin: 20 }}>
      <Paper className={classes.paper} style={{}}>
        <div>
          <div style={{ display: "inline-block" }}>
            <Card className={classes.root1} variant="outlined">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {props.borrower.name}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  Loan Amount {props.borrower.loan_amount}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  Phone Number {props.borrower.phone_no}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  Address {props.borrower.address}
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
                <br />
                <Typography variant="body2" component="p">
                  Phone Number {props.lender.phone_no}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  Email {props.lender.email}
                </Typography>
                <br />
                <Typography variant="body2" component="p">
                  address {props.lender.address}
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
