export type ShipmentResponseDto = {
    "id": string,
    "createdAt": string,
    "trackingNumber": string,
    "provider": string,
    "mode": string,
    "originCountry": string,
    "destinationCountry": string,
    "companyId": string,
    "company": {
        "id": string,
        "name": string
    },
    "invoice": {
        "id": string,
        "invoicedPrice": number,
        "invoicedWeight": number
    }
};