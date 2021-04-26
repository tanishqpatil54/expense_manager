import React, { useContext } from 'react';
import{ Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseManagerContext } from '../../context/context';

import useStyles from './styles'; 
import Form from './Form/Form'
import List from './List/List';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseManagerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="made by Tanishq Patil" />
            <CardContent>
                <Typography align='center' variant="h5">Total Balance ₹{balance}</Typography>
                <Typography align='center' variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    {/* {InfoCard components...} */}
                    You can manage your expenses here 
                </Typography>
                <Divider />
                <Form />
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>

                </Grid>

            </CardContent>

        </Card>
    )
}

export default Main
