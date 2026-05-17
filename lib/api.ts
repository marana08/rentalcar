import { BookingRequestPayload, CarFilters } from "@/types/car";
import axios from "axios";

export const api = axios.create({
    baseURL:
        process.env.NEXT_PUBLIC_API_URL || "https://car-rental-api.goit.study",
});
export const getCars = async (page: number, filters: CarFilters) => {
    const { data } = await api.get("/cars", {
        params: {
            page,
            perPage: 8,
            brand: filters.brand || undefined,
            price: filters.rentalPrice || undefined,
            minMileage: filters.minMileage || undefined,
            maxMileage: filters.maxMileage || undefined,
        },
    });

    return data;
};

export const getCarFilters = async () => {
    const { data } = await api.get("/cars/filters");

    return data;
};

export const getCarById = async (id: string) => {
    const { data } = await api.get(`/cars/${id}`);
    return data;
};

export const createBookingRequest = async (
    carId: string,
    payload: BookingRequestPayload,
) => {
    const { data } = await api.post(`/cars/${carId}/booking-requests`, payload);

    return data;
};
