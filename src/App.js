import React, { useState } from 'react';
import OptionsDropdown from './components/OptionsDropdown';
import SearchBar from './components/SearchBar';
import { countries } from './countriesData';

export default function App() {
  const [countryArr, setCountry] = useState(countries);
  const [searchBar, setSearchBar] = useState('');
  const [pickedCoutry, setPickedCoutry] = useState('');
  const handleCounteyChange = (e) => setPickedCoutry(e.target.id);
  const filterArr = (str) => {
    str = str || str.toLowerCase();
    const filtering = countryArr.filter((country) =>
      country.label.toLowerCase().includes(str)
    );
    return filtering;
  };
  return (
    <div>
      <SearchBar
        onkeydown={() => {
          setPickedCoutry(document.querySelector('input').value);
          setSearchBar(document.querySelector('input').value);
        }}
        pickedCoutry={pickedCoutry}
      />
      <OptionsDropdown
        countries={filterArr(searchBar)}
        onClick={handleCounteyChange}
      />
    </div>
  );
}
