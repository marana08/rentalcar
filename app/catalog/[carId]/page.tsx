import styles from './carDetails.module.css';

type Props = {
  params: {
    carId: string;
  };
};

export default async function CarDetailsPage({ params }: Props) {
  const { carId } = await params;
  return (
    <main className={styles.details}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.imagePlaceholder}>Car image</div>

          <div>
            <h1 className={styles.title}>Car details #{carId}</h1>

            <p className={styles.text}>
              Full information about the selected car will be here.
            </p>

            <form className={styles.form}>
              <input className={styles.input} type="text" placeholder="Name" />
              <input className={styles.input} type="email" placeholder="Email" />
              <input className={styles.input} type="date" />

              <button className={styles.button} type="submit">
                Rent car
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}