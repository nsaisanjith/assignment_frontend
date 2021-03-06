import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from '@material-ui/icons/Delete';

import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import Fab from '@material-ui/core/Fab';

const ViewDetails = (props) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const data = await axios.get("http://localhost:4000/findInfo/1234");
      setList(data.data);
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <>
      <div class="header">
        <h1>Lender Borrower</h1>
      </div>
      <div class="main-content">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>
              <h3>Borrower</h3>
            </div>
            <div style={{ padding: "2%" }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="name"
                    label="Borrower name"
                    value={props.location.state[0].name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="phone_no"
                    label="Borrower phone number"
                    value={props.location.state[0].phone_no}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="email"
                    label="Borrower email"
                    value={props.location.state[0].email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="address"
                    label="Borrower address"
                    value={props.location.state[0].address}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="loan_amount"
                    label="Loan amount"
                    value={props.location.state[0].loan_amount}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="interestRate"
                    label="Interest rate"
                    value={props.location.state[0].interestRate}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="loan_start"
                    label="Start date"
                    value={new Date(
                      props.location.state[0].loan_start
                    ).toDateString()}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="loan_end"
                    label="End date"
                    value={new Date(
                      props.location.state[0].loan_end
                    ).toDateString()}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div style={{ textAlign: "center" }}>
              <h3>Lender</h3>
            </div>
            <div style={{ padding: "2%" }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="loaner_name"
                    label="Loaner name"
                    value={props.location.state[1].name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="loaner_phone_no"
                    label="Loaner phone number"
                    value={props.location.state[1].phone_no}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="loaner_email"
                    label="Loaner phone number"
                    value={props.location.state[1].email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    contentEditable={false}
                    id="loaner_adddress"
                    label="Loaner address"
                    value={props.location.state[1].address}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
            <Grid item xs={12}>
                <div style={{ marginLeft: "85%"}}>
                    <Fab color="primary" aria-label="add">
                        <DeleteIcon />
                    </Fab>
                    <Fab style={{ marginLeft: "5%"}} color="primary" aria-label="add">
                        <ArrowDownwardIcon />
                    </Fab>
                </div>
            </Grid>
        </Grid>


      </div>
      <div class="footer">
        <p>
          Created by <b>Sai Sanjith Narasaraj</b>
        </p>
      </div>
    </>
  );
};

export default ViewDetails;
