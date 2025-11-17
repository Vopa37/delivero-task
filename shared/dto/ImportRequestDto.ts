export type ImportRequestDto = {
    id: string
    invoicedWeight: number
    invoicedPrice: number,
    shipment: {
        id: string,
        createdAt: string,
        trackingNumber: string,
        provider: string,
        mode: string,
        originCountry: string,
        destinationCountry: string,
        company: {
            id: string,
            name: string
        }
    }
}[]

export type ImportResponseDto = {
    success: boolean;
    count: number;
}
