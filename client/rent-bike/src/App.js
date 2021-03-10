import React from 'react';
import './App.css';
import Container from "./components/Container";
import Rent from "./components/Rent";
import RentList from "./components/RentList";
import BicycleList from "./components/BicycleList";

export default function App() {
  return (
    <Container>
      <h1 className={'mb-5'}>Awesome Bike Rental</h1>
      <Rent/>
      <RentList/>
      <BicycleList/>
    </Container>
  );
}
