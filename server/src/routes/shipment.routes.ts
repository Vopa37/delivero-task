import {Router} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req, res) => {
    const shipments = await prisma.shipment.findMany({
        include: {
            company: true,
        },
    });

    res.json(shipments);
})

export default router;