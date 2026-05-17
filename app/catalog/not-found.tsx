import Link from 'next/link';
import styles from '../page.module.css';

export default function CatalogNotFound() {
    return (
        <main>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Page not found</h1>
                    <p className={styles.text}>
                        The page you are looking for does not exist.
                    </p>
                    <Link href="/" className={styles.button}>
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
