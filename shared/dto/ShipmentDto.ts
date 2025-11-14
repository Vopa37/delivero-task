export type ShipmentDto = {
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
    }
};