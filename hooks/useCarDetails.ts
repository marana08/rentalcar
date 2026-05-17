'use client';

import { useQuery } from '@tanstack/react-query';
import { getCarById } from '@/lib/api';

export function useCarDetails(id: string) {
  return useQuery({
    queryKey: ['car', id],
    queryFn: () => getCarById(id),
    enabled: Boolean(id),
  });
}