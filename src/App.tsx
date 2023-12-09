import React from 'react';
import './App.css';
import { TourCard } from './modules/TourCard';


function App() {

  const generateTours = () => {
    const toursArray = []
    for (let i = 0; i < 3; i++) {
      toursArray.push(
        <TourCard
          key={i}
          imgSrc={require(`./assets/images/space-${i + 1}.png`)}
          header="extraordinary tour"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit"
        />
      )
    }
    return toursArray
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {generateTours()}
    </div>
  );
}

export default App;
