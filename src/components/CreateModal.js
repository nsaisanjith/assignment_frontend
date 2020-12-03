import React from 'react';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function CreateModal({open, handleClose}) {
    console.log(open);
    return (
        <Modal
            open={open}
            onClose={() => {}}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{background: "green", margin:"10%", padding: "2%"}}
        >
            <form noValidate action="http://localhost:4000/create" method="post" autoComplete="off">
                <h2>Create entry</h2>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <TextField id="name" label="Borrower name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="phone_no" label="Borrower phone number" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="email" label="Borrower email" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="address" label="Borrower address" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_name" label="Loaner name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_phone_no" label="Loaner phone number" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_email" label="Loaner phone number" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loaner_adddress" label="Loaner address" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loan_amount" label="Loan amount" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="interestRate" label="Interest rate" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loan_start" label="Start date" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="loan_end" label="End date" />
                    </Grid>
                    <input type="submit" value="Submit" />
                </Grid>
            </form>
        </Modal>
    )
}