import React from 'react';

export default function Option(props) {
  return (
    <li value={props.country} id={props.country}>
      {props.code} - {props.country}
    </li>
  );
}
