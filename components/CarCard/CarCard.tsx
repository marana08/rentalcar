import Image from 'next/image';
import Link from 'next/link';
import type { Car } from '@/types/car';
import styles from './CarCard.module.css';

type CarCardProps = {
  car: Car;
  priority?: boolean;
};

export default function CarCard({ car, priority = false }: CarCardProps) {
  const addressParts = car.address.split(', ');
  const city = addressParts[addressParts.length - 2] ?? car.address;
  const country = addressParts[addressParts.length - 1] ?? '';

  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          fill
          sizes="276px"
          priority={priority}
          className={styles.image}
        />
        <span className={styles.favorite} aria-hidden="true">♥</span>
      </div>

      <div className={styles.titleRow}>
        <h2 className={styles.title}>
          {car.brand} <span>{car.model}</span>, {car.year}
        </h2>
        <p className={styles.price}>${car.rentalPrice}</p>
      </div>

      <p className={styles.info}>
        {city} | {country} | {car.rentalCompany} | {car.type} |{' '}
        {car.mileage.toLocaleString('en-US')} km
      </p>

      <Link href={`/catalog/${car.id}`} className={styles.button}>
        Read more
      </Link>
    </li>
  );
}
