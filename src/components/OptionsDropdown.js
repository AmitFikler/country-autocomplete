import React from 'react';
import { countries } from '../countriesData';
import Option from './Option';

export default function OptionsDropdown() {
  return (
    <select>
      {countries.map((country) => (
        <Option country={country.label} />
      ))}
    </select>
  );
}
