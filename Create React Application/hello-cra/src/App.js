import React from 'react';
import logo from './logo.svg';
import Hobbies from './Components/Hobbies';

function App() {
  return (
    <>
      <h1>This is my first website</h1>
      <p>Hi! My I'm Luis and this is my website. I like a lot of stuff like: </p>
      <Hobbies hobbies={["Tennis", "Programming", "Soccer", "Guitar"]}/>
    </>
  );
}

export default App;
