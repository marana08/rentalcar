import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCarById } from '@/lib/api';
import styles from './carDetails.module.css';
import RentalForm from '@/components/RentalForm/RentalForm';
import { Car } from '@/types/car';

type CarDetailsProps = {
  params: Promise<{
    carId: string;
  }>;
};

export async function generateMetadata({
  params,
}: CarDetailsProps): Promise<Metadata> {
  const { carId } = await params;

  try {
    const car: Car = await getCarById(carId);

    return {
      title: `RentalCar | ${car.brand} ${car.model}`,
      description: car.description,
      openGraph: {
        title: `RentalCar | ${car.brand} ${car.model}`,
        description: car.description,
        url: `https://localhost:3000/catalog/${carId}`,
        siteName: 'RentalCar',
        images: [
          {
            url: car.img,
            width: 1200,
            height: 630,
            alt: `${car.brand} ${car.model}`,
          },
        ],
        type: 'website',
      },
    };
  } catch {
    return {
      title: 'RentalCar | Car not found',
      description: 'The requested car could not be found.',
    };
  }
}

export default async function CarDetailsPage({ params }: CarDetailsProps) {
  const { carId } = await params;
  let car;

  try {
    car = await getCarById(carId);
  } catch {
    notFound();
  }
  const city = car.location.city;
  const country = car.location.country;

  return (
    <main className={styles.details}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.leftSide}>
            <div className={styles.imageWrapper}>
              <Image
                src={car.img}
                alt={`${car.brand} ${car.model}`}
                fill
                sizes='640px'
                className={styles.image}
                priority
              />
            </div>
            <RentalForm carId={car.id} />
          </div>

          <div className={styles.content}>
            <div className={styles.titleRow}>
              <h1 className={styles.title}>
                {car.brand} {car.model}, {car.year}
              </h1>

              <span className={styles.carId}>Id: {car.id.slice(0, 4)}</span>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <svg className={styles.icon}>
                  <use
                    width='12px'
                    height='15px'
                    href='/sprite.svg#icon-location'
                  />
                </svg>
                {city}, {country}
              </span>

              <span>Mileage: {car.mileage.toLocaleString('en-US')} km</span>
            </div>

            <p className={styles.price}>${car.rentalPrice}</p>

            <p className={styles.description}>{car.description}</p>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Rental Conditions:</h2>

              <ul className={styles.list}>
                {car.rentalConditions.map((condition: string) => (
                  <li key={condition} className={styles.item}>
                    <svg className={styles.icon}>
                      <use
                        width='16px'
                        height='16px'
                        href='/sprite.svg#icon-check-circle'
                      />
                    </svg>
                    {condition}
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Car Specifications:</h2>

              <ul className={styles.list}>
                <li className={styles.item}>
                  <svg className={styles.icon}>
                    <use
                      width='16px'
                      height='16px'
                      href='/sprite.svg#icon-calendar'
                    />
                  </svg>
                  Year: {car.year}
                </li>

                <li className={styles.item}>
                  <svg className={styles.icon}>
                    <use
                      width='16px'
                      height='16px'
                      href='/sprite.svg#icon-car'
                    />
                  </svg>
                  Type: {car.type}
                </li>

                <li className={styles.item}>
                  <svg className={styles.icon}>
                    <use
                      width='16px'
                      height='16px'
                      href='/sprite.svg#icon-fuel'
                    />
                  </svg>
                  Fuel Consumption: {car.fuelConsumption}
                </li>

                <li className={styles.item}>
                  <svg className={styles.icon}>
                    <use
                      width='16px'
                      height='16px'
                      href='/sprite.svg#icon-gear'
                    />
                  </svg>
                  Engine Size: {car.engine}
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Accessories and functionalities:
              </h2>

              <ul className={styles.list}>
                {car.features.map((item: string) => (
                  <li key={item} className={styles.item}>
                    <svg className={styles.icon}>
                      <use
                        width='16px'
                        height='16px'
                        href='/sprite.svg#icon-check-circle'
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}