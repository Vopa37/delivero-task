import {Router, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {CompanyResponseDto} from "@shared/dto/CompanyResponseDto.ts";

const prisma = new PrismaClient();
const router = Router();

router.get('/', async (req, res: Response<CompanyResponseDto[]>) => {
    const companies = await prisma.company.findMany({
        select: {
            id: true,
            name: true,
        },
    });

    res.json(companies);
})

export default router;