'use client';

import { useState } from 'react';
import CarCard from '@/components/CarCard/CarCard';
import Filters from '@/components/Filters/Filters';
import { useCars } from '@/hooks/useCars';
import { CarFilters } from '@/types/car';
import styles from './catalog.module.css';

export default function CatalogPage() {
    const [filters, setFilters] = useState<CarFilters>({});

    const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
        useCars(filters);

    const cars = data?.pages.flatMap(page => page.cars) ?? [];

    return (
        <main className={styles.catalog}>
            <div className="container">
                <Filters onSubmit={setFilters} />

                {isLoading && <p className={styles.loader}>Loading...</p>}

                {!isLoading && (
                    <>
                        <ul className={styles.list}>
                            {cars.map((car, index) => (
                                <CarCard key={car.id} car={car} priority={index < 4} />
                            ))}
                        </ul>

                        {cars.length === 0 && (
                            <p className={styles.empty}>No cars found</p>
                        )}

                        {hasNextPage && (
                            <button
                                type="button"
                                className={styles.loadMore}
                                onClick={() => fetchNextPage()}
                                disabled={isFetchingNextPage}
                            >
                                {isFetchingNextPage ? 'Loading...' : 'Load more'}
                            </button>
                        )}
                    </>
                )}
            </div>
        </main>
    );
}