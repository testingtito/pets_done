import React from 'react'

const Pet = ({ name, species, age, id, setPets }) => {
  const deleteHandler = () => {
    setPets(pets => pets.filter(pet => pet.id !== id))
  }
  return (
    <div>
      <ul>
        <li>{name} is {species} and {age} years old
        <button onClick={deleteHandler} >Delete</button>
        </li>
      </ul>
    </div >
  )
}

export default Pet
