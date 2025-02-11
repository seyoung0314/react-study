import React, { useRef, useState } from 'react';
import Input from './Input2'

const Player = () => {

  // input태그를 저장할 ref
  const nameRef = useRef();

  const [enteredName, setEnteredName] = useState('anonymous');

  const handleChangeName = e => { 
    
    const $input = nameRef.current;
    setEnteredName($input.value);

    $input.value = '';
  };

  return (
    <section id='player'>
      <h2>Welcome { enteredName }!</h2>
      <p>
        <Input type='text' ref={nameRef} />
        <button onClick={handleChangeName}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;