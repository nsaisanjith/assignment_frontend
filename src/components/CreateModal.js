import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import axios from "axios";

export default function CreateModal({open, handleClose}) {
    const [data, setData] = useState({});
    return (
        <Modal
            open={open}
            background={"white"}
            onClose={() => {}}
            style={{ margin:"10%", padding: "2%"}}
        >
            <div style={{background: "white", padding: "2%"}}>
                <h2>Create Entry</h2>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField id="name" onChange={(ev) => { setData({ ...data, name: ev.target.value}) }} fullWidth label="Borrower name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="phone_no" onChange={(ev) => { setData({ ...data, phone_no: ev.target.value})}} fullWidth label="Borrower phone number" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="email" onChange={(ev) => { setData({ ...data, email: ev.target.value})}} fullWidth label="Borrower email" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="address" onChange={(ev) => { setData({ ...data, address: ev.target.value})}} fullWidth label="Borrower address" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_name" onChange={(ev) => { setData({ ...data, loaner_name: ev.target.value})}} fullWidth label="Loaner name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_phone_no" onChange={(ev) => { setData({ ...data, loaner_phone_no: ev.target.value})}} fullWidth label="Loaner phone number" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_email" onChange={(ev) => { setData({ ...data, loaner_email: ev.target.value})}} fullWidth label="Loaner phone number" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_adddress" onChange={(ev) => { setData({ ...data, loaner_adddress: ev.target.value})}} fullWidth label="Loaner address" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loan_amount" onChange={(ev) => { setData({ ...data, loan_amount: ev.target.value})}} fullWidth label="Loan amount" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="interestRate" onChange={(ev) => { setData({ ...data, interestRate: ev.target.value})}} fullWidth label="Interest rate" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loan_start" onChange={(ev) => { setData({ ...data, loan_start: ev.target.value})}} fullWidth label="Start date" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loan_end" onChange={(ev) => { setData({ ...data, loan_end: ev.target.value})}} fullWidth label="End date" />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="secondary">
                            Cancel
                        </Button>
                        <Button style={{marginLeft: "1%"}} variant="contained" color="primary"
                            onClick={()=> {
                                console.log("Clicked", data);
                                axios.post('http://localhost:4000/create', data).then(function (response) {
                                    console.log(response);
                                })
                            }}
                        >
                            Create
                        </Button>
                    </Grid>                
                </Grid>
            </div>
        </Modal>
    )
}