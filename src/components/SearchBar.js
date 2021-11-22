import React from 'react';

export default function SearchBar(props) {
  return (
    <input
      //   onKeyDown={props.onkeydown}
      onChange={() => {
        props.onkeydown(
          document.querySelector('input').value
            ? document.querySelector('input').value
            : ''
        );
      }}
      value={props.pickedCoutry}
    ></input>
  );
}
