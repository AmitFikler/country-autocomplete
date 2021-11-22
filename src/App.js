import React, { useEffect, useState } from 'react';
import OptionsDropdown from './components/OptionsDropdown';
import SearchBar from './components/SearchBar';
import { countries } from './countriesData';

export default function App() {
  const [countryArr, setCountry] = useState(countries);
  const [searchBar, setSearchBar] = useState('');
  const handleCounteyChange = (e) => console.log(e.target.value);
  const filterArr = (str) => {
    str = str || str.toLowerCase();
    const filtering = countryArr.filter((country) =>
      country.label.toLowerCase().includes(str)
    );
    return filtering;
  };
  return (
    <div>
      <SearchBar />
      <OptionsDropdown
        countries={filterArr('')}
        onChange={handleCounteyChange}
      />
    </div>
  );
}
