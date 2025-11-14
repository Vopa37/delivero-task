import {Router, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {ShipmentDto} from "@shared/dto/ShipmentDto.ts";

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req, res: Response<ShipmentDto[]>) => {
    const data = await prisma.shipment.findMany({
        include: {
            company: true,
        },
    });

    const shipments: ShipmentDto[] = data.map((shipment) => ({
        id: shipment.id,
        createdAt: shipment.createdAt.toISOString(),
        trackingNumber: shipment.trackingNumber,
        provider: shipment.provider,
        mode: shipment.mode,
        originCountry: shipment.originCountry,
        destinationCountry: shipment.destinationCountry,
        companyId: shipment.companyId,
        company: {
            id: shipment.company.id,
            name: shipment.company.name,
        },
    }));

    res.json(shipments);
})

export default router;