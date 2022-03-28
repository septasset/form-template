import * as React from 'react';
import {Card, CardActions, CardContent, CardActionArea} from '@mui/material';
import Typography from '@mui/material/Typography';
import {Button, ButtonGroup} from '@mui/material';
import {Grid, Stack, Divider } from '@mui/material';

import EventIcon from '@mui/icons-material/Event';
import AvTimerIcon from '@mui/icons-material/AvTimer';


export default function TaskCard(props) {
  return (
    <Card sx={{ minWidth: 50 }}>
    <CardContent>
        <CardActionArea>
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
        >
            <Grid item xs={6}>
                <Typography align="left" variant="h4" gutterBottom>
                    {props.task.title}
                </Typography>
            </Grid>  
            <Grid item xs={6}>
                <Typography align="right" variant="h5" gutterBottom>
                    {props.task.assigner}
                </Typography>
            </Grid>
        </Grid>

        
        <Typography align="left" color="text.secondary">
            {props.task.detail}
        </Typography>
        </CardActionArea>

        <Stack   
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
        >      
            <EventIcon />         
            <Typography component="span">
                {props.task.ddl}
            </Typography>
                      
            <AvTimerIcon />
            <Typography component="span">
                {props.task.expectedTime}
            </Typography>   
        </Stack>            
    </CardContent>

    <CardActions sx={ {justifyContent:"flex-end"} }>       
        <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={ {justifyContent:"flex-end"} }>
            <Button size="small">Accept</Button>
            <Button size="small">Decline</Button>
        </ButtonGroup>       
    </CardActions>
    </Card>
  );
}
