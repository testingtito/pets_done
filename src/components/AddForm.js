import React, { useState } from 'react'

const AddForm = ({ setPets }) => {
  const [name, setName] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    setPets(pets => pets.concat({ name, species, age, id: Date.now() }))
    setName("")
    setSpecies("")
    setAge("")
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          placeholder="name"
        />
        <input
          onChange={e => setSpecies(e.target.value)}
          value={species}
          placeholder="species"
        />
        <input
          onChange={e => setAge(e.target.value)}
          value={age}
          placeholder="age"
        />
        <button>Add Net Pet</button>
      </fieldset>

    </form>
  )
}

export default AddForm
