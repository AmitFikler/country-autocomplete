import React from 'react';

export default function Option(props) {
  return (
    <option value={props.country}>
      {props.code} - {props.country}
    </option>
  );
}
