'use client';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    type FieldProps,
    type FormikHelpers,
} from 'formik';

import * as Yup from 'yup';

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

const validationSchema = Yup.object({
    name: Yup.string().trim().required('Name is required'),

    email: Yup.string()
        .trim()
        .email('Invalid email')
        .required('Email is required'),

    date: Yup.date()
        .nullable()
        .required('Booking date is required'),

    comment: Yup.string().trim(),
});

export default function RentalForm({ carId }: RentalFormProps) {
    const handleSubmit = async (
        values: RentalFormValues,
        { resetForm }: FormikHelpers<RentalFormValues>
    ) => {
        const isoDate = values.date ? values.date.toISOString() : new Date().toISOString();

        const payload = {
            name: values.name.trim(),
            email: values.email.trim(),
            comment: values.comment.trim() || 'No comment',
            date: isoDate,
            // some backends expect 'bookingDate' instead of 'date' — include both for compatibility
            bookingDate: isoDate,
        };

        try {
            // log payload to help debug 400 responses
            // eslint-disable-next-line no-console
            console.log('Booking payload:', payload, 'carId:', carId);
            await createBookingRequest(carId, payload);

            toast.success('Car rented successfully!');
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={styles.form}>
                    <h2 className={styles.title}>Book your car now</h2>

                    <p className={styles.text}>
                        Stay connected! We are always ready to help you.
                    </p>

                    <div>
                        <Field
                            className={styles.input}
                            type="text"
                            name="name"
                            placeholder="Name*"
                        />
                        <ErrorMessage
                            name="name"
                            component="p"
                            className={styles.error}
                        />
                    </div>

                    <div>
                        <Field
                            className={styles.input}
                            type="email"
                            name="email"
                            placeholder="Email*"
                        />
                        <ErrorMessage
                            name="email"
                            component="p"
                            className={styles.error}
                        />
                    </div>

                    <div>
                        <Field name="date">
                            {({ form }: FieldProps<RentalFormValues>) => (
                                <DatePicker
                                    selected={form.values.date}
                                    onChange={(date: Date | null) =>
                                        form.setFieldValue('date', date)
                                    }
                                    placeholderText="Booking date"
                                    dateFormat="dd.MM.yyyy"
                                    className={styles.input}
                                    wrapperClassName={styles.datePickerWrapper}
                                    calendarClassName={styles.calendar}
                                    popperClassName={styles.popper}
                                    minDate={new Date()}
                                />
                            )}
                        </Field>

                        <ErrorMessage
                            name="date"
                            component="p"
                            className={styles.error}
                        />
                    </div>

                    <Field
                        as="textarea"
                        className={styles.textarea}
                        name="comment"
                        placeholder="Comment"
                    />

                    <button
                        className={styles.button}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}