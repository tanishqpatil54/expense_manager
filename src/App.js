import React from 'react';
import { Grid } from '@material-ui/core';

import Main from './components/Main/Main'
import Details from './components/Details/Details';
import useStyles from './styles'

const App = () => {
    const classess = useStyles();

    return (
        <div>
            <Grid className={classess.grid} container spacing={0} alignItems='center' justify='center' style={{height: "100vh" }} >
                <Grid item xs={12} sm={2} className={classess.mobile} >
                    <Details title = "Income" />
                </Grid>
                <Grid item xs={12} sm={3} className={classess.main}>
                    <Main />
                    <Grid item xs={12} sm={2} className={classess.desktop} >
                    <Details title = "Income" />
                </Grid>
                </Grid>
                <Grid item xs={12} sm={2} className={classess.last}>
                    <Details title = "Expense" />
                </Grid>
            </Grid>
        </div>
    )
}

export default App
