import { useQuery } from '@tanstack/react-query';
import { api } from './api';
import type {ShipmentDto} from "@shared/dto/ShipmentDto";

export function useShipments() {
    return useQuery({
        queryKey: ['shipments'],
        queryFn: () => api<ShipmentDto[]>('/shipment'),
        staleTime: 1000 * 60,
    });
}