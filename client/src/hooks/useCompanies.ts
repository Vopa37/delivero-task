import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import type {CompanyResponseDto} from "@shared/dto/CompanyResponseDto.ts";

export function useCompanies() {
    return useQuery({
        queryKey: ['companies'],
        queryFn: () => api<CompanyResponseDto[]>('/company'),
        staleTime: 1000 * 60,
    });
}