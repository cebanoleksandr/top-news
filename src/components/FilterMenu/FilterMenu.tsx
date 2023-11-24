import React from 'react';
import cn from 'classnames';
import { categories } from '../../utils/categories';
import { countries } from '../../utils/countries';
import './FilterMenu.scss';

type Props = {
  isFilter: boolean;
  country: string;
  setCountry: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  applyFiltersHandler: () => void;
};

export const FilterMenu: React.FC<Props> = ({
  isFilter,
  country,
  setCountry,
  category,
  setCategory,
  applyFiltersHandler
}) => {
  return (
    <div className={cn('filter-menu', {
      'open': isFilter
    })}>
      <label htmlFor="country">Country: </label>
      <select
        id="country"
        className="mb10"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        {countries.map(countryOption => (
          <option key={countryOption.code} value={countryOption.code}>
            {countryOption.country}
          </option>
        ))}
      </select>

      <label htmlFor="category">Category: </label>
      <select
        id="category"
        className="mb10"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map(categoryOption => (
          <option key={categoryOption} value={categoryOption}>
            {categoryOption}
          </option>
        ))}
      </select>

      <button className="btn btn-block btn-primary" onClick={applyFiltersHandler}>
        Apply filters
      </button>
    </div>
  );
};
