import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import type { ShipmentResponseDto } from "@shared/dto/ShipmentResponseDto.ts";

export function useShipments(selectedCompanyIds: string[] = []) {
    return useQuery({
        queryKey: ['shipments', selectedCompanyIds],
        queryFn: () => {
            const queryParams = selectedCompanyIds.length
                ? `?companies=${selectedCompanyIds.join(',')}`
                : '';

            return api<ShipmentResponseDto[]>(`/shipment${queryParams}`);
        },
        staleTime: 1000 * 60,
    });
}
