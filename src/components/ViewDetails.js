import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const ViewDetails = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        getDetails();
    }, [])

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
                    <div style={{textAlign: "center"}}><h3>Borrower</h3></div>
                    <div style={{padding:"2%"}}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <TextField id="name" label="Borrower name" value="a" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="phone_no" label="Borrower phone number" value="a"  />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="email" label="Borrower email" value="a" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="address" label="Borrower address" value="a" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="loan_amount" label="Loan amount" value="a"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="interestRate" label="Interest rate" value="a"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="loan_start" label="Start date" value="a"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField id="loan_end" label="End date" value="a"/>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{textAlign: "center"}}><h3>Lender</h3></div>
                    <div style={{padding:"2%"}}>
                        <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField id="loaner_name" label="Loaner name"  value="a"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="loaner_phone_no" label="Loaner phone number"  value="a"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="loaner_email" label="Loaner phone number"  value="a"/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="loaner_adddress" label="Loaner address"  value="a"/>
                        </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>
            <div class="footer">
                <p>Created by <b>Sai Sanjith Narasaraj</b></p>
            </div>
        </>
    )
}

export default ViewDetails;