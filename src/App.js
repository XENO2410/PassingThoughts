import React, { useState } from 'react';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'Wish I Knew',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "Evenidk",
      expiresAt: getNewExpirationTime(),
    },
  ]);
const addThought = (thought) => {
  setThoughts((prevThoughts) => [thought, ...prevThoughts]);
};
const removeThought = (thoughtIdToRemove) => {
  setThoughts((thoughts)=> 
  thoughts.filter((thought)=>thought.id!==thoughtIdToRemove)
  );
};


  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}
