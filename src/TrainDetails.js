import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const TrainDetails = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Make an API request to get details of a specific train
    axios.get(`http://20.244.56.144/train/trains/${trainNumber}`)
      .then((response) => {
        // Handle the API response and update the state
        setTrain(response.data);
      })
      .catch((error) => {
        console.error('Error fetching train details:', error);
      });
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{train.trainName} Details</Typography>
      <Typography>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</Typography>
      {/* Display seat availability, prices, delays, and other relevant information */}
    </Container>
  );
};

export default TrainDetails;
