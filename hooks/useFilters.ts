'use client';

import { useQuery } from '@tanstack/react-query';
import { getCarFilters } from '@/lib/api';

export function useCarFilters() {
  return useQuery({
    queryKey: ['carFilters'],
    queryFn: getCarFilters,
  });
}