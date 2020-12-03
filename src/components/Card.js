import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

export default function UserCard({ data}) {
    console.log(data);
    const history = useHistory();

    const getItem = (name, value) => {
        return (
            <>
                <Grid item xs={12}>
                    <Grid item xs={6}>
                        <Typography color="textSecondary" gutterBottom>
                            {name}
                       </Typography> 
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{fontSize: "20px"}}>
                        {value}
                        </Typography>
                    </Grid>
                </Grid>
            </>
        );
    }
    return (
        <Card style={{ margin: "1%"}}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        {getItem("Borrower name", data[0].name)}
                    </Grid>
                    <Grid item xs={4}>
                        {getItem("Loaner name", data[1].name)}
                    </Grid>
                    <Grid item xs={4}>
                        {getItem("Interest", data[0].interestRate)}
                    </Grid>
                    <Grid item xs={4}>
                        {getItem("Amount", data[0].loan_amount)}
                    </Grid>
                    <Grid item xs={4}>
                        {getItem("Start date", new Date(data[0].loan_start).toDateString())}
                    </Grid>
                    <Grid item xs={4}>
                        {getItem("End date", new Date(data[0].loan_end).toDateString())}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=> history.push('/find')}>Learn More</Button>
            </CardActions>
        </Card>
    );
}
