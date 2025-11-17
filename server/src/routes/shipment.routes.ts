import {Router, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {ShipmentResponseDto} from "@shared/dto/ShipmentResponseDto.ts";

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req, res: Response<ShipmentResponseDto[]>) => {

    const companiesQuery = req.query.companies as string | undefined;

    const companyIds = companiesQuery
        ? companiesQuery.split(',')
        : undefined;

    const data = await prisma.shipment.findMany({
        where: companyIds ? { companyId: { in: companyIds } } : undefined,
        include: {
            company: true,
            invoices: {
                orderBy: { createdAt: "desc" },
                take: 1,
                select: {
                    id: true,
                    invoicedPrice: true,
                    invoicedWeight: true,
                }
            }
        },
    });

    const shipments: ShipmentResponseDto[] = data.map((shipment) => ({
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
        invoice: {
            id: shipment.invoices[0]?.id || '',
            invoicedPrice: shipment.invoices[0]?.invoicedPrice || 0,
            invoicedWeight: shipment.invoices[0]?.invoicedWeight || 0,
        }
    }));

    res.json(shipments);
})

export default router;