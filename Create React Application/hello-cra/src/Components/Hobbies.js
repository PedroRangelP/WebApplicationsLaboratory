import React from 'react';

const Hobbies = (props) => {
  return (
    <ul>
      {props.hobbies.map((hobby, i) => {
        return <li key={i}>{hobby}</li>
      })}
    </ul>
  );
}

export default Hobbies;