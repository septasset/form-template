import * as React from 'react';
import {Grid} from '@mui/material';

import TaskCard from "./Components/TaskCard";

export default function TaskGrid(props) {
    return (
        <Grid container spacing={4} >
        { props.tasks.map(task => (
            <Grid item xs={12} sm={6} lg={4} xl={3}> {/* For matching different screen size */}
                <TaskCard task={task}/>
            </Grid>
        ))}
        </Grid>
    );
}