import { CarFilters } from "@/types/car";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://car-rental-api.goit.global",
});

export const getCars = async (page: number, filters: CarFilters) => {
    const { data } = await api.get("/cars", {
        params: {
            page,
            limit: 12,
            brand: filters.brand || undefined,
            rentalPrice: filters.rentalPrice || undefined,
            minMileage: filters.minMileage || undefined,
            maxMileage: filters.maxMileage || undefined,
        },
    });

    return data;
};

export const getBrands = async () => {
    const { data } = await api.get("/brands");

    return data;
};
