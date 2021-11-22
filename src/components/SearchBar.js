import React, { useRef } from 'react';
import ClearButton from './ClearButton';

export default function SearchBar(props) {
  const inputSearch = useRef('');
  const clearInput = () => {
    inputSearch.current.value = '';
    props.onkeydown();
  };
  return (
    <>
      <input
        ref={inputSearch}
        onChange={() => {
          props.onkeydown(
            inputSearch.current.value ? inputSearch.current.value : ''
          );
        }}
        value={props.pickedCoutry}
      ></input>
      <button id="toggeleButton" onClick={(e) => props.onClickButton(e)}>
        Show
      </button>
      <ClearButton onClick={clearInput} />
    </>
  );
}
