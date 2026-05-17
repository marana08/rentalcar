'use client';

import { useState } from 'react';
import styles from './Filters.module.css';
import { CarFilters } from '@/types/car';
import { onlyNumbers } from '@/utils/onlyNumbers';
import { formatMileageInput } from '@/utils/formatMileageInput';
import { useCarFilters } from '@/hooks/useFilters';
import CustomSelect from '../CustomSelect/CustomSelect';

type FiltersProps = {
  onSubmit: (filters: CarFilters) => void;
};

export default function Filters({ onSubmit }: FiltersProps) {
  const {
    data: filterData,
    isLoading: isFiltersLoading,
    isError: isFiltersError,
  } = useCarFilters();

  const brands = filterData?.brands ?? [];

  const prices = filterData?.price
    ? Array.from(
        { length: filterData.price.max - filterData.price.min + 1 },
        (_, index) => filterData.price.min + index,
      )
    : [];
  const [brand, setBrand] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
    });
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <CustomSelect
          label='Car brand'
          placeholder={
            isFiltersLoading
              ? 'Loading brands...'
              : isFiltersError
                ? 'Brands unavailable'
                : 'Choose a brand'
          }
          value={brand}
          options={brands}
          disabled={isFiltersLoading || isFiltersError}
          onChange={setBrand}
        />
      </label>
      <label className={styles.field}>
          <CustomSelect
            label='Price / 1 hour'
            placeholder='Choose a price'
            value={rentalPrice}
            options={prices.map(String)}
            prefix='To $'
            disabled={isFiltersLoading || isFiltersError}
            onChange={setRentalPrice}
          />
      </label>

      <div className={styles.field}>
        <span className={styles.label}>Car mileage / km</span>
        <div className={styles.mileage}>
          <label className={styles.mileageInput}>
            <span className={styles.prefix}>From</span>
            <input
              className={styles.inputWithPrefix}
              type='text'
              inputMode='numeric'
              value={formatMileageInput(minMileage)}
              onChange={(event) =>
                setMinMileage(onlyNumbers(event.target.value))
              }
            />
          </label>

          <label className={styles.mileageInput}>
            <span className={styles.prefix}>To</span>
            <input
              className={styles.inputWithPrefix}
              type='text'
              inputMode='numeric'
              value={formatMileageInput(maxMileage)}
              onChange={(event) =>
                setMaxMileage(onlyNumbers(event.target.value))
              }
            />
          </label>
        </div>
      </div>

      <button
        type='submit'
        className={styles.button}
        disabled={isFiltersLoading}
      >
        Search
      </button>
    </form>
  );
}