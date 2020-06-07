import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import LikeArea from './components/LikeArea';
import TimeArea from './components/TimeArea';
import AddForm from './components/AddForm';
import Pet from './components/Pet';

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setPets(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(pets));
  }, [pets]);


  return (
    <div>
      <Header />
      <LikeArea />
      <TimeArea />
      <AddForm setPets={setPets} />
      {
        pets.map(
          pet =>
            <Pet
              setPets={setPets}
              name={pet.name}
              species={pet.species}
              age={pet.age}
              id={pet.id}
              key={pet.id}
            />
        )
      }
      <Footer />
    </div>
  )
}

export default App