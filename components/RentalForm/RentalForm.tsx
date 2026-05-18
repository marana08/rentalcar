'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import type { FieldProps } from 'formik';
import { Formik, Form, Field } from 'formik';
import styles from './RentalForm.module.css';
import toast from 'react-hot-toast';
import { createBookingRequest } from '@/lib/api';

type RentalFormProps = {
    carId: string;
};

type RentalFormValues = {
    name: string;
    email: string;
    date: Date | null;
    comment: string;
};

const initialValues: RentalFormValues = {
    name: '',
    email: '',
    date: null,
    comment: '',
};

export default function RentalForm({ carId }: RentalFormProps) {
    const handleSubmit = async (
        values: RentalFormValues,
        { resetForm }: { resetForm: () => void }
    ) => {
        const payload = {
            name: values.name.trim(),
            email: values.email.trim(),
            comment: values.comment.trim() || 'No comment',
        };

        try {
            await createBookingRequest(carId, payload);

            toast.success('Car rented successfully!');
            resetForm();
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };          

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={styles.form}>
                <h2 className={styles.title}>Book your car now</h2>

                <p className={styles.text}>
                    Stay connected! We are always ready to help you.
                </p>

                <Field
                    className={styles.input}
                    type='text'
                    name='name'
                    placeholder='Name*'
                    required
                />

                <Field
                    className={styles.input}
                    type='email'
                    name='email'
                    placeholder='Email*'
                    required
                />

                <Field name='date'>
                    {({ form }: FieldProps<RentalFormValues>) => (
                        <DatePicker
                            selected={form.values.date}
                            onChange={(date: Date | null) => form.setFieldValue('date', date)}
                            placeholderText='Booking date'
                            dateFormat='dd.MM.yyyy'
                            className={styles.input}
                            wrapperClassName={styles.datePickerWrapper}
                            calendarClassName={styles.calendar}
                            popperClassName={styles.popper}
                            minDate={new Date()}
                        />
                    )}
                </Field>
                <Field
                    as='textarea'
                    className={styles.textarea}
                    name='comment'
                    placeholder='Comment'
                />

                <button className={styles.button} type='submit'>
                    Send
                </button>
            </Form>
        </Formik>
    );
}