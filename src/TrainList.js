import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Make an API request to get a list of all trains
    axios.get('http://20.244.56.144/train/trains')
      .then((response) => {
        // Handle the API response and update the state
        setTrains(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>All Trains</Typography>
      <List>
        {trains.map((train) => (
          <ListItem key={train.trainNumber}>
            <ListItemText
              primary={train.trainName}
              secondary={`Departure Time: ${train.departureTime.Hours}:${train.departureTime.Minutes}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default TrainList;
