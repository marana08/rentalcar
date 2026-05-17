'use client';
import Link from 'next/link';
import Image from 'next/image';
import type { Car } from '@/types/car';
import styles from './CarCard.module.css';
import { useState } from 'react';
import toast from 'react-hot-toast';

type CarCardProps = {
  car: Car;
  priority?: boolean;
};

export default function CarCard({ car, priority = false }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const city = car.location.city;
  const country = car.location.country;

  const handleFavoriteClick = () => {
    const nextValue = !isFavorite;

    setIsFavorite(nextValue);

    toast.success(nextValue ? 'Added to favorites' : 'Removed from favorites');
  };

  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes='276px'
          priority={priority}
          className={styles.image}
        />
        <button
          type='button'
          className={styles.favoriteButton}
          onClick={handleFavoriteClick}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg className={styles.favoriteIcon}>
            <use
              href={
                isFavorite
                  ? '/sprite.svg#icon-heart-filled'
                  : '/sprite.svg#icon-heart'
              }
            />
          </svg>
        </button>
      </div>

      <div className={styles.titleRow}>
        <h2 className={styles.title}>
          {car.brand} <span className={styles.model}>{car.model}</span>,{' '}
          {car.year}
        </h2>

        <p className={styles.price}>${car.rentalPrice}</p>
      </div>

      <p className={styles.info}>
        {city} | {country} | {car.rentalCompany} | {car.type} |{' '}
        {car.mileage.toLocaleString('en-US')} km
      </p>

      <Link
        href={`/catalog/${car.id}`}
        target='_blank'
        className={styles.button}
      >
        Read more
      </Link>
    </li>
  );
}