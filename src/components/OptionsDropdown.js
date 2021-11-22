import React from 'react';
import Option from './Option';

export default function OptionsDropdown(props) {
  return (
    <select onChange={(e) => props.onChange(e)}>
      {props.countries.map((country) => (
        <Option
          key={country.label}
          code={country.code}
          country={country.label}
        />
      ))}
    </select>
  );
}
