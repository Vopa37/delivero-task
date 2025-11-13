import {Router, type Request, type Response} from "express";
import {PrismaClient, Prisma} from "@prisma/client";
import type {ImportInputDto} from "@shared/dto/ImportInputDto.ts";

const router = Router();

const prisma = new PrismaClient()

router.post("/", async (req: Request, res: Response) => {
    const {invoices} = req.body as ImportInputDto;

    try {
        for (const invoice of invoices) {
            const { shipment, invoicedPrice, invoicedWeight, id } = invoice;
            const { company } = shipment;

            await prisma.company.upsert({
                where: { id: company.id },
                create: company,
                update: { name: company.name },
            });


            await prisma.shipment.upsert({
                where: { id: shipment.id },
                create: {
                    id: shipment.id,
                    createdAt: shipment.createdAt,
                    trackingNumber: shipment.trackingNumber,
                    provider: shipment.provider,
                    mode: shipment.mode,
                    originCountry: shipment.originCountry,
                    destinationCountry: shipment.destinationCountry,
                    companyId: company.id,
                } as Prisma.ShipmentUncheckedCreateInput,
                update: {
                    trackingNumber: shipment.trackingNumber,
                    provider: shipment.provider,
                    mode: shipment.mode,
                    originCountry: shipment.originCountry,
                    destinationCountry: shipment.destinationCountry,
                },
            });

            await prisma.invoice.upsert({
                where: { id },
                create: {
                    id,
                    invoicedWeight,
                    invoicedPrice,
                    shipmentId: shipment.id,
                } as Prisma.InvoiceUncheckedCreateInput,
                update: {
                    invoicedWeight,
                    invoicedPrice,
                },
            });
        }

        res.json({ success: true, count: invoices.length });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" + error });
    }
});

export default router;